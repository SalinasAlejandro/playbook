const yo = {
    name: "Alejandro",
    // Esta es una función que se guarda como propiedad
    sayHello: function () {
        // this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te dice: ¿qué onda, bro?`)
    }
};
console.log("Ejemplo 4: Objeto con métodos");
yo.sayHello();