import { getClient, getCollection} from './db_utils.js'

export async function addTache(tache) {
    const { collection } = getCollection(getClient(), "taches")
    try {
        return await collection.insertOne(tache);
    } catch (error) {
        console.error('Erreur lors de l ajout de la tache.', error);
        throw error;
    }
}
  
export async function getTaches() {
    const { collection } = getCollection(getClient(), "taches")
    console.log('Get tache est appelé')
    try {
      return await collection.find({}).toArray();
    } catch (error) {
      console.error('Erreur lors de la récupération des taches.', error);
      throw error;
    }
}

//On récupère toutes les taches d'un projet
export async function getTachesProjet(idProjet) {
    const { collection } = getCollection(getClient(), "taches");
    try {
        return await collection.find({ _idProjet: Number(idProjet) }).toArray();
    } catch (error) {
        console.error('Erreur lors de la récupération des tâches.', error);
        throw error;
    }
}

export async function deleteTache(id, idProjet) {
    const { collection } = getCollection(getClient(), "taches");
    try {
        return await collection.deleteOne({ _id: Number(id), _idProjet: Number(idProjet) });
    } catch (error) {
        console.error('Erreur lors de la suppression de la tâche:', error);
        throw error;
    }
}

  