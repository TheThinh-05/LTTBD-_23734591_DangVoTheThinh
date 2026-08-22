"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercises_1 = require("./exercises");
console.log("========== CÂU 1 ==========");
new exercises_1.Person("Nguyen Van A", 20).displayInfo();
console.log("========== CÂU 2 ==========");
new exercises_1.Student("Tran Thi B", 21, 8.5).displayInfo();
console.log("========== CÂU 3 ==========");
new exercises_1.Car("Toyota", "Camry", 2024).showInfo();
console.log("========== CÂU 4 ==========");
const rectangle = new exercises_1.Rectangle(5, 3);
console.log("Area:", rectangle.area());
console.log("Perimeter:", rectangle.perimeter());
console.log("========== CÂU 5 ==========");
const account = new exercises_1.BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log("Balance:", account.balance);
console.log("========== CÂU 6 ==========");
console.log(new exercises_1.Book("Truyen Kieu", "Nguyen Du", 1945));
console.log("========== CÂU 7 ==========");
const user = new exercises_1.User("The Thinh");
console.log(user.getName());
user.setName("Dang Vo The Thinh");
console.log(user.getName());
console.log("========== CÂU 8 ==========");
const products = [
    new exercises_1.Product("Keyboard", 80),
    new exercises_1.Product("Monitor", 250),
    new exercises_1.Product("Mouse", 120)
];
console.log((0, exercises_1.filterProductsOver100)(products));
console.log("========== CÂU 9 ==========");
const animal = {
    name: "Dog",
    sound: () => console.log("Woof!")
};
console.log(animal.name);
animal.sound();
console.log("========== CÂU 10 ==========");
const acc = new exercises_1.Account("Thinh", 1000, "ACC001");
acc.deposit(500);
console.log("Owner:", acc.owner, "Balance:", acc.getBalance(), "No:", acc.accountNumber);
console.log("========== CÂU 11 ==========");
new exercises_1.Dog("Buddy").bark();
new exercises_1.Cat("Kitty").meow();
console.log("========== CÂU 12 ==========");
new exercises_1.Bird().fly();
new exercises_1.Fish().swim();
console.log("========== CÂU 13 ==========");
console.log("Square area:", new exercises_1.Square(4).area());
console.log("Circle area:", new exercises_1.Circle(3).area());
console.log("========== CÂU 14 ==========");
new exercises_1.Manager("Manager A", 2000).manage();
new exercises_1.Developer("Developer B", 1800).code();
console.log("========== CÂU 15 ==========");
const library = new exercises_1.Library();
library.addBook(new exercises_1.Book("TypeScript Basics", "Author A", 2025));
library.addUser(new exercises_1.User("User A"));
console.log("Books:", library.getBooks());
console.log("Users:", library.getUsers());
console.log("========== CÂU 16 ==========");
const box = new exercises_1.Box(123);
console.log("Box value:", box.getValue());
console.log("========== CÂU 17 ==========");
exercises_1.Logger.getInstance().log("Hello from singleton logger.");
console.log("========== CÂU 18 ==========");
console.log(exercises_1.MathUtil.add(5, 3));
console.log(exercises_1.MathUtil.subtract(5, 3));
console.log(exercises_1.MathUtil.multiply(5, 3));
console.log(exercises_1.MathUtil.divide(6, 3));
console.log("========== CÂU 19 ==========");
const animals = [
    new exercises_1.DogPolymorphism(),
    new exercises_1.CatPolymorphism()
];
animals.forEach(a => a.makeSound());
console.log("========== CÂU 20 ==========");
new exercises_1.CarVehicle().drive();
new exercises_1.BikeVehicle().drive();
console.log("========== CÂU 21 ==========");
const repo = new exercises_1.Repository();
repo.add(new exercises_1.Product("Laptop", 1000));
repo.add(new exercises_1.Product("Phone", 700));
console.log(repo.getAll());
console.log("========== CÂU 22 ==========");
const stack = new exercises_1.Stack();
stack.push(10);
stack.push(20);
console.log("Peek:", stack.peek());
console.log("Pop:", stack.pop());
console.log("Is empty:", stack.isEmpty());
console.log("========== CÂU 23 ==========");
new exercises_1.CashPayment().pay(500);
new exercises_1.CardPayment().pay(800);
console.log("========== CÂU 24 ==========");
new exercises_1.Fan().turnOn();
new exercises_1.AirConditioner().turnOn();
console.log("========== CÂU 25 ==========");
exercises_1.ShapeStatic.describe();
console.log("========== CÂU 26 ==========");
const order = new exercises_1.Order([
    new exercises_1.Product("Product A", 100),
    new exercises_1.Product("Product B", 250)
]);
order.addProduct(new exercises_1.Product("Product C", 50));
console.log("Total:", order.totalPrice());
console.log("========== CÂU 27 ==========");
new exercises_1.Teacher("Nguyen Van Teacher", 35, "TypeScript").introduce();
console.log("========== CÂU 28 ==========");
new exercises_1.DogProtected("Doggy").playSound();
new exercises_1.CatProtected("Mimi").playSound();
console.log("========== CÂU 29 ==========");
new exercises_1.CarMovable().move();
new exercises_1.Robot().move();
console.log("========== CÂU 30 ==========");
const school = new exercises_1.School([new exercises_1.Student("Student 1", 20, 8), new exercises_1.Student("Student 2", 21, 9)], [new exercises_1.Teacher("Teacher 1", 35, "Programming")]);
school.displayInfo();
