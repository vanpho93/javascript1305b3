class Employee {
    constructor(name, age) {
        this.name = name;
        if (age < 0) {
            throw new Error('TUOI KO DUOC AM')
        }
        this.age = age;
    }
}

try {
    var pho = new Employee('PHO', -3);
} catch(e) {
    console.log(e);
}

console.log(100000000000);
