Lancement de l'API
Ce guide décrit les étapes nécessaires pour lancer l'API, la base de données et Adminer à l'aide de Docker.

Prérequis
Avant de commencer, assurez-vous d'avoir installé Docker sur votre système. Pour vérifier, exécutez la commande suivante dans votre terminal :

docker --version
Si Docker n'est pas installé, veuillez le télécharger et l'installer depuis le site officiel de Docker.

Étapes de Lancement
Suivez ces étapes pour démarrer l'API :

1. Démarrer Docker
Assurez-vous que le service Docker est en cours d'exécution sur votre machine. Cela peut varier selon votre système d'exploitation. Par exemple, sur Windows ou MacOS, Docker peut être démarré via Docker Desktop.

2. Lancer les Services avec Docker Compose
Ouvrez un terminal et naviguez vers le répertoire racine du projet où se trouve le fichier docker-compose.yml. Exécutez ensuite la commande suivante :

docker-compose up -d
Cette commande va démarrer les services nécessaires en arrière-plan :

API : Votre service d'API principal.
Base de Données : Le service de base de données MySQL.
Adminer : Un outil de gestion de base de données accessible via le navigateur.
Accès aux Services
Une fois les services lancés, vous pouvez y accéder de la manière suivante :

API : Accessible à l'adresse http://localhost:PORT (remplacez PORT par le port configuré pour votre API).
Adminer : Accessible à l'adresse http://localhost:8080.
Arrêter les Services
Pour arrêter tous les services lancés via Docker Compose, exécutez la commande suivante :

docker-compose down