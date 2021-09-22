FROM jboss/keycloak:11.0.3
# FROM jboss/keycloak:6.0.1

USER root

WORKDIR /

# ADD /theme/custom /opt/jboss/keycloak/themes/custom

ADD /standalone-ha.xml /opt/jboss/keycloak/standalone/configuration/standalone-ha.xml

ENTRYPOINT ["/opt/jboss/tools/docker-entrypoint.sh"]