import {
  Person, Student, Car, Rectangle, BankAccount, Book, User,Product, filterProductsOver100,Account,Dog,Cat,Bird, Fish,Square, Circle, Manager, Developer, Library, Box, Logger, MathUtil,
  DogPolymorphism, CatPolymorphism, CarVehicle, BikeVehicle,
  Repository, Stack, CashPayment, CardPayment, Fan, AirConditioner,
  Order, Teacher, DogProtected, CatProtected, CarMovable, Robot, School,
  AnimalPolymorphism, ShapeStatic
} from "./exercises";

console.log("========== CÂU 1 ==========");
new Person("Nguyen Van A", 20).displayInfo();

console.log("========== CÂU 2 ==========");
new Student("Tran Thi B", 21, 8.5).displayInfo();

console.log("========== CÂU 3 ==========");
new Car("Toyota", "Camry", 2024).showInfo();

console.log("========== CÂU 4 ==========");
const rectangle = new Rectangle(5, 3);
console.log("Area:", rectangle.area());
console.log("Perimeter:", rectangle.perimeter());

console.log("========== CÂU 5 ==========");
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log("Balance:", account.balance);

console.log("========== CÂU 6 ==========");
console.log(new Book("Truyen Kieu", "Nguyen Du", 1945));

console.log("========== CÂU 7 ==========");
const user = new User("The Thinh");
console.log(user.getName());
user.setName("Dang Vo The Thinh");
console.log(user.getName());

console.log("========== CÂU 8 ==========");
const products = [
  new Product("Keyboard", 80),
  new Product("Monitor", 250),
  new Product("Mouse", 120)
];
console.log(filterProductsOver100(products));

console.log("========== CÂU 9 ==========");
const animal: { name: string; sound: () => void } = {
  name: "Dog",
  sound: () => console.log("Woof!")
};
console.log(animal.name);
animal.sound();

console.log("========== CÂU 10 ==========");
const acc = new Account("Thinh", 1000, "ACC001");
acc.deposit(500);
console.log("Owner:", acc.owner, "Balance:", acc.getBalance(), "No:", acc.accountNumber);

console.log("========== CÂU 11 ==========");
new Dog("Buddy").bark();
new Cat("Kitty").meow();

console.log("========== CÂU 12 ==========");
new Bird().fly();
new Fish().swim();

console.log("========== CÂU 13 ==========");
console.log("Square area:", new Square(4).area());
console.log("Circle area:", new Circle(3).area());

console.log("========== CÂU 14 ==========");
new Manager("Manager A", 2000).manage();
new Developer("Developer B", 1800).code();

console.log("========== CÂU 15 ==========");
const library = new Library();
library.addBook(new Book("TypeScript Basics", "Author A", 2025));
library.addUser(new User("User A"));
console.log("Books:", library.getBooks());
console.log("Users:", library.getUsers());

console.log("========== CÂU 16 ==========");
const box = new Box<number>(123);
console.log("Box value:", box.getValue());

console.log("========== CÂU 17 ==========");
Logger.getInstance().log("Hello from singleton logger.");

console.log("========== CÂU 18 ==========");
console.log(MathUtil.add(5, 3));
console.log(MathUtil.subtract(5, 3));
console.log(MathUtil.multiply(5, 3));
console.log(MathUtil.divide(6, 3));

console.log("========== CÂU 19 ==========");
const animals: AnimalPolymorphism[] = [
  new DogPolymorphism(),
  new CatPolymorphism()
];
animals.forEach(a => a.makeSound());

console.log("========== CÂU 20 ==========");
new CarVehicle().drive();
new BikeVehicle().drive();

console.log("========== CÂU 21 ==========");
const repo = new Repository<Product>();
repo.add(new Product("Laptop", 1000));
repo.add(new Product("Phone", 700));
console.log(repo.getAll());

console.log("========== CÂU 22 ==========");
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log("Peek:", stack.peek());
console.log("Pop:", stack.pop());
console.log("Is empty:", stack.isEmpty());

console.log("========== CÂU 23 ==========");
new CashPayment().pay(500);
new CardPayment().pay(800);

console.log("========== CÂU 24 ==========");
new Fan().turnOn();
new AirConditioner().turnOn();

console.log("========== CÂU 25 ==========");
ShapeStatic.describe();

console.log("========== CÂU 26 ==========");
const order = new Order([
  new Product("Product A", 100),
  new Product("Product B", 250)
]);
order.addProduct(new Product("Product C", 50));
console.log("Total:", order.totalPrice());

console.log("========== CÂU 27 ==========");
new Teacher("Nguyen Van Teacher", 35, "TypeScript").introduce();

console.log("========== CÂU 28 ==========");
new DogProtected("Doggy").playSound();
new CatProtected("Mimi").playSound();

console.log("========== CÂU 29 ==========");
new CarMovable().move();
new Robot().move();

console.log("========== CÂU 30 ==========");
const school = new School(
  [new Student("Student 1", 20, 8), new Student("Student 2", 21, 9)],
  [new Teacher("Teacher 1", 35, "Programming")]
);
school.displayInfo();

