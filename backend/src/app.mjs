import express  from 'express'
import cors from 'cors'
import { getProjets, addProjet, deleteProjet, getProjet } from './db_utilsProjet.mjs';
import { getTaches, addTache, deleteTache, getTachesProjet } from './db_utilsTache.mjs';
import { getUtilisateur, addUtlilisateur, getProfil } from './db_utilsUtilisateur.mjs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const JWT_SECRET = 'secret';
const app = express()
const port = 3000

app.use(cors());
app.use(express.json()) 

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); 

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); 
        req.user = user;
        next();
    });
};
  

//Projets : 

app.get('/', async (req, res) => {
    try {
        const projets = await getProjets(); 
        return res.json(projets);         
    } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des projets.' });
    }
});

app.get('/projet/:id', async (req, res) => {
    try {
        const projets = await getProjet(req.params.id); 
        return res.json(projets);         
    } catch (error) {
        console.error('Erreur lors de la récupération du projet:', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des projets.' });
    }
});

app.post('/add-projet', async (req, res) => {
    const { _id, nom, description } = req.body;

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    console.log(nom)

    let dateCreation = `${day}-${month}-${year}`;

    if (nom != null) {
        try {
            await addProjet({ _id, nom, description, dateCreation });
            res.json({ "message": "Projet ajouté" });
        } catch (error) {
            res.status(500).json({ "error": "Erreur lors de l'ajout du projet." });
        }
    } else {
        res.status(400).json({ "error": "Le nom est obligatoire." });
    }
});

app.delete('/delete-projet/:id', async (req, res) => {
    try {
        await deleteProjet(req.params.id);
        res.json({ "message": "Projet supprimé." });
    } catch (error) {
        res.status(500).json({ "error": "Erreur lors de la suppression du projet." });
    }
})


//Taches : 

app.get('/taches', async (req, res) => {
    try {
        const taches = await getTaches(); 
        return res.json(taches);         
    } catch (error) {
        console.error('Erreur lors de la récupération des taches:', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des tâches.' });
    }
});

app.get('/projet/:projetId/taches', async (req, res) => {
    const projetId = req.params.projetId;
    try {
        const taches = await getTachesProjet(projetId); 
        return res.json(taches);         
    } catch (error) {
        console.error('Erreur lors de la récupération des taches du projet :', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des tâches du projet.' });
    }
});

app.post('/projet/:projetId/add-tache', async (req, res) => {
    const _idProjet = req.params.projetId;
    
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    let dateCreation = `${day}-${month}-${year}`;
    
    const { _id, nom, description, createur, utilisateurAssigne } = req.body;

    if (nom != null && _id != null) {
        try {
            await addTache({ _id, _idProjet: Number(_idProjet), nom, description, dateCreation, createur, utilisateurAssigne });
            res.json({ "message": "Tache ajoutée" });
        } catch (error) {
            res.status(500).json({ "error": "Erreur lors de l'ajout de la tâche." });
        }
    } else {
        res.status(400).json({ "error": "Le nom est obligatoire ainsi que l'id est obligatoire." });
    }
});

app.delete('/projet/:projetId/delete-tache/:tacheId', async (req, res) => {
    try {
        const projetId = req.params.projetId;
        const tacheId = req.params.tacheId;
        
        await deleteTache(tacheId, projetId); 
        res.json({ "message": "Tache supprimée." });
    } catch (error) {
        res.status(500).json({ "error": "Erreur lors de la suppression du projet." });
    }
})


//Utilisateurs : 

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
    return res.status(400).json({ error: 'Nom d\'utilisateur et mot de passe requis' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await addUtlilisateur({ username, password: hashedPassword });

        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
        res.status(500).json({ error: 'Erreur serveur lors de l\'enregistrement de l\'utilisateur' });
    }
  });
  
  
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ error: 'Nom d utilisateur ou mot de passe manquant' });
    }
  
    try {
        const user = await getUtilisateur(username);
    
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé' });
        }
    
        const match = await bcrypt.compare(password, user.password);
  
        if (!match) {
            return res.status(401).json({ error: 'Mot de passe incorrect' });
        }
  
        const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    
        return res.json({ token });
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        return res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.get('/profil', authenticateToken, async (req, res) => {
    const username = req.user.username;

    try {
        const user = await getProfil(username);
        if (!user) {
            return res.status(404).json({ error: "Utilisateur non trouvé" });
        }

        // Retourne uniquement les informations nécessaires, sans le mot de passe
        res.json({
            username: user.username,
            email: user.email // Assure-toi d'avoir les informations nécessaires dans la base
            // Ajoute d'autres champs si nécessaires
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des informations de profil :', error);
        res.status(500).json({ error: "Erreur lors de la récupération du profil" });
    }
});



// PAS DE GOODBYE : donc 404 ! \O/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 