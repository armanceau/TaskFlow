export async function fetchProjects() {
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