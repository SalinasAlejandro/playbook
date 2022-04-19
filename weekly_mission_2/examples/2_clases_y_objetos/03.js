// Ejemplo 3: Instanciar un objeto con atributos
class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects) {
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}

const yo = new Student('Dykeo', 22, ['pw2', 'gcw', 'poi']);
console.log(yo);