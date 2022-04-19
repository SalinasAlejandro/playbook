class trending_topic {
    constructor(user, username, date, description, comments, retwitts, like) {
        this.user = user;
        this.username = username;
        this.date = date;
        this.description = description;
        this.comments = comments;
        this.retwitts = retwitts;
        this.like = like;
    }
}

class hashtag {
    constructor(name, isTending, twitts) {
        this.name = name;
        this.isTending = isTending;
        this.twitts = twitts;
    }
}

class userFb {
    constructor(user, bio, age) {
        this.user = user;
        this.bio = bio;
        this.age = age;
    }
}

class post {
    constructor(user, date, description) {
        this.user = user;
        this.date = date;
        this.description = description;
    }
}

class biography {
    constructor(user, photoPerfil, photoCover, details) {
        this.user = user;
        this.photoPerfil = photoPerfil;
        this.photoCover = photoCover;
        this.details = details;
    }
}

class profile {
    constructor(username, photo) {
        this.username = username;
        this.photo = photo;
    }
}

class travel {
    constructor(pasajero, conductor, desde, hasta, costo, metodoPago) {
        this.pasajero = pasajero;
        this.conductor = conductor;
        this.desde = desde;
        this.hasta = hasta;
        this.costo = costo;
        this.metodoPago = metodoPago;
    }
}


/////////////////////////////////////////////////////////////////////////


const trending = new trending_topic('Norykko', '@Norykko_oficial', '10/06/2020', '...', 17, 44, 109);
console.log(trending);

const has = new hashtag('music', true, 20032020);
console.log(has);

const user = new userFb('dykeo', '...', 22);
console.log(user);

const posting = new post('Norykko', '05/04/2022', '...');
console.log(posting);

const bio = new biography('Dykeo', 'url', 'url2', '...');
console.log(bio);

const prof = new profile('Viajero', 'url');
console.log(prof);

const trav = new travel('Viajero', 'Chófer', 'Mi casa', 'La de allá', 99, 'Efectivo');
console.log(trav);