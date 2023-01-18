pipeline {
  agent any
  tools {
    maven 'Maven-3.8.7'
    jdk 'jdk11'
  }
  stages {

         stage ('Build') {
       steps {
          sh 'mvn -DskipTests=true clean package'
        }
      }
    
        stage ('Test') {
      steps {
        sh 'mvn test'
      }
    }
    
    stage ('Build Docker image') {
      steps {
        sh 'docker build -t dockerk8s .'
      }
    }
    
    stage ('Push Docker image') {
      steps {
        script {
          withCredentials([string(credentialsId: 'Kasturi786', variable: 'dockerhubpwd')]) {
            sh 'docker login -u kasturi786 -p ${dockerhubpwd}'
            sh 'docker push dockerk8s'
         }
        
        }
      }
    }
    
  }
}
