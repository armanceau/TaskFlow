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

export async function addTache(_id, _idProjet, nom, description, createur, utilisateurAssigne) {
	try {
    const response = await fetch(`http://localhost:3000/projet/${_idProjet}/add-tache`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            _id: Number(_id.value),
            _idProjet: Number(_idProjet.value),
            nom: nom.value,
            description: description.value,
            createur: createur.value,
            utilisateurAssigne: utilisateurAssigne.value
        }),
    });
  
    if (!response.ok) {
            throw new Error('Erreur réseau');
    }

    const result = await response.json();
    console.log(result.message); 

    nom.value = '';
    description.value = '';
    _id.value = '';
    createur.value = '';
    utilisateurAssigne.value = '';
    } catch (error) {
      console.error('Erreur lors de l’ajout de la tâche : ' + error.message);
    }
};

export async function deleteTache(id, idProjet) {
    try {
        const response = await fetch(`http://localhost:3000/projet/${idProjet}/delete-tache/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la suppression de la tâche');
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur:', error.message);
        return null;
    }
};  