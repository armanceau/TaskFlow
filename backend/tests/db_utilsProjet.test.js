import { describe, it, expect } from 'vitest';
import { addProjet, getProjets, getProjet, deleteProjet } from '../src/db_utilsProjet.mjs';

describe('Tests des opérations sur les projets', () => {
  it('Devrait ajouter un projet', async () => {
    const projet = { _id: 1, nom: 'Test Projet', description: 'Description test', dateCreation: '01-01-2024' };
    const result = await addProjet(projet);
    expect(result.acknowledged).toBe(true);
  });

  it('Devrait récupérer tous les projets', async () => {
    const projets = await getProjets();
    expect(projets).toBeInstanceOf(Array);
  });

  it('Devrait récupérer un projet par ID', async () => {
    const projet = await getProjet(1);
    expect(projet).toHaveProperty('_id', 1);
  });

  it('Devrait supprimer un projet par ID', async () => {
    const result = await deleteProjet(1);
    expect(result.deletedCount).toBe(1);
  });
});
