const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];



//Su única funcionalidad es albergar imágenes y devolverlas dependiendo del método que utilicemos. No interactúa con HTML.
class Gallery {
    constructor(civilImages, militaryImages) {
    }
    
    // devuelve un vehículo aleatorio civil de la galería.
    getRandomCivil() {
        Math.floor(Math.random() * 10)
    }
    //devuelve un vehículo aleatorio militar de la galería.
    getRandomMilitary() {
    }
    // devuelve el conjunto de vehículos de la galería, tanto militares como civiles.
    getAll() {
    }
}



//La clase encargada de pintar las imágenes, de interactuar con el DOM. Encargada de crear etiquetas y manipular el DOM para agregarlas.
class Painter {


    //Ejecutará la función createGallery
    constructor() {
    }

    //Creará un elemento section y lo agregará al body. Dicho section será, también, una propiedad de Painter a la que llamaremos gallery.
    createGallery() {
    }

    //Acepta la url de una imagen y devuelve los siguientes elementos:
    //<picture>
    //  <img src="ThisIsAnImage.jpg" />
    //</picture>
    createImageTag(imageUrl) {
    }

    //Acepta la url de una imagen y agrega a gallery el elemento creado por createImageTag.
    paintSingleImage(imageUrl) {
    }

    //Acepta un conjunto de imágenes y agrega a gallery, uno a uno, el elemento creado por createImageTag.
    paintMultipleImages(arrayOfImages) {
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();