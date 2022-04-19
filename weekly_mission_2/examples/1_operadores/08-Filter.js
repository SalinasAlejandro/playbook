// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'D', score: 95 },
    { name: 'Y', score: 98 },
    { name: 'K', score: 80 },
    { name: 'E', score: 50 },
    { name: 'O', score: 85 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log("Ejemplo 8: Filtrando elementos por score");
console.log(scoresGreaterEighty);