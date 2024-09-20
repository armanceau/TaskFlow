export async function fetchProfil() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        throw new Error('Token non trouvé');
    }

    try {
        const response = await fetch('http://localhost:3000/profil', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.status === 401) {
            throw new Error('Non autorisé');
        } else if (!response.ok) {
            throw new Error('Erreur lors de la récupération du profil');
        }

        const data = await response.json();
        return {
            username: data.username, 
            loading: false,
            error: null,
        };

    } catch (error) {
        return {
            username: '',
            loading: false,
            error: error.message,
        };
    }
}
