import { describe, it, expect, vi } from 'vitest';
import { beforeEach, afterEach } from 'vitest';
import { fetchTaches, fetchTachesProjet, addTache, deleteTache } from '../services/tacheService'; // mettez à jour le chemin

describe('Tâches Service', () => {
    beforeEach(() => {
        global.fetch = vi.fn();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('Devrait afficher les tâches', async () => {
        const mockResponse = [{ id: 1, name: 'Tâche 1' }];
        fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
        });

        const tasks = await fetchTaches();
        expect(tasks).toEqual(mockResponse);
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/taches');
    });

    it('Devrait renvoyer une erreur', async () => {
        fetch.mockResolvedValueOnce({ ok: false });

        const tasks = await fetchTaches();
        expect(tasks).toEqual([]); 
    });
    
    describe('deleteTache', () => {
        it('Devrait supprimer une tâche', async () => {
          fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ message: 'Tâche supprimée' }),
          });
    
          const response = await deleteTache(1, 1);
    
          expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/projet/1/delete-tache/1`, expect.any(Object));
          expect(response).toEqual({ message: 'Tâche supprimée' });
        });
    
        it('Devrait renvoyer une erreur', async () => {
          fetch.mockRejectedValueOnce(new Error('Erreur lors de la suppression de la tâche'));
    
          const response = await deleteTache(1, 1);
    
          expect(response).toBeNull();
        });
    });
});
