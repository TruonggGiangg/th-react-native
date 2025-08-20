
class Person {
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

class Student extends Person {
    private grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    toString(): string {
        return `${super.toString()}, Grade: ${this.grade}`;
    }
}

class Car {
    private brand: string;
    private model: string;
    private year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    toString(): string {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }
}



class Rectangle {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class BankAccount {
    private readonly id: string;
    private balance: number;
    public name: string;

    constructor(initialBalance: number, id: string, name?: string) {
        this.balance = initialBalance;
        this.id = id;
        this.name = name || "Default Account Holder";
    }

    getBalance(): number {
        return this.balance;
    }
    getId(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }

    setBalance(balance: number): void {
        this.balance = balance;
    }

    //annot assign to 'id' because it is a read-only property.ts(2540)
    // (property) BankAccount.id: any
    // setId(id: string): void {
    //     this.id = id;
    // }

    deposit(a: number): void {
        this.balance += a;
        console.log(`Deposited: ${a}, New Balance: ${this.balance}`);
    }

    withdraw(a: number): void {
        if (a > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= a;
            console.log(`Withdrawn: ${a}, New Balance: ${this.balance}`);
        }
    }
}


class Book {
    private title: string;
    private author: string;
    private year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    toString(): string {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
}


class User {
    private name: any;



    constructor(name?: any) {
        this.name = name;

    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}

class Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }

    getName(): string {
        return this.name;
    }

}


class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): string {
        return `${this.name} makes a sound`;
    }
}


//11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
class Dog extends Animal {
    bark(): string {
        return `${this.name} barks`;
    }
}

class Cat extends Animal {
    mew(): string {
        return `${this.name} mew`;
    }
}

//12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
interface Flyable {
    fly(): string;
}
interface Swimmable {
    swim(): string;
}
class Bird implements Flyable {
    fly(): string {
        return "The bird is flying";
    }
}
class Fish implements Swimmable {
    swim(): string {
        return "The fish is swimming";
    }
}

//13. Create an abstract class Shape with method area(). Implement Square and Circle.
abstract class Shape {
    abstract area(): number;
}
class Square extends Shape {
    private side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

//14. Create a base class Employee. Extend Manager and Developer with specific methods.
class Employee {
    protected name: string;
    protected id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    toString(): string {
        return `Name: ${this.name}, ID: ${this.id}`;
    }
}

class Manager extends Employee {
    private teamSize: number;

    constructor(name: string, id: number, teamSize: number) {
        super(name, id);
        this.teamSize = teamSize;
    }

    manage(): string {
        return `${this.name} manages a team of ${this.teamSize} people`;
    }
}
class Developer extends Employee {
    private programmingLanguage: string;

    constructor(name: string, id: number, programmingLanguage: string) {
        super(name, id);
        this.programmingLanguage = programmingLanguage;
    }

    code(): string {
        return `${this.name} codes in ${this.programmingLanguage}`;
    }
}
//15. Create a Library class that can store Book and User objects. Add method to add books.
class Library {
    private books: Book[] = [];
    private users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    listBooks(): void {
        this.books.forEach(book => console.log(book.toString()));
    }

    listUsers(): void {
        this.users.forEach(user => console.log(user.getName()));
    }
}

//16. Create a generic class Box that can store any type of value.
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}


export { Box, Library, Bird, Fish, Dog, Cat, Animal, Product, Person, Student, Car, Rectangle, BankAccount, Book, User };