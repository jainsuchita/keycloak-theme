NS ?= test
VERSION ?= latest
IMAGE_NAME ?= keycloak-theme
CONTAINER_NAME ?= keycloak-testing-container
SOURCE ?= /Users/suchitajain/code/keycloak/keycloak-theme/theme/custom
TARGET ?= /opt/jboss/keycloak/themes/custom
PORT ?= 8080

build:
	docker build -t $(NS)/$(IMAGE_NAME):$(VERSION) -f Dockerfile .

startup:
	docker run -d\
	--name $(CONTAINER_NAME) \
	-p 8080:8080 \
	-e KEYCLOAK_USER=admin \
	-e KEYCLOAK_PASSWORD=admin \
	jboss/keycloak:11.0.3

copyFolder:
	docker cp $(CONTAINER_NAME):/opt/jboss/keycloak/themes/ ./theme

copyStandalone:
	docker cp $(CONTAINER_NAME):/opt/jboss/keycloak/standalone/configuration/standalone-ha.xml .

run:
	docker run \
	--name $(CONTAINER_NAME) \
	--mount type=bind,source=$(SOURCE),target=$(TARGET) \
	-p $(PORT):$(PORT) \
	-e KEYCLOAK_USER=admin \
	-e KEYCLOAK_PASSWORD=admin \
	-e KEYCLOAK_DEFAULT_THEME=custom \
	-e KEYCLOAK_WELCOME_THEME=keycloak \
	-it $(NS)/$(IMAGE_NAME):$(VERSION)

delete:
	docker rm --force $(CONTAINER_NAME)

deploy: 
	make delete
	make build
	make run

default: build