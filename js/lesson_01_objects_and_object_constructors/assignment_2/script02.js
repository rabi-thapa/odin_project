// let animal= {
//     eats: true,
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__= animal;  //sets rabbit.[[Prototype]] = animal


// // we can find both properties in rabbit now.
// // alert(rabbit.eats)  // true(**)
// // alert(rabbit.jumps) // true


// let animal= {
//     eats: true,
//     walk(){
//         alert("Animal Walk")
//     }
// }

// let rabbit= {
//     jumps: true,
//     __proto__: animal
// }

// // walk is taken from the prototype
// rabbit.walk();


// The prototype chain can be longer.
// let animal= {
//     eat: true,
//     walk(){
//         alert("Animal walk");
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// }

// walk is taken from the prototype chain
// longEar.walk(); //Animal walk
// alert(longEar.jumps)


// __proto__ is a historical getter/setter for [[Prototype]]

/*
It’s a common mistake of novice developers not to know the difference between these two.

Please note that __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]]. Later we’ll see situations where it matters, for now let’s just keep it in mind, as we build our understanding of JavaScript language.

The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype.
*/



let animal= {
    eats: true,
    walk(){
        // this method won't be used by rabbit
    }
}

let rabbit = {
    __proto__: animal
};

rabbit.walk= function(){
    alert("Rabbit ! Bounce-bounce!");
}

// rabbit.walk();



let user ={
    name: "John",
    surname: "Smith",

    set fullName(value){
        [this.name, this.surname]= value.split(" ");
    },

    get fullName(){
        return `${this.name} ${this.surname}`
    }
};

let admin={
    __proto__: user,
    isAdmin: true,
};

