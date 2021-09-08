FROM jboss/keycloak:11.0.3

USER root

WORKDIR /

#ADD /theme/custom /opt/jboss/keycloak/themes/custom

ADD /standalone.xml /opt/jboss/keycloak/standalone/configuration/standalone.xml

ENTRYPOINT ["/opt/jboss/tools/docker-entrypoint.sh"]