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



class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    getRandomCivil() {
        return this.civilImages[Math.floor(Math.random() * this.civilImages.length)];
    }
    getRandomMilitary() {
        return this.militaryImages[Math.floor(Math.random() * this.militaryImages.length)];
    }
    getAll() {
        return [...this.civilImages, ...this.militaryImages];
    }
}


class Painter {
    constructor() {
        this.createGallery();
    }
    createGallery() {
        this.gallery = document.createElement('section');
        document.body.appendChild(this.gallery);
    }
    createImageTag(imageUrl) {
        const pictureElement = document.createElement('picture');
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        pictureElement.appendChild(imgElement);
        return pictureElement;
    }
    paintSingleImage(imageUrl) {
        const imageTag = this.createImageTag(imageUrl);
        this.gallery.appendChild(imageTag);
    }
    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach(imageUrl => {
            this.paintSingleImage(imageUrl);
        });
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

