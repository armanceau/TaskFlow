import { describe, it, expect } from 'vitest';
import { addTache, getTaches, getTachesProjet, deleteTache } from '../src/db_utilsTache.mjs';

describe('Tests des opérations sur les tâches', () => {
  
  it('Devrait ajouter une tâche', async () => {
    const tache = { _id: 1, _idProjet: 101, nom: 'Test Tache', dateCreation: '01-01-2024', createur: 'John', utilisateurAssigne: 'Doe' };
    const result = await addTache(tache);
    expect(result.acknowledged).toBe(true);
  });

  it('Devrait récupérer toutes les tâches', async () => {
    const taches = await getTaches();
    expect(taches).toBeInstanceOf(Array);
  });

  it('Devrait récupérer les tâches d\'un projet spécifique', async () => {
    const taches = await getTachesProjet(101);
    expect(taches).toBeInstanceOf(Array);
    expect(taches[0]).toHaveProperty('_idProjet', 101);
  });

  it('Devrait supprimer une tâche par ID et ID du projet', async () => {
    const result = await deleteTache(1, 101);
    expect(result.deletedCount).toBe(1);
  });
});
