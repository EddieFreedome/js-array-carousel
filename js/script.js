const arrImg = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const arrTitle = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const arrText = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//array url immagini
    //assegnqare variabile al container html delle immagini (const imgContainer = document.querySelector(".image-container");
    //ciclo for per scorrere tutto l'array di immagini con [i] per poter assegnare dopo il tag img a tutte le immagini
    //creare variabile currentIndex = 0 per indicare la prima immagine da mostrare poi in un ciclo.
    //

const imageContainer = document.querySelector(".image-container")
const dotsContainer = document.querySelector(".dots-container")

let currentIndex = 0 //valore predefinito

for (let i = 0; i < arrImg.length; i++) {
    const currentImg = arrImg[i];
    let classeActive = "";

  // aggiungi la classe active perchè è il primo della lista
  if (i === currentIndex) {
    classeActive = "active";
  }
        
    // devo creare tag img con src
    const tagImg = `<img class="${classeActive}" src="${urlImgCorrente}" alt="immagine #${i}">`;
    const tagDot = `<span class="dot ${classeActive}"></span>`;

}