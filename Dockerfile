FROM jboss/keycloak:11.0.3
# FROM jboss/keycloak:6.0.1

USER root

WORKDIR /

# ADD /theme/custom /opt/jboss/keycloak/themes/custom
# ADD /auth/themes/ /opt/jboss/keycloak/themes/

ADD /standalone.xml /opt/jboss/keycloak/standalone/configuration/standalone.xml

ENTRYPOINT ["/opt/jboss/tools/docker-entrypoint.sh"]