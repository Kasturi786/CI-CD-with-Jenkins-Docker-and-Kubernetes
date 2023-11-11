From ubuntu:latest
LABEL maintainer="Murad Alam <murad.jgec@gmail.com>"

# Set environment variables for configuration
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
ENV MAVEN_HOME=/usr/share/maven \
    LOCALHOST=some-postgres

# Install OpenJDK 11
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk

# install maven 
RUN apt-get install -y maven

RUN mkdir /home/back-end

WORKDIR /home/back-end
COPY ./back-end .
RUN mvn clean package -DskipTests
EXPOSE 8080
#ADD target/dockerk8s-0.0.1-SNAPSHOT.jar dockerk8s-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "target/dockerk8s-0.0.1-SNAPSHOT.jar"]


#docker create network cicddockerk8s
#docker run --rm --net cicddockerk8s --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
#docker run --rm --net cicddockerk8s --name some-backend -p 8080:8080 -d backend
