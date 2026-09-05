import * as e from "./exercises";
async function main(){
console.log("LAB 2 - ASYNC TYPESCRIPT | Đặng Võ Thế Thịnh | MSSV 23734591");
console.log("1",await e.exercise1()); 
console.log("2",await e.exercise2());
try{await e.exercise3()}catch(x){console.log("3",x instanceof Error?x.message:x)}
await e.exercise4().then(x=>console.log("4",x)).catch(console.error);
console.log("5",await e.simulateTask(300)); 
console.log("6",await e.exercise6()); 
console.log("7",await e.exercise7()); 
console.log("8",await e.exercise8()); 
console.log("9",await e.exercise9()); 
await e.exercise10();
console.log("11",await e.exercise11()); 
console.log("12",await e.exercise12()); 
console.log("13",await e.exercise13()); 
console.log("14",await e.exercise14(4)); 
console.log("15",await e.exercise15()); 
console.log("16",await e.exercise16()); 
console.log("17",await e.exercise17()); 
console.log("18",await e.fetchUser(1)); 
console.log("19",await e.fetchUsers([1,2,3])); 
console.log("20",await e.fetchUserWithTimeout(1));
console.log("21",await e.exercise21()); 
console.log("22",await e.exercise22()); 
console.log("23",(await e.exercise23()).slice(0,5)); 
console.log("24",await e.postData()); 
console.log("25",await e.downloadFile("example.zip")); 
console.log("26",await e.exercise26()); 
console.log("27",await e.fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1",3)); 
console.log("28",await e.batchProcess()); 
console.log("29",await e.queueProcess([()=>e.simulateTask(300).then(()=>"Queue task 1 done"),()=>e.simulateTask(300).then(()=>"Queue task 2 done"),()=>e.simulateTask(300).then(()=>"Queue task 3 done")])); 
await e.exercise30(["https://jsonplaceholder.typicode.com/todos/1","https://jsonplaceholder.typicode.com/todos/2","https://invalid.example.com/not-found"]);
console.log("HOÀN TẤT LAB 2");}
main().catch(err=>console.error(err));
