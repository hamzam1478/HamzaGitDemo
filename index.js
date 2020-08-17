class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
canVote() {
    if (this.age > 17){
        console.log("You are old enough to vote.")
    }
    else{
        console.log("You are too young.")
    }
}
}

const Hamza = new Person ("Hamza", 18)
console.log(Hamza)
Hamza.canVote()