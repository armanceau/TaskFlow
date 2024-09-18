export async function fetchProjets() {
    try {
      const response = await fetch('http://localhost:3000');
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

export async function fetchProjet(id) {
    try {
      const response = await fetch(`http://localhost:3000/projet/${id}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du projet');
      }
      const project = await response.json();
      return project;
    } catch (error) {
      console.error('Erreur:', error);
      return null;  
    }
}


export async function addProjet(nom, description, _id) {
	try {
	  const response = await fetch('http://localhost:3000/add-projet', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		  nom: nom.value,
		  description: description.value,
		  _id: Number(_id.value),
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
	  //Faire message de confirmation de validation
	} catch (error) {
	  erreur.value = 'Erreur lors de l’ajout de la tâche : ' + error.message;
	}
  };
  