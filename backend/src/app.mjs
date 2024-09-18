import express  from 'express'
import cors from 'cors'
import { getProjets, addProjet, deleteProjet, getProjet } from './db_utilsProjet.mjs';

const app = express()
const port = 3000

app.use(cors());
app.use(express.json()) 

//Projets : 
var countProjet = 0;

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






// app.put('/update-task/:id', (req, res) => {
//   let name = req.body.name
//   let description = req.body.description
//   tasks = updateTask(tasks, name, description, req.params.id)
//   res.json({"message" : "élément modifié"})
// })



// PAS DE GOODBYE : donc 404 ! \O/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 