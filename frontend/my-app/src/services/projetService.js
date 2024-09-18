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
  