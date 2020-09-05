pipeline {
    agent any

    stages {
        stage('Pull code............') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/${branch}']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '13c49a9b-bbce-4282-a4fa-7604940753c0', url: 'https://github.com/leadkj/blog_front.git']]])
            }
        }
        stage('Build project............') {
            steps {
                bat 'npm run build'
            }
        }
    }
}