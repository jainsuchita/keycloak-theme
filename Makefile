# docker-build:
#	docker build -t jainsuchi21/keycloak-theme .

#docker-run:
#	docker run -d\
		--name keycloak-testing-container \
		-p 4000:8080 \
		-e KEYCLOAK_USER=admin \
		-e KEYCLOAK_PASSWORD=admin \
		-it jainsuchi21/keycloak-theme:latest \
#		-v ~/Users/suchitajain/code/keycloak/keycloak-theme:/keycloak-theme

#docker-delete:
#	docker rm keycloak-testing-container


NS ?= test
VERSION ?= latest
IMAGE_NAME ?= keycloak-theme
CONTAINER_NAME ?= keycloak-testing-container
SOURCE ?= /Users/suchitajain/code/keycloak/keycloak-theme/theme/
# SOURCE ?= /Users/suchitajain/code/keycloak/keycloak-theme/auth/themes
# TARGET ?= /opt/jboss/keycloak/themes/custom
TARGET ?= /opt/jboss/keycloak/themes/

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
#	docker cp $(CONTAINER_NAME):/opt/jboss/keycloak/themes/keycloak ./theme
	docker cp $(CONTAINER_NAME):/opt/jboss/keycloak/themes/ ./theme

copyStandalone:
#	docker cp $(CONTAINER_NAME):/opt/jboss/keycloak/standalone/configuration/standalone.xml .
	docker cp $(CONTAINER_NAME):/opt/jboss/keycloak/standalone/configuration/standalone-ha.xml .

run:
	docker run \
	--name $(CONTAINER_NAME) \
	--mount type=bind,source=$(SOURCE),target=$(TARGET) \
	-p 8080:8080 \
	-e KEYCLOAK_USER=admin \
	-e KEYCLOAK_PASSWORD=admin \
	-it $(NS)/$(IMAGE_NAME):$(VERSION)

delete:
	docker rm --force $(CONTAINER_NAME)

deploy: 
	make delete
	make build
	make run

default: build