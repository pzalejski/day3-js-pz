// ===== Exercise #1 ====//
/*
    Write a function that parses through the below object and displays all of the persons
    favorite shoes
*/

let person3 = {
    food: ["Deep Dish", "South Side Thin Crust"],
    cars: "Anything not from Tesla",
    games:"Division 2",
    ice_cream:["Chocolate", "Vanilla","Oreos"],
    shoes:[
        {
            nike:"Chocolate",
            addidas: "Vanilla",
            converse: "All of them",
            underarmor: "Sham-rock-shake",
        }
    ]
}


function fav_shoes(person) {
    for (let i = 0; i < Object.keys(person).length; i++){
        console.log(person.shoes[0])
    }
}

function fav_shoes_2(person) {
    if (Array.isArray(Object.entries(person.shoes[0]))) {
        for (let i = 0; i < Object.keys(person.shoes).length; i++)
            return (Object.values(person.shoes[i]))
    }
}

// fav_shoes(person3)

console.log(fav_shoes_2(person3))



// ---- Exercise # 2 ---- //
/*
    Write an object prototype for an Avenger that has a name and age
    and super-power along with a method called printInfo and a method called addInfinity that 
    increments the avengers' infinity stone count by a given number as a parameter.

    THEN...

    Create two avengers using the 'new' keyword and print both of their infos
    and increment each avengers stones by a given number of stones. Use an arrow function for both methods.
*/

function avenger(name, age, super_power,stones='') {
    this.name = name
    this.age = age
    this.super_power = super_power
    this.stones = stones

    this.printInfo = () => {
        return `This Avenger's name is ${this.name} and they are ${this.age} years old.\nTheir super-power is: ${this.super_power}.`

    }

    this.addInfinity = (stone_count) => {
        this.stones += stone_count
        return `${this.name} has ${this.stones} Infinity Stones`
        
    }
}

let Hulk = new avenger('Bruce Banner', 38, 'Gama Radiation')
console.log(Hulk.printInfo())

let Thor = new avenger('Thor Odinson', '9000', 'Asguardian God')
console.log(Thor.printInfo())

console.log(Hulk.addInfinity(2))
console.log(Thor.addInfinity(3))
