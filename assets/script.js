// Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto insieme a lezione, che troverete direttamente nella mia repository di github a questo link: https://github.com/henri-kapidani/classe96-0420-carousel
// Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati. Ricordiamo sempre l'importanza dell'integrità del dato.
// Bonus 1:
// Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello: al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

// Bonus 1:
// Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello: al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
// Bonus 2:
// E se volessi un bottone per invertire la "direzione" del carosello?

const arrayImage = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
