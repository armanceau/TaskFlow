
# TaskFlow 📌

Task FLow est un outil de gestion de projet, il est possible de créer des projets ainsi que d'assigner des tâches à un utilisateur.

Cet outil a été réalisé en Express (backend) et Vue (frontend).

Projet d'école :  https://nowledgeable.com/student/courses/1653

## Features

- __Projet__ : 
    - Créer un projet ;
    - Supprimer un projet ; 
    - Afficher la liste des projets ; 
    - Afficher les détails d'un projet ;

- __Tâche__ : 
    - Créer une tâche ;
    - Supprimer une tâche ; 
    - Afficher la liste des tâches appartenant à un projet ; 

- __Authentification__ : 
    - S'inscrire ;
    - Se connecter ;
    - Se déconnecter

## Getting Started

Cloner le projet : 
```bash
git clone https://github.com/armanceau/TaskFlow.git
```

Se déplacer dans le projet : 
```bash
cd TaskFlow
```

Lancer le backend : 
```bash
cd /backend
npm install
cd /src 
node app.mjs
```

Lancer les tests du backend : 
```bash
cd /backend/tests 
npm run test
```

Lancer le frontend : 
```bash
cd /frontend/my-app 
npm install
npm run dev
```

Lancer le frontend : 
```bash
cd /frontend/my-app 
npm install
npm run dev
```

Lancer les tests frontend : 
```bash
cd /frontend/my-app 
npx vitest
```

Lancer les tests frontend cypress : 
```bash
cd /frontend/my-app 
npm cypress open
```


## API Reference

#### Récupérer tous les projets

```http
  GET /localhost:3000/
```

#### Récupérer un projet

```http
  GET /localhost:3000/projet/:id
```

#### Ajouter un projet

```http
  POST /localhost:3000/add-projet
```

| Données | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `integer` | **Required** |
| `nom` | `string` | **Required** |
| `description` | `string` |  |

#### Supprimer un projet

```http
  DELETE /localhost:3000/delete-projet/:id
```

| Données | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | **Required** |


#### Récupérer toutes les tâches

```http
  GET /localhost:3000/taches
```

#### Récupérer les tâches d'un projet

```http
  GET /localhost:3000/projet/:projetId/taches
```
| Données | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `projetId` | `integer` | **Required** |

#### Ajouter une tâche à un projet

```http
  POST /localhost:3000/projet/:projetId/add-tache
```
| Données | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `projetId` | `integer` | **Required** |
| `_id` | `integer` | **Required** |
| `nom` | `string` | **Required** |
| `description` | `string` |  |
| `createur` | `string` |  |
| `utilisateurAssigne` | `string` |  |

#### Supprimer une tâche d'un projet

```http
  DELETE /localhost:3000/projet/:projetId/delete-tache/:tacheId
```
| Données | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `projetId` | `integer` | **Required** |
| `tacheId` | `integer` | **Required** |

#### Inscription

```http
  POST /localhost:3000/register
```
| Données | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required** |
| `password` | `string` | **Required** |

#### Connexion

```http
  POST /localhost:3000/login
```
| Données | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required** |
| `password` | `string` | **Required** |

#### Récupérer info de l'utilisateur connecté

```http
  GET /localhost:3000/profil
```
| Données | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required** |
| `password` | `string` | **Required** |

## Author

[@armanceau](https://www.github.com/armanceau)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arthur-manceau/)

