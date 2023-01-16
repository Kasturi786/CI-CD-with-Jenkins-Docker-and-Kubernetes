pipeline {
  agent any
  tools {
    maven 'maven-3.8.5'
    jdk 'jdk1.8.0_202'
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
