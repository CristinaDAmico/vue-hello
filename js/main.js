/************************
    NUOVA ISTANZA VUE
************************/

// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue ({
    el: '#root',

    data: {
        message: 'Welcome to the world of Vue!',
        image: 'https://picsum.photos/200/300',
    }
});