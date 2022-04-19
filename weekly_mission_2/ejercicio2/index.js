const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
];

////////////////////////////////////////////////////////////////////////////////////////////////////
// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach(explorer => console.log(explorer.name));

// Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach(explorer => console.log(`El stack de ${explorer.name} es ${explorer.stack}`));

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const newList = explorers.map(explorer => explorer.stack);
console.log(`La nueva lista es ${newList}`);

//Obtén la lista de explorers que tengan en su stack "js", usa FILTER 
//(para validar un elemento en un lista se usa el método includes)
const listExplorerJS = explorers.filter((explorer) =>
    explorer.stack.includes('js')
);
console.log('La nueva lista de explorer es', listExplorerJS);

// Busca el primer explorer que sea de la CDMX, usa FIND
const primerExplorer = explorers.find((explorer) => explorer.city === 'CDMX');
console.log("El primer explorer es", primerExplorer);

// Obtén la suma de todos los exercises_completed, usa REDUCE
const suma = explorers.reduce((acc, element) => acc + element.exercises_completed, 0);
console.log("La suma de exercises_completed es:", suma);

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished 
//en frontend como true, usa SOME
const validacion = explorers.some((explorer) => explorer.missions.frontend.isFinished === true);
console.log("la validación es", validacion);

// Obtén la validación si todos los explorers tienen la propiedad isFinished 
//del onboarding como true. Usa EVERY.
const validacionEvery = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true);
console.log("La validación con every es", validacionEvery);
