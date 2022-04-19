////////////////////////////////// Repo
const repo = {
    name: "Ejercicios",
    author: "Alejandro Salinas",
    language: "JavaScript",
    numberOfCommits: 27,
    stars: 99,
    forks: 49,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }
}
console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

////////////////////////////////// Issue
const issue = {
    title: 'Ejericio 1',
    repositoryNameAssociated: 'Ejercicios',
    status: 'open',
    numberOfComments: 9,
    labels: 3,
    author: 'Lessli',
    dateCreated: '19/04/2022',
    lastUpdated: '19/04/2022',
    getTitleAndAuthor: function () {
        return `The issue ${this.title} was created by ${this.author}`;
    },
    getGeneralInfo: function () {
        return `${this.title} was created by ${this.author} in ${this.dateCreated} and is ${this.status}`;
    }
}
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

////////////////////////////////// PullRequest
const pullRequest = {
    title: 'newRequest',
    author: 'Dykeo',
    branchName: 'main',
    dateCreated: '19/04/2022',
    status: 'ok',
    repositoryNameAssociated: 'Ejercicios',
    getStatus: function () {
        return `status: ${this.status}`
    },
    getTitleAndAutor: function () {
        return `${this.title} was created by ${this.author}`
    }
}
console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAutor());



console.log("");
console.log("/////////////////////////////////////////////////////////////////");

////////////////////////////////// Twitter
console.log("");
console.log("Twitter");
const trending_topic = {
    user: 'Norykko',
    username: '@Norykko_oficial',
    date: '10/06/2020',
    description: 'En más de una ocasión, mi psicólogo ha sido un disco... aquí te dejo los míos, por si te ayudan',
    comments: 17,
    retwitts: 44,
    like: 109
}
console.log(trending_topic);

const hashtag = {
    name: 'music',
    isTending: true,
    twitts: 20032020
}
console.log(hashtag);

////////////////////////////////// Facebook
console.log("");
console.log("Facebook");
const userFb = {
    user: "dykeo",
    bio: "...",
    age: 22
}
console.log(userFb);

const post = {
    user: 'Norykko',
    date: '05/04/2022',
    description: '...',
    multimedi: {
        photo1: 'url'
    }
}
console.log(post);

const biography = {
    user: 'Dykeo',
    photoPerfil: 'url',
    photoCover: 'url2',
    details: '...'
}
console.log(biography);

////////////////////////////////// Uber
console.log("");
console.log("Uber");
const profile = {
    username: 'Viajero',
    photo: 'url'
}

const travel = {
    pasajero: 'Viajero',
    conductor: 'Chófer',
    desde: 'Mi casa',
    hasta: 'La de allá',
    costo: 99.99,
    metodoPago: 'efectivo'
}
console.log(travel);