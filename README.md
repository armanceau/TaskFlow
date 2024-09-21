
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
  GET /localhost:3000/add-projet
```

| Données | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `integer` | **Required** |
| `nom` | `string` | **Required** |
| `description` | `string` |  |

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
  GET /localhost:3000/projet/:projetId/add-tache
```
| Données | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `projetId` | `integer` | **Required** |
| `_id` | `integer` | **Required** |
| `nom` | `string` | **Required** |
| `description` | `string` |  |
| `createur` | `string` |  |
| `utilisateurAssigne` | `string` |  |
