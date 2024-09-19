export async function fetchTaches() {
    try {
      const response = await fetch('http://localhost:3000/taches');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des projets');
      }
      const projects = await response.json();
      return projects;
    } catch (error) {
      console.error('Erreur:', error);
      return [];
    }
}

export async function fetchTachesProjet(idProjet) {
    try {
      const response = await fetch(`http://localhost:3000/projet/${idProjet}/taches`);
      console.log('réponse : ' + response)
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des tâches du projet');
      }
      const tache = await response.json();
      console.log(tache)
      return tache;
    } catch (error) {
      console.error('Erreur:', error);
      return null;  
    }
}