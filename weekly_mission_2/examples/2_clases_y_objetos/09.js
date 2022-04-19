//HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
// Ejemplo  9: Herencia entre dos clases
class Developer {
    constructor(name, mainLang, stack) {
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }

    get getName() {
        return this.name
    }
}

console.log("Ejemplo  9: Herencia entre dos clases");
const carloDev = new Developer("Dykeo", "js", ["elixir", "groovy", "lisp"]);
console.log(carloDev);

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer {
}

const dkoLaunchXDev = new LaunchXStudent("Dykeo", "js", ["elixir", "groovy", "lisp"]);
console.log(dkoLaunchXDev);
console.log(dkoLaunchXDev.getName);