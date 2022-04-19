// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
    { name: 'D', score: 95 },
    { name: 'Y', score: 80 },
    { name: 'K', score: 50 },
    { name: 'E', score: 85 },
    { name: 'O', score: 100 },
];
const score_less_than_80 = scores12.find((user) => user.score > 80);
console.log("Ejemplo 12. Name score found:" + score_less_than_80.name);