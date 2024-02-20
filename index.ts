type Animal = {
    name: string,
    age: number,
    colors: string[]
};

const printAnimal = (animal: Animal) => {
    console.log(`${animal.name} is ${animal.age} years old`);
}

const printAnimal2 = function(animal: Animal) {
    console.log(`${animal.name} is ${animal.age} years old`);
    
}


const dog: Animal = {
    name: 'Jimmy',
    age: 8,
    colors: ['Brown', 'White']
};

const cat: Animal = {
    name: 'Kira',
    age: 4,
    colors: ['Black', 'White']
}

printAnimal(dog)
printAnimal2(cat)