import express  from 'express'
import cors from 'cors'
import { getProjets, addProjet, deleteProjet, getProjet } from './db_utilsProjet.mjs';
import { getTaches, addTache, deleteTache, getTachesProjet } from './db_utilsTache.mjs';

const app = express()
const port = 3000

app.use(cors());
app.use(express.json()) 

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

    console.log(_idProjet)
    
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    let dateCreation = `${day}-${month}-${year}`;
    
    const { _id, nom, createur, utilisateurAssigne } = req.body;

    console.log(req.body)


    console.log('nom:' + nom)
    console.log('id : ' + _id)
    if (nom != null && _id != null) {
        try {
            await addTache({ _id, _idProjet: Number(_idProjet), nom, dateCreation, createur, utilisateurAssigne });
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
        const projetId = req.params.projetId;  // Récupérer l'ID du projet
        const tacheId = req.params.tacheId;    // Récupérer l'ID de la tâche
        
        await deleteTache(tacheId, projetId); 
        res.json({ "message": "Tache supprimée." });
    } catch (error) {
        res.status(500).json({ "error": "Erreur lors de la suppression du projet." });
    }
})


// PAS DE GOODBYE : donc 404 ! \O/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 