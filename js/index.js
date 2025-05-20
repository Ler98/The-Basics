//Gör en array som innehåller 5st olika frukter av datatypen string.
let frukter = ["apelsin", "äpple", "banan", "kiwi", "citron"];

//Gör en array som innehåller 3 olika datatyper: string, number, array.
let blandat = ["apelsin", 10, frukter]

//Hur många objekt innehåller arrayen under?
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
    //svaret blev 4 i console
    

//hämta ordet cat från arrayen.
animals [0];
    //svaret blev cat i console
    console.log(animals[0]);

//hämta funky chihuahua från arrayen.
animals[animals.length - 1];
    //svaret blev funky chihuahua i console
    console.log(animals[animals.length - 1]);


//ta bort hamster
animals.splice(1,1);
//lägg till tiger
animals.push("tiger");
    //skriv ut djuren
    console.log(animals);

//lägg ihop arrayerna a och b
let a = [1,2,3];
let b = [4,5,6];
let c = a.concat(b);
    //svaret blev 1,2,3,4,5,6 i console
    console.log(c);

//lägg ihop arrayerna a, b och c
let d = a.concat (c,b);
    console.log(d);

//gör kopior av arrayerna a, b och c
let kopiaA = [...a];
    console.log(kopiaA);

let kopiaB = [...b];
    console.log(kopiaB);

let kopiaC = [...c];
    console.log(kopiaC);


let fruits = ["kiwi", "apple", "pear"];

//lägg till en frukt i arrayen ovaan.
fruits.push("banana");
    console.log(fruits);

//lägg till en frukt längst fram i arrayen.
fruits.unshift("orange");
    console.log(fruits);

//ta bort sista frukten i arrayen.
fruits.pop();
    console.log(fruits);

//ta bort första frukten i arrayen.
fruits.shift();
    console.log(fruits);


