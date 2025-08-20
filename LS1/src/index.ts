// 1. Create a class Person with attributes name and age. Write a method to display this information.
import { Box, Bird, Fish, Dog, Cat, Animal, Product, Person, Student, Car, Rectangle, BankAccount, Book, User } from "./schema/index"

const person: Person = new Person("John Doe", 20);

console.log("LS1 - 1");
console.log(person.toString());
console.log("================================================");



// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.





const student: Student = new Student("John Doe", 20, "DHKTPM18A");

console.log("LS1 - 2");
console.log(student.toString());
console.log("================================================");


// 3. Create a class Car with properties brand, model, year. Write a method to show car info.

const car: Car = new Car("Toyota", "Corolla", 2020);
console.log("LS1 - 3");
console.log(car.toString());
console.log("================================================");



//4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.


const rectangle: Rectangle = new Rectangle(5, 10);
console.log("LS1 - 4");
console.log(`Area: ${rectangle.area()}, Perimeter: ${rectangle.perimeter()}`);
console.log("================================================");


// 5. Create a class BankAccount with balance. Add methods deposit() and withdraw().


const account: BankAccount = new BankAccount(1000, "1234567890");
console.log("LS1 - 5");
account.deposit(500);
account.withdraw(200);
account.withdraw(1500);
console.log("================================================");


//6. Create a class Book with attributes title, author, year.

const book: Book = new Book("1984", "George Orwell", 1949);
console.log("LS1 - 6");
console.log(book.toString());
console.log("================================================");

//7. Write a class User with private property name and getter/setter.

const user: User = new User();
user.setName("Alice");
console.log("LS1 - 7");
console.log(user.getName());
console.log("================================================");


//8. Create a Product class with name, price. Create an array of products and filter products with
// price > 100.
const listProducts: Product[] = [
    new Product("Laptop", 1500),
    new Product("Mouse", 25),
    new Product("Keyboard", 75),
    new Product("PC", 2000)
]

listProducts.map((product: Product) => {
    if (product.getPrice() > 100) {
        console.log(`Product: ${product.getName()}, Price: ${product.getPrice()}`);
    }
})


//9. Define an interface Animal with name and method sound().
const animal = new Animal("Dog");
console.log("LS1 - 9");
console.log(`Sound: ${animal.sound()}`);
console.log("================================================");


//11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().

const cat: Cat = new Cat("Bun");
const dog: Dog = new Dog("Rex");

console.log("LS1 - 11");
console.log(cat.mew());
console.log(dog.bark());
console.log("================================================");

//16
const box: Box<Animal> = new Box<Animal>(new Animal("Generic Animal"));

console.log("LS1 - 16");
console.log(box.getValue().sound());
console.log("================================================");