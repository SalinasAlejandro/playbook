const myPet = {
    name: "Panzón",
    sayHelloToMyPet: function (yourPet) {
        console.log(`${this.name} saluda a ${yourPet}`)
    }
};
console.log("Ejemplo 5: Objeto con método que recibe parámetros");
myPet.sayHelloToMyPet("Akamaru");