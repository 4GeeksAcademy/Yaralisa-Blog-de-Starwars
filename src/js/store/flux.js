const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            naves: [],
            planetas: [],
            personajes: [],
            favorites: [], // Lista de favoritos
            isDropdownOpen: false // Estado para controlar la apertura del dropdown
        },
        actions: {
            planetas: () => {
                fetch('https://swapi.dev/api/planets')
                    .then((response) => response.json())
                    .then((data) => {
                        const planetasConUid = data.results.map(planeta => ({
                            ...planeta, 
                            uid: planeta.url.split('/').filter(Boolean).pop() // Extrae el uid de la URL
                        }));
                        setStore({ planetas: planetasConUid });
                    })
                    .catch(error => console.error('Error fetching starships:', error));
            },

            naves: () => {
                fetch('https://swapi.dev/api/starships')
                    .then((response) => response.json())
                    .then((data) => {
                        const navesConUid = data.results.map(nave => ({
                            ...nave, 
                            uid: nave.url.split('/').filter(Boolean).pop() // Extrae el uid de la URL
                        }));
                        setStore({ naves: navesConUid });
                    })
                    .catch(error => console.error('Error fetching starships:', error));
            },
            

            personajes: () => {
                fetch('https://swapi.dev/api/people')
                    .then((response) => response.json())
                    .then((data) => {
                        const personajesConUid = data.results.map(personaje => ({
                            ...personaje, 
                            uid: personaje.url.split('/').filter(Boolean).pop() // Extrae el uid de la URL
                        }));
                        setStore({ personajes: personajesConUid });
                    })
                    .catch(error => console.error('Error fetching starships:', error));
            },
           

            toggleFavorite: (item) => {
                const store = getStore();
                const favorites = store.favorites;
                const isFavorite = favorites.some(fav => fav.uid === item.uid);

                if (isFavorite) {
                    // Remover de favoritos
                    setStore({ favorites: favorites.filter(fav => fav.uid !== item.uid) });
                } else {
                    // Agregar a favoritos
                    setStore({ favorites: [...favorites, item] });
                }
            },

            toggleDropdown: () => {
                const store = getStore();
                setStore({ isDropdownOpen: !store.isDropdownOpen });
            },
        }
    };
};

export default getState;
