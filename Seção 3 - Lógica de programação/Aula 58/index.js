function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10; // Variável modificada posteriormente dentro do laço do{}

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
console.log('######');


do {
    console.log(rand);
}while(rand !== 10);




// do {
//     rand = random(min, max);
//     console.log(rand);

// } while (rand !== 10);
