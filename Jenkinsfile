pipeline {
  agent any
  tools {
    maven 'maven-3.8.5' 
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
