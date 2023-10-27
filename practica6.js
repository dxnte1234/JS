const getTriangule = (b,a) => (b*a /2)

console.log(getTriangule (12,5))

const chechIfIsEven = number => number % 2 === 0? "par": "inpar";

console.log(chechIfIsEven (12,5))

const getRandomKoder =  kodersArray => kodersArray [Math.floor (Math.random()* kodersArray.length)];

console.log(getRandomKoder (1,1));