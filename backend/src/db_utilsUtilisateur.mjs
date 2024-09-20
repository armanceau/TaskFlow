import { getClient, getCollection} from './db_utils.js'

export async function addUtlilisateur(user) {
    const { client, collection } = getCollection(getClient(), "utilisateurs");
  
    try {
        await client.connect();
      
        const existingUser = await collection.findOne({ username: user.username });
        if (existingUser) {
            throw new Error('Utilisateur déjà existant');
        }
    
        const result = await collection.insertOne(user);
        return result;
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        throw error;
    } finally {
        await client.close();
    }
  }
  
export async function getUtilisateur(username) {
    const { collection } = getCollection(getClient(), "utilisateurs");
    try {
        return await collection.findOne({ username });
    } catch (error) {
        console.error('Erreur lors de la récupération de l utilisateur:', error);
        throw error;
    }
}