class Student {
    private name: string;
    private age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    toString(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const student: Student = new Student("John Doe", 20);

console.log("LS1 - 1");
console.log(student.toString());

