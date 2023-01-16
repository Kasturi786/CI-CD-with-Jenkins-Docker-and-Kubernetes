pipeline {
  agent any
  tools {
    maven 'maven-3.8.5'
    jdk 'jdk-11.0.14'
  }
  stages {

        stage ('Build') {
      steps {
        sh 'mvn -B -Dmaven.test.skip=true clean package'
      }
    }
    
        stage ('Test') {
      steps {
        sh 'mvn test'
      }
    }
    
    
  }
}
