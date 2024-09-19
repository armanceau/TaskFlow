import { getClient, getCollection} from './db_utils.js'

export async function addProjet(projet) {
    const { collection } = getCollection(getClient(), "projets")
    try {
      return await collection.insertOne(projet);
    } catch (error) {
      console.error('Erreur lors de l ajout du projet.', error);
      throw error;
    }
  }
  
export async function getProjets() {
    const { collection } = getCollection(getClient(), "projets")
    try {
      return await collection.find({}).toArray();
    } catch (error) {
      console.error('Erreur lors de la récupération des projets.', error);
      throw error;
    }
}

export async function getProjet(id) {
  const { collection } = getCollection(getClient(), "projets")
  try {
    return await collection.findOne({ _id: Number(id) });
  } catch (error) {
    console.error('Erreur lors de la récupération du projet n° : '+id, error);
    throw error;
  }
}

export async function deleteProjet(id) {
  const { collection } = getCollection(getClient(), "projets")
  try {
    return await collection.deleteOne({ _id: Number(id) });
  } catch (error) {
    console.error('Erreur lors de la suppression du projet.:', error);
    throw error;
  }
}

  