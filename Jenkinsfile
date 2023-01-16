pipeline {
  agent any
  tools {
    maven 'maven-3.5.8' 
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
