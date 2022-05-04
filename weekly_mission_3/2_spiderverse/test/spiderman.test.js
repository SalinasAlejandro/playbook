const Spiderman = require('./../app/spiderman');

describe("Test Suite for Spider-man class", () => {
    test(
        /*'1) Create an spiderman object', () => {
        const andrewGarfield = new Spiderman("Amazing Spiderman", 31, "Andrew Garfield", 2, "Sony");

        //Validaciones
        expect(andrewGarfield.name).toBe("Amazing Spidermannn");
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe("Andrew Garfield");
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe("Sonyyy");
        */
        '2) Use the method getInfo()', () => {
            const tomHoland = new Spiderman('Spiderman Marvel', 25, 'Tom Holland', 5, 'Marvel');
            expect(tomHoland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel")
        });
})