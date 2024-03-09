function skillsMember(){
    var member = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "React", "Node.js"],
        greet: function(){
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
        }
    }
    member.greet();
    console.log(`I have the following skills: ${member.skills.join(", ")}`);
}