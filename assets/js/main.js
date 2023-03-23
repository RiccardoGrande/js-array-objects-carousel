//Dato un array di oggetti letterali con:
// -url dell’immagine
// -titolo
// -descrizione

//Creare un carosello come nella foto allegata.

//Milestone 0:
//Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

//Milestone 1:
//Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.

//Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

//Milestone 2:
//Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

//BONUS 1:
//Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
//BONUS 2:
//Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
//BONUS 3:
//Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const images = [
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images);

const rowEl = document.querySelector('.row')

let activeImage = 0;

for (let i = 0; i < images.length; i++) {
    const thisImage = images[i];
    console.log(thisImage);
    //Organizzare i singoli membri in card/schede
    const markup = `
        <div class="col">
            <div class="card">
                <button class="prev">Prev</button>
                    <img class = "${i === activeImage ? 'active' : ''}" src="${thisImage.image}" alt="" class="card-img-top">
                    <div class="card-body">
                        <h3>
                            ${thisImage.title} 
                        </h3>
                        <p>
                            ${thisImage.text}
                        </p>
                    </div>
                    <button class="next">Next</button>
            </div>
        </div>`
    rowEl.innerHTML += markup

    if (i === undefined ) {
        
        break;

    } else {
        

        continue;

    }


}




// selezioniamo tutte le slide
const slideImagesElements = document.querySelectorAll('.col > .images > img')  
    console.log(slideImagesElements);

// creiamo la funzione per attivazione del click per next

const nextEl = document.querySelector('.next')
nextEl.addEventListener('click', function () {
  console.log('cliccato next');

   // selezioniamo la slide corrente
   const currentSlide = slideImagesElements[activeImage]
   console.log(currentSlide);

   // rimuoviamo le classi active dalle immagini in active
   currentSlide.classList.remove('active')

   // aumentiamo il valore della variabile activeImage
   activeImage++ 

   // selezioniamo la slide successiva
   console.log(activeImage);
   const nextImage = slideImagesElements[activeImage]

   // aggiungiamo la classe active
   console.log(nextImage);
   nextImage.classList.add('active')

})


// creiamo la funzione per attivazione del click per prev
const prevEl = document.querySelector('.prev')
prevEl.addEventListener('click', function () {
  console.log('cliccato prev');

  console.log(slideImagesElements); 

  // selezioniamo la slide corrente
  const currentSlide = slideImagesElements[activeImage]
  console.log(currentSlide);

  // rimuoviamo le classi active dalle immagini in active
  currentSlide.classList.remove('active')

  // diminuiamo il valore della variabile activeImage
  activeImage-- 
  // selezioniamo la prossima slide
  console.log(activeImage);
  const nextImage = slideImagesElements[activeImage]

  // aggiungiamo la classe active
  console.log(nextImage);
  nextImage.classList.add('active')

})