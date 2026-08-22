"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = exports.Robot = exports.CarMovable = exports.CatProtected = exports.DogProtected = exports.AnimalProtected = exports.Teacher = exports.PersonForTeacher = exports.Order = exports.ShapeStatic = exports.AirConditioner = exports.Fan = exports.Appliance = exports.CardPayment = exports.CashPayment = exports.Stack = exports.Repository = exports.BikeVehicle = exports.CarVehicle = exports.CatPolymorphism = exports.DogPolymorphism = exports.AnimalPolymorphism = exports.MathUtil = exports.Logger = exports.Box = exports.Library = exports.Developer = exports.Manager = exports.Employee = exports.Circle = exports.Square = exports.ShapeAbstract = exports.Fish = exports.Bird = exports.Cat = exports.Dog = exports.AnimalBase = exports.Account = exports.Product = exports.User = exports.Book = exports.BankAccount = exports.Rectangle = exports.Car = exports.Student = exports.Person = void 0;
exports.filterProductsOver100 = filterProductsOver100;
// Câu 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
exports.Person = Person;
//Cau 2
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Name: ${this.name},Age: ${this.age},Grade: ${this.grade}`);
    }
}
exports.Student = Student;
//Cai 3
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`Car: ${this.brand} ${this.model} ${this.year}`);
    }
}
exports.Car = Car;
//Cau 4
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
exports.Rectangle = Rectangle;
//Cau 5
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Deposit amount must be positive.");
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0 || amount > this.balance)
            return false;
        this.balance -= amount;
        return true;
    }
}
exports.BankAccount = BankAccount;
//Cau 6
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
exports.Book = Book;
//Cau 7
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.User = User;
//Cau 8
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
function filterProductsOver100(products) {
    return products.filter(product => product.price > 100);
}
// Cau 10
class Account {
    constructor(owner, balance, accountNumber) {
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0)
            this.balance += amount;
    }
}
exports.Account = Account;
//Cau 11
class AnimalBase {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
exports.AnimalBase = AnimalBase;
class Dog extends AnimalBase {
    bark() {
        console.log(`${this.name}: Woof!`);
    }
}
exports.Dog = Dog;
class Cat extends AnimalBase {
    meow() {
        console.log(`${this.name}: Meow!`);
    }
}
exports.Cat = Cat;
class Bird {
    fly() {
        console.log("Bird is flying.");
    }
}
exports.Bird = Bird;
class Fish {
    swim() {
        console.log("Fish is swimming.");
    }
}
exports.Fish = Fish;
//Cau 13
class ShapeAbstract {
}
exports.ShapeAbstract = ShapeAbstract;
class Square extends ShapeAbstract {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
exports.Square = Square;
class Circle extends ShapeAbstract {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
exports.Circle = Circle;
// Câu 14
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working.`);
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    manage() {
        console.log(`${this.name} is managing the team.`);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    code() {
        console.log(`${this.name} is writing code.`);
    }
}
exports.Developer = Developer;
// Câu 15
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
    getBooks() {
        return [...this.books];
    }
    getUsers() {
        return [...this.users];
    }
}
exports.Library = Library;
// Câu 16
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.Box = Box;
// Câu 17
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(`[LOG] ${message}`);
    }
}
exports.Logger = Logger;
// Câu 18
class MathUtil {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0)
            throw new Error("Cannot divide by zero.");
        return a / b;
    }
}
exports.MathUtil = MathUtil;
// Câu 19
class AnimalPolymorphism {
    makeSound() {
        console.log("Animal sound");
    }
}
exports.AnimalPolymorphism = AnimalPolymorphism;
class DogPolymorphism extends AnimalPolymorphism {
    makeSound() {
        console.log("Woof!");
    }
}
exports.DogPolymorphism = DogPolymorphism;
class CatPolymorphism extends AnimalPolymorphism {
    makeSound() {
        console.log("Meow!");
    }
}
exports.CatPolymorphism = CatPolymorphism;
class CarVehicle {
    drive() {
        console.log("Car is driving.");
    }
}
exports.CarVehicle = CarVehicle;
class BikeVehicle {
    drive() {
        console.log("Bike is driving.");
    }
}
exports.BikeVehicle = BikeVehicle;
// Câu 21
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return [...this.items];
    }
}
exports.Repository = Repository;
// Câu 22
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
exports.Stack = Stack;
class CashPayment {
    pay(amount) {
        console.log(`Paid ${amount} by cash.`);
    }
}
exports.CashPayment = CashPayment;
class CardPayment {
    pay(amount) {
        console.log(`Paid ${amount} by card.`);
    }
}
exports.CardPayment = CardPayment;
// Câu 24
class Appliance {
}
exports.Appliance = Appliance;
class Fan extends Appliance {
    turnOn() {
        console.log("Fan is turned on.");
    }
}
exports.Fan = Fan;
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Air conditioner is turned on.");
    }
}
exports.AirConditioner = AirConditioner;
// Câu 25
class ShapeStatic {
    static describe() {
        console.log("A shape is a geometric figure with a defined form.");
    }
}
exports.ShapeStatic = ShapeStatic;
// Câu 26
class Order {
    constructor(products = []) {
        this.products = products;
    }
    addProduct(product) {
        this.products.push(product);
    }
    totalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
exports.Order = Order;
// Câu 27
class PersonForTeacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.PersonForTeacher = PersonForTeacher;
class Teacher extends PersonForTeacher {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`Teacher ${this.name}, age ${this.age}, teaches ${this.subject}.`);
    }
}
exports.Teacher = Teacher;
// Câu 28
class AnimalProtected {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Animal sound");
    }
    playSound() {
        this.makeSound();
    }
}
exports.AnimalProtected = AnimalProtected;
class DogProtected extends AnimalProtected {
    makeSound() {
        console.log(`${this.name}: Woof!`);
    }
}
exports.DogProtected = DogProtected;
class CatProtected extends AnimalProtected {
    makeSound() {
        console.log(`${this.name}: Meow!`);
    }
}
exports.CatProtected = CatProtected;
class CarMovable {
    move() {
        console.log("Car moves on the road.");
    }
}
exports.CarMovable = CarMovable;
class Robot {
    move() {
        console.log("Robot moves using its motors.");
    }
}
exports.Robot = Robot;
// Câu 30
class School {
    constructor(students = [], teachers = []) {
        this.students = students;
        this.teachers = teachers;
    }
    displayInfo() {
        console.log("=== SCHOOL INFO ===");
        console.log("Students:");
        this.students.forEach(student => student.displayInfo());
        console.log("Teachers:");
        this.teachers.forEach(teacher => teacher.introduce());
    }
}
exports.School = School;
