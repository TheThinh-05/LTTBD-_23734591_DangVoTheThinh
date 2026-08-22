// Câu 1
export class Person {
  constructor(public name: string, public age: number) {}

  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

//Cau 2
export class Student extends Person {
  constructor(name: string,age :number,public grade: number){
    super(name,age);
  }

  displayInfo(): void {
    console.log(`Name: ${this.name},Age: ${this.age},Grade: ${this.grade}`);
  }
}

//Cai 3
export class Car{
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}

  showInfo(): void{
    console.log(`Car: ${this.brand} ${this.model} ${this.year}`);
  }
}

//Cau 4
export class Rectangle {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

//Cau 5
export class BankAccount {
  constructor(public balance: number = 0) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit amount must be positive.");
    this.balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount <= 0 || amount > this.balance) return false;
    this.balance -= amount;
    return true;
  }
}

//Cau 6
export class Book{
  constructor(
    public title: string,
    public author: string,
    public year: number
  ){}
}

//Cau 7
export class User {
  constructor(private name: string){}

  getName(): string {
    return this.name;
  }

  setName(name: string): void{
    this.name = name;
  }
}

//Cau 8
export class Product {
  constructor(public name: string, public price: number) {}
}

export function filterProductsOver100(products: Product[]): Product[] {
  return products.filter(product => product.price > 100);
}

// Câu 9
export interface AnimalInterface {
  name: string;
  sound(): void;
}

// Cau 10
export class Account {
  public owner: string;
  private balance: number;
  readonly accountNumber: string;

  constructor(owner: string, balance: number, accountNumber: string) {
    this.owner = owner;
    this.balance = balance;
    this.accountNumber = accountNumber;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    if (amount > 0) this.balance += amount;
  }
}

//Cau 11
export class AnimalBase {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

export class Dog extends AnimalBase {
  bark(): void {
    console.log(`${this.name}: Woof!`);
  }
}

export class Cat extends AnimalBase {
  meow(): void {
    console.log(`${this.name}: Meow!`);
  }
}

//Cau 12
export interface Flyable {
  fly(): void;
}

export interface Swimmable {
  swim(): void;
}

export class Bird implements Flyable {
  fly(): void {
    console.log("Bird is flying.");
  }
}

export class Fish implements Swimmable {
  swim(): void {
    console.log("Fish is swimming.");
  }
} 

//Cau 13
export abstract class ShapeAbstract {
  abstract area(): number;
}

export class Square extends ShapeAbstract {
  constructor(public side: number) {
    super();
  }

  area(): number {
    return this.side * this.side;
  }
}

export class Circle extends ShapeAbstract {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Câu 14
export class Employee {
  constructor(
    public name: string,
    public salary: number
  ) {}

  work(): void {
    console.log(`${this.name} is working.`);
  }
}

export class Manager extends Employee {
  manage(): void {
    console.log(`${this.name} is managing the team.`);
  }
}

export class Developer extends Employee {
  code(): void {
    console.log(`${this.name} is writing code.`);
  }
}

// Câu 15
export class Library {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  getBooks(): Book[] {
    return [...this.books];
  }

  getUsers(): User[] {
    return [...this.users];
  }
}

// Câu 16
export class Box<T> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

// Câu 17
export class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
}

// Câu 18
export class MathUtil {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
    if (b === 0) throw new Error("Cannot divide by zero.");
    return a / b;
  }
}

// Câu 19
export class AnimalPolymorphism {
  makeSound(): void {
    console.log("Animal sound");
  }
}

export class DogPolymorphism extends AnimalPolymorphism {
  override makeSound(): void {
    console.log("Woof!");
  }
}

export class CatPolymorphism extends AnimalPolymorphism {
  override makeSound(): void {
    console.log("Meow!");
  }
}

// Câu 20
export interface Vehicle {
  drive(): void;
}

export class CarVehicle implements Vehicle {
  drive(): void {
    console.log("Car is driving.");
  }
}

export class BikeVehicle implements Vehicle {
  drive(): void {
    console.log("Bike is driving.");
  }
}

// Câu 21
export class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }
}

// Câu 22
export class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Câu 23
export interface Payment {
  pay(amount: number): void;
}

export class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} by cash.`);
  }
}

export class CardPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} by card.`);
  }
}

// Câu 24
export abstract class Appliance {
  abstract turnOn(): void;
}

export class Fan extends Appliance {
  turnOn(): void {
    console.log("Fan is turned on.");
  }
}

export class AirConditioner extends Appliance {
  turnOn(): void {
    console.log("Air conditioner is turned on.");
  }
}

// Câu 25
export class ShapeStatic {
  static describe(): void {
    console.log("A shape is a geometric figure with a defined form.");
  }
}

// Câu 26
export class Order {
  constructor(public products: Product[] = []) {}

  addProduct(product: Product): void {
    this.products.push(product);
  }

  totalPrice(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}

// Câu 27
export class PersonForTeacher {
  constructor(public name: string, public age: number) {}
}

export class Teacher extends PersonForTeacher {
  constructor(
    name: string,
    age: number,
    public subject: string
  ) {
    super(name, age);
  }

  introduce(): void {
    console.log(
      `Teacher ${this.name}, age ${this.age}, teaches ${this.subject}.`
    );
  }
}

// Câu 28
export class AnimalProtected {
  constructor(public name: string) {}

  protected makeSound(): void {
    console.log("Animal sound");
  }

  playSound(): void {
    this.makeSound();
  }
}

export class DogProtected extends AnimalProtected {
  protected override makeSound(): void {
    console.log(`${this.name}: Woof!`);
  }
}

export class CatProtected extends AnimalProtected {
  protected override makeSound(): void {
    console.log(`${this.name}: Meow!`);
  }
}

// Câu 29
export interface Movable {
  move(): void;
}

export class CarMovable implements Movable {
  move(): void {
    console.log("Car moves on the road.");
  }
}

export class Robot implements Movable {
  move(): void {
    console.log("Robot moves using its motors.");
  }
}

// Câu 30
export class School {
  constructor(
    public students: Student[] = [],
    public teachers: Teacher[] = []
  ) {}

  displayInfo(): void {
    console.log("=== SCHOOL INFO ===");
    console.log("Students:");
    this.students.forEach(student => student.displayInfo());

    console.log("Teachers:");
    this.teachers.forEach(teacher => teacher.introduce());
  }
}
