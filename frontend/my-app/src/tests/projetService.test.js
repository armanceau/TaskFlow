import { describe, it, expect, vi } from 'vitest';
import { fetchProjets, fetchProjet, addProjet, deleteProjet } from '../services/projetService'; // Adapte le chemin selon ton projet

describe('Projet Service', () => {
  
  describe('fetchProjets', () => {
    it('Devrait récupérer la liste des projets', async () => {
      const mockProjects = [{ nom: 'Projet 1' }, { nom: 'Projet 2' }];

      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProjects),
        })
      );

      const projects = await fetchProjets();

      expect(fetch).toHaveBeenCalledWith('http://localhost:3000');
      expect(projects).toEqual(mockProjects);
    });
  });

  describe('fetchProjet', () => {
    it('Devrait récupérer un projet par ID', async () => {
      const mockProject = { nom: 'Projet 1', description: 'Description du projet' };

      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProject),
        })
      );

      const project = await fetchProjet(1);

      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/projet/1');
      expect(project).toEqual(mockProject);
    });
  });

  describe('addProjet', () => {
    it('Devrait ajouter un projet et vider les valeurs', async () => {
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ message: 'Projet ajouté' }),
        })
      );

      const nom = { value: 'Nouveau Projet' };
      const description = { value: 'Description du nouveau projet' };
      const _id = { value: 123 };

      await addProjet(nom, description, _id);

      expect(fetch).toHaveBeenCalledWith(
        'http://localhost:3000/add-projet',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nom: 'Nouveau Projet',
            description: 'Description du nouveau projet',
            _id: 123,
          }),
        })
      );

      expect(nom.value).toBe('');
      expect(description.value).toBe('');
      expect(_id.value).toBe('');
    });
  });

  describe('deleteProjet', () => {
    it('Devrait supprimer un projet par ID', async () => {
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ message: 'Projet supprimé' }),
        })
      );

      const response = await deleteProjet(1);

      expect(fetch).toHaveBeenCalledWith(
        'http://localhost:3000/delete-projet/1',
        expect.objectContaining({
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        })
      );

      expect(response).toEqual({ message: 'Projet supprimé' });
    });
  });
});
