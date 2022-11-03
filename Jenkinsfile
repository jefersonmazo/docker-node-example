pipeline {

    environment {
        registry = "jeruiz16/node-example"
        registryCredential = '384f0f74-6b28-43f4-a996-93fc368b4fd4'
        dockerImage = ''
    }
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Iniciar Build..'
            }
            stage('Clonando repositorio') {
                steps {
                git 'git@github.com:jruiz16/docker-node-example.git'
                }
            }
            stage('Building Docker Image') {
                steps {
                    script {
                        dockerImage = docker.build registry + ":$BUILD_NUMBER"
                    }
                }
            }
            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    script {
                        docker.withRegistry('', registryCredential) {
                        dockerImage.push()
                        }
                    }
                }
            }
            stage('Cleaning Up') {
                steps{
                  sh "docker rmi --force $registry:$BUILD_NUMBER"
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}