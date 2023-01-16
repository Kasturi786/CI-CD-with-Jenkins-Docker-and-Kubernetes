pipeline {
  agent any
  tools {
    maven 'Maven-3.8.5'
    jdk 'jdk8'
  }
  stages {

        stage ('Build') {
      steps {
        //bat 'mvn -DskipTests=true clean package'
      }
    }
    
        stage ('Test') {
      steps {
        bat 'mvn test'
      }
    }
    
    
  }
}
