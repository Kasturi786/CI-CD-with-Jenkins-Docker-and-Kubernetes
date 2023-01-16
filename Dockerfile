From openjdk
EXPOSE 8080
ADD target/dockerk8s-0.0.1-SNAPSHOT.jar dockerk8s-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "/dockerk8s-0.0.1-SNAPSHOT.jar"]
