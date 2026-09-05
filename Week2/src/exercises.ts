// LAB 2 - ASYNC TYPESCRIPT | Đặng Võ Thế Thịnh | MSSV 23734591
export type User={id:number,name:string,email:string};

// 1
export const exercise1=()=>new Promise<string>(r=>setTimeout(()=>r("Hello Async"),2000));
// 2
export const exercise2=()=>new Promise<number>(r=>setTimeout(()=>r(10),1000));
// 3
export const exercise3=()=>new Promise<never>((_,r)=>setTimeout(()=>r(new Error("Something went wrong")),1000));
// 4
export const exercise4=()=>new Promise<number>(r=>setTimeout(()=>r(Math.random()),500));
// 5
export function simulateTask(time:number){return new Promise<string>(r=>setTimeout(()=>r("Task done"),time));}
// 6
export const exercise6=()=>Promise.all([simulateTask(1000),simulateTask(1500),simulateTask(500)]);
// 7
export const exercise7=()=>Promise.race([new Promise<string>(r=>setTimeout(()=>r("Fast task"),500)),new Promise<string>(r=>setTimeout(()=>r("Slow task"),1500))]);
// 8
export const exercise8=()=>Promise.resolve(2).then(n=>n*n).then(n=>n*2).then(n=>n+5);
// 9
export const exercise9=()=>new Promise<number[]>(r=>setTimeout(()=>r([1,2,3,4,5,6,7,8].filter(n=>n%2===0)),1000));
// 10
export const exercise10=()=>Promise.resolve("Success").then(v=>{console.log(v);return v;}).catch(e=>{console.log(e);return "Failed";}).finally(()=>console.log("Done"));
// 11
export async function exercise11(){return await new Promise<string>(r=>setTimeout(()=>r("Hello Async"),2000));}
// 12
export async function exercise12(){const r=await simulateTask(2000);console.log(r);return r;}
// 13
export async function exercise13(){try{await exercise3();return "Success";}catch(e){return e instanceof Error?e.message:String(e);}}
// 14
export async function exercise14(n:number){await new Promise<void>(r=>setTimeout(r,1000));return n*3;}
// 15
export async function exercise15(){const a:string[]=[];a.push(await simulateTask(300));a.push(await simulateTask(300));a.push(await simulateTask(300));return a;}
// 16
export const exercise16=()=>Promise.all([simulateTask(1000),simulateTask(1000),simulateTask(1000)]);
// 17
export async function exercise17(){const ps=[Promise.resolve(10),new Promise<number>(r=>setTimeout(()=>r(20),300)),Promise.resolve(30)];const a:number[]=[];for await(const x of ps)a.push(x);return a;}
// 18
export async function fetchUser(id:number):Promise<User>{await new Promise<void>(r=>setTimeout(r,1000));return{id,name:`User ${id}`,email:`user${id}@example.com`};}
// 19
export const fetchUsers=(ids:number[])=>Promise.all(ids.map(fetchUser));
// 20
export async function fetchUserWithTimeout(id:number){const timeout=new Promise<never>((_,r)=>setTimeout(()=>r(new Error("API call timed out after 2 seconds")),2000));return Promise.race([fetchUser(id),timeout]);}

async function getJson(url:string){const response=await fetch(url);if(!response.ok)throw new Error(`HTTP error: ${response.status}`);return response.json();}
// 21
export const exercise21=()=>getJson("https://jsonplaceholder.typicode.com/todos/1");
// 22
export const exercise22=()=>Promise.all([1,2,3].map(id=>getJson(`https://jsonplaceholder.typicode.com/todos/${id}`)));
// 23
export async function exercise23(){const todos=await getJson("https://jsonplaceholder.typicode.com/todos") as Array<{id:number,title:string,completed:boolean}>;return todos.filter(t=>t.completed);}
// 24
export async function postData(){const r=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"Lab 2 TypeScript",body:"Async/Await POST example",userId:23734591})});if(!r.ok)throw new Error(`HTTP error: ${r.status}`);return r.json();}
// 25
export async function downloadFile(fileName:string){await new Promise<void>(r=>setTimeout(r,3000));const m=`Download completed: ${fileName}`;console.log(m);return m;}
// 26
export async function exercise26(){await new Promise<void>(r=>setTimeout(r,5000));return "5-second wait completed";}
// 27
export async function fetchWithRetry(url:string,retries:number){let last:unknown;for(let i=0;i<=retries;i++){try{return await getJson(url);}catch(e){last=e;if(i<retries)console.log(`Retry ${i+1}/${retries}...`);}}throw last instanceof Error?last:new Error("Fetch failed after retries");}
// 28
export const batchProcess=()=>Promise.all(Array.from({length:5},(_,i)=>simulateTask(1000).then(r=>`Task ${i+1}: ${r}`)));
// 29
export async function queueProcess(tasks:Array<()=>Promise<string>>){const out:string[]=[];for(const task of tasks)out.push(await task());return out;}
// 30
export async function exercise30(urls:string[]){const results=await Promise.allSettled(urls.map(getJson));results.forEach((r,i)=>r.status==="fulfilled"?console.log(`URL ${i+1}: SUCCESS`,r.value):console.log(`URL ${i+1}: FAILED`,r.reason));}
