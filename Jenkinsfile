pipeline {
  agent any
  tools {
    maven 'maven-3.5.8'
    jdk 'jdk1.8.0_202'
  }
  stages {

        stage ('Build') {
      steps {
        sh 'mvn -B -DskipTests clean package'
      }
    }
    
        stage ('Test') {
      steps {
        sh 'mvn test'
      }
    }
    
    
  }
}
