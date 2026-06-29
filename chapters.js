// ============================================================
//  ASB JS ACADEMY — chapters.js
//  সব Chapter এখানে proper HTML হিসেবে আছে
// ============================================================

const CHAPTERS = [
{id:0, title:"অধ্যায় ১ — JavaScript পরিচিতি", html:`
<h2>অধ্যায় ১ — JavaScript পরিচিতি</h2>
<p>JavaScript এমন একটি Programming Language যা Browser বুঝতে পারে। তুমি যখন Button চাপো, Animation চলে, Form কাজ করে, Game চলে — সবকিছুর পেছনে JavaScript কাজ করে।</p>
<div class="note"><b>মনে রাখো:</b><br>HTML = Structure &nbsp;|&nbsp; CSS = Design &nbsp;|&nbsp; JavaScript = Brain</div>
<div class="code">&lt;script&gt;
alert("হ্যালো বাংলাদেশ");
&lt;/script&gt;</div>
<p>নিচে লিখে Run করো:</p>
<textarea id="editor" class="code-editor">&lt;h1 style="color:blue"&gt;হ্যালো বাংলাদেশ!&lt;/h1&gt;
&lt;script&gt;document.body.style.background="#e8f4ff";&lt;/script&gt;</textarea>
<button onclick="runExample()">▶ Run করো</button>
<iframe id="output" class="preview-frame"></iframe>
`},

{id:1, title:"অধ্যায় ২ — JavaScript কোথায় লিখবো?", html:`
<h2>অধ্যায় ২ — JavaScript কোথায় লিখবো?</h2>
<p>JavaScript লেখার ৩টি উপায় আছে:</p>
<div class="grid-2">
  <div class="card-item">1️⃣ <b>Inline</b><br>HTML tag-এর ভেতরে</div>
  <div class="card-item">2️⃣ <b>Internal</b><br>&lt;script&gt; tag-এ</div>
  <div class="card-item">3️⃣ <b>External</b><br>app.js ফাইলে</div>
  <div class="card-item">✅ <b>Best Practice</b><br>External File</div>
</div>
<div class="code">// External File (app.js)
console.log("আমি JavaScript");</div>
`},

{id:2, title:"অধ্যায় ৩ — Console কী?", html:`
<h2>অধ্যায় ৩ — Console কী?</h2>
<p>Console হচ্ছে Programmer-এর সবচেয়ে বড় বন্ধু। এখানে আমরা Debug করি, Output দেখি, Error খুঁজি।</p>
<div class="note">Chrome → F12 → Console Tab খোলো</div>
<div class="code">console.log("Hello");
console.log(100);
console.log(true);
console.error("Error!");
console.warn("সতর্কতা!");</div>
<button onclick="consoleExample()">▶ Console Example চালাও</button>
<div class="output-box" id="consoleOutput"></div>
`},

{id:3, title:"অধ্যায় ৪ — Variable", html:`
<h2>অধ্যায় ৪ — Variable</h2>
<p>Variable মানে একটি Box যেখানে Data রাখা হয়।</p>
<div class="note">🎒 ধরো — তোমার কাছে একটি School Bag আছে।<br>Bag-এর নাম = Variable<br>Bag-এর ভেতরে বই = Data</div>
<div class="code">let student = "Ali";
console.log(student); // Ali</div>
<div class="quiz-box">
  <div class="quiz-q">Variable রাখার জন্য কোন Keyword সবচেয়ে বেশি ব্যবহার করা হয়?</div>
  <div class="option" onclick="quiz(this,'wrong')">var</div>
  <div class="option" onclick="quiz(this,'correct')">let</div>
  <div class="option" onclick="quiz(this,'wrong')">goto</div>
  <div class="quiz-result" id="variableResult"></div>
</div>
`},

{id:4, title:"অধ্যায় ৫ — let", html:`
<h2>অধ্যায় ৫ — let</h2>
<p>let হচ্ছে Modern JavaScript-এর Variable Keyword। এর Value পরিবর্তন করা যায়।</p>
<div class="code">let age = 20;
age = 25;
console.log(age); // 25</div>
<div class="note">✅ let = Value পরিবর্তন করা যায়</div>
`},

{id:5, title:"অধ্যায় ৬ — const", html:`
<h2>অধ্যায় ৬ — const</h2>
<p>const দিয়ে এমন Variable বানানো হয় যার Value পরিবর্তন করা যাবে না।</p>
<div class="code">const country = "Bangladesh";
console.log(country);

// ❌ এটা Error দেবে:
// country = "India";</div>
<div class="note">🔒 const = একবার দিলে আর বদলানো যাবে না</div>
`},

{id:6, title:"অধ্যায় ৭ — var", html:`
<h2>অধ্যায় ৭ — var</h2>
<p>পুরোনো JavaScript-এ var ব্যবহার হতো। বর্তমানে সাধারণত let ও const ব্যবহার করা হয়।</p>
<div class="code">var x = 10;
console.log(x);</div>
<div class="grid-2">
  <div class="card-item">❌ var — পুরোনো, avoid করো</div>
  <div class="card-item">✅ let — নতুন মান রাখতে</div>
  <div class="card-item">✅ const — অপরিবর্তিত মান</div>
  <div class="card-item">💡 Modern JS = let + const</div>
</div>
`},

{id:7, title:"অধ্যায় ৮ — Data Type", html:`
<h2>অধ্যায় ৮ — Data Type</h2>
<p>JavaScript-এ বিভিন্ন ধরনের Data থাকে।</p>
<div class="grid-2">
  <div class="card-item">📝 <b>String</b><br>"বাংলাদেশ"</div>
  <div class="card-item">🔢 <b>Number</b><br>42, 3.14</div>
  <div class="card-item">✅ <b>Boolean</b><br>true / false</div>
  <div class="card-item">📦 <b>Object</b><br>{name:"Ali"}</div>
  <div class="card-item">📋 <b>Array</b><br>[1, 2, 3]</div>
  <div class="card-item">❓ <b>Undefined</b><br>কোনো মান নেই</div>
  <div class="card-item">🚫 <b>Null</b><br>ইচ্ছাকৃত খালি</div>
  <div class="card-item">🔣 <b>Symbol</b><br>Unique identifier</div>
</div>
`},

{id:8, title:"অধ্যায় ৯ — String", html:`
<h2>অধ্যায় ৯ — String</h2>
<p>String হলো Text বা লেখা। Quote-এর মধ্যে যা লিখবে সবই String।</p>
<div class="code">let name = "Ali";
let city = 'Dhaka';
let msg = \`আমার নাম \${name}\`;
console.log(msg);</div>
<button onclick="stringExample()">▶ চালাও</button>
<div class="output-box" id="stringOutput"></div>
`},

{id:9, title:"অধ্যায় ১০ — Number", html:`
<h2>অধ্যায় ১০ — Number</h2>
<p>যেকোনো সংখ্যাই Number — পূর্ণসংখ্যা বা দশমিক।</p>
<div class="code">let age = 20;
let price = 99.99;
console.log(typeof age);   // number
console.log(typeof price); // number</div>
<div class="note">JavaScript-এ Integer ও Float আলাদা নেই — সব Number।</div>
`},

{id:10, title:"অধ্যায় ১১ — Boolean", html:`
<h2>অধ্যায় ১১ — Boolean</h2>
<p>Boolean-এর মাত্র দুটি মান: true অথবা false।</p>
<div class="grid-2">
  <div class="card-item">✅ <b>true</b><br>হ্যাঁ / চালু / সত্য</div>
  <div class="card-item">❌ <b>false</b><br>না / বন্ধ / মিথ্যা</div>
</div>
<div class="code">let isStudent = true;
let isMarried = false;
console.log(isStudent); // true</div>
`},

{id:11, title:"অধ্যায় ১২ — Undefined", html:`
<h2>অধ্যায় ১২ — Undefined</h2>
<p>যখন Variable তৈরি করা হয়েছে কিন্তু কোনো Value দেওয়া হয়নি।</p>
<div class="code">let city;
console.log(city); // undefined</div>
<div class="note">📦 Box আছে কিন্তু ভেতরে কিছু নেই = Undefined</div>
`},

{id:12, title:"অধ্যায় ১৩ — Null", html:`
<h2>অধ্যায় ১৩ — Null</h2>
<p>Null মানে ইচ্ছাকৃতভাবে খালি রাখা হয়েছে।</p>
<div class="code">let user = null;
console.log(user); // null</div>
<div class="grid-2">
  <div class="card-item">❓ <b>Undefined</b><br>Value দেওয়া হয়নি</div>
  <div class="card-item">🚫 <b>Null</b><br>নিজেই খালি করেছি</div>
</div>
`},

{id:13, title:"অধ্যায় ১৪ — typeof Operator", html:`
<h2>অধ্যায় ১৪ — typeof Operator</h2>
<p>typeof দিয়ে জানা যায় Variable-এর Data Type কী।</p>
<div class="code">console.log(typeof "Ali");  // string
console.log(typeof 100);    // number
console.log(typeof true);   // boolean
console.log(typeof null);   // object (বিখ্যাত bug!)</div>
<div class="quiz-box">
  <div class="quiz-q">typeof 100 এর Output কী হবে?</div>
  <div class="option" onclick="quiz(this,'correct')">number</div>
  <div class="option" onclick="quiz(this,'wrong')">string</div>
  <div class="option" onclick="quiz(this,'wrong')">boolean</div>
  <div class="quiz-result" id="typeResult"></div>
</div>
`},

{id:14, title:"অধ্যায় ১৫ — Arithmetic Operator", html:`
<h2>অধ্যায় ১৫ — Arithmetic Operator (গাণিতিক)</h2>
<div class="grid-2">
  <div class="card-item">➕ + যোগ</div>
  <div class="card-item">➖ - বিয়োগ</div>
  <div class="card-item">✖️ * গুণ</div>
  <div class="card-item">➗ / ভাগ</div>
  <div class="card-item">% ভাগশেষ</div>
  <div class="card-item">** Power</div>
</div>
<div class="code">let a = 20, b = 10;
console.log(a + b); // 30
console.log(a - b); // 10
console.log(a * b); // 200
console.log(a / b); // 2
console.log(a % b); // 0</div>
`},

{id:15, title:"অধ্যায় ১৬ — Assignment Operator", html:`
<h2>অধ্যায় ১৬ — Assignment Operator</h2>
<div class="code">let x = 10;
x += 5;  // x = x + 5 = 15
x -= 2;  // x = x - 2 = 13
x *= 3;  // x = x * 3 = 39
x /= 2;  // x = x / 2 = 19.5
console.log(x); // 19.5</div>
<div class="note">= মানে Assign করা। += মানে আগের মানের সাথে যোগ করা।</div>
`},

{id:16, title:"অধ্যায় ১৭ — Comparison Operator", html:`
<h2>অধ্যায় ১৭ — Comparison Operator</h2>
<div class="grid-2">
  <div class="card-item">== শুধু Value</div>
  <div class="card-item">=== Value + Type</div>
  <div class="card-item">!= সমান না</div>
  <div class="card-item">!== Value/Type ভিন্ন</div>
  <div class="card-item">&gt; বড়</div>
  <div class="card-item">&lt; ছোট</div>
</div>
<div class="code">console.log(10 == "10");  // true (শুধু value)
console.log(10 === "10"); // false (type আলাদা)
console.log(10 > 5);      // true</div>
<div class="note">⚠️ সবসময় === ব্যবহার করো। == এড়িয়ে চলো।</div>
`},

{id:17, title:"অধ্যায় ১৮ — Logical Operator", html:`
<h2>অধ্যায় ১৮ — Logical Operator</h2>
<div class="grid-2">
  <div class="card-item">&& AND<br>দুটোই true হলে true</div>
  <div class="card-item">|| OR<br>যেকোনো একটি true হলে true</div>
  <div class="card-item">! NOT<br>উল্টো করে দেয়</div>
</div>
<div class="code">let age = 20, student = true;
console.log(age >= 18 && student); // true
console.log(age < 18 || student);  // true
console.log(!student);             // false</div>
`},

{id:18, title:"অধ্যায় ১৯ — Increment ও Decrement", html:`
<h2>অধ্যায় ১৯ — Increment ও Decrement</h2>
<div class="code">let i = 1;
i++; // i = 2
console.log(i);
i--; // i = 1
console.log(i);</div>
<div class="note">++ মানে ১ বাড়াও &nbsp;|&nbsp; -- মানে ১ কমাও</div>
`},

{id:19, title:"অধ্যায় ২০ — Mini Calculator", html:`
<h2>অধ্যায় ২০ — Mini Calculator 🧮</h2>
<p>দুটি সংখ্যা লিখে যোগফল বের করো:</p>
<input id="num1" type="number" placeholder="প্রথম সংখ্যা" class="text-input">
<input id="num2" type="number" placeholder="দ্বিতীয় সংখ্যা" class="text-input" style="margin-top:8px">
<button onclick="addNumbers()">➕ যোগফল বের করো</button>
<div class="output-box" id="sumResult"></div>
`},

{id:20, title:"অধ্যায় ২১ — if Statement", html:`
<h2>অধ্যায় ২১ — if Statement</h2>
<p>যদি শর্ত সত্য হয় তাহলে কাজ করবে।</p>
<div class="note">☂️ যদি বৃষ্টি হয় → ছাতা নাও। না হলে → লাগবে না।</div>
<div class="code">let age = 20;
if(age >= 18){
  console.log("তুমি ভোট দিতে পারবে");
}</div>
`},

{id:21, title:"অধ্যায় ২২ — if...else", html:`
<h2>অধ্যায় ২২ — if...else</h2>
<div class="code">let marks = 45;
if(marks >= 33){
  console.log("পাস ✅");
} else {
  console.log("ফেল ❌");
}</div>
<button onclick="checkPass()">▶ রেজাল্ট দেখো</button>
<div class="output-box" id="passOutput"></div>
`},

{id:22, title:"অধ্যায় ২৩ — else if", html:`
<h2>অধ্যায় ২৩ — else if</h2>
<div class="code">let mark = 85;
if(mark >= 80){
  console.log("A+");
} else if(mark >= 70){
  console.log("A");
} else if(mark >= 60){
  console.log("A-");
} else {
  console.log("Fail");
}</div>
`},

{id:23, title:"অধ্যায় ২৪ — Real Life Example", html:`
<h2>অধ্যায় ২৪ — Real Life Example</h2>
<div class="note">🎬 ধরো তুমি সিনেমা হলে যাবে।</div>
<div class="code">let age = 15;
if(age >= 18){
  console.log("🎟️ টিকিট পাও");
} else {
  console.log("👨‍👩‍👦 বড়দের সাথে আসো");
}</div>
<p>বয়স লিখে দেখো:</p>
<input id="ageInput" type="number" placeholder="তোমার বয়স" class="text-input">
<button onclick="checkAge()">▶ চেক করো</button>
<div class="output-box" id="ageResult"></div>
`},

{id:24, title:"অধ্যায় ২৫ — Nested if", html:`
<h2>অধ্যায় ২৫ — Nested if</h2>
<p>একটি if-এর ভিতরে আরেকটি if।</p>
<div class="code">let age = 22;
let hasID = true;
if(age >= 18){
  if(hasID){
    console.log("✅ প্রবেশ করতে পারবে");
  } else {
    console.log("❌ ID কার্ড নেই");
  }
}</div>
`},

{id:25, title:"অধ্যায় ২৬ — switch Statement", html:`
<h2>অধ্যায় ২৬ — switch Statement</h2>
<div class="note">🏧 ATM Machine — ১=Balance ২=Withdraw ৩=Exit</div>
<div class="code">let day = 3;
switch(day){
  case 1: console.log("শনিবার"); break;
  case 2: console.log("রবিবার"); break;
  case 3: console.log("সোমবার"); break;
  default: console.log("অজানা দিন");
}</div>
`},

{id:26, title:"অধ্যায় ২৭ — Ternary Operator", html:`
<h2>অধ্যায় ২৭ — Ternary Operator</h2>
<p>ছোট if...else লেখার সুন্দর উপায়।</p>
<div class="code">let age = 20;
let result = age >= 18 ? "Adult 🧑" : "Child 🧒";
console.log(result); // Adult</div>
<div class="note">Condition ? সত্য হলে এটা : মিথ্যা হলে এটা</div>
`},

{id:27, title:"অধ্যায় ২৮ — for Loop", html:`
<h2>অধ্যায় ২৮ — for Loop</h2>
<p>একই কাজ বারবার করার জন্য Loop।</p>
<div class="code">for(let i = 1; i <= 5; i++){
  console.log(i);
}</div>
<button onclick="runForLoop()">▶ Loop চালাও</button>
<div class="output-box" id="forOutput"></div>
`},

{id:28, title:"অধ্যায় ২৯ — while Loop", html:`
<h2>অধ্যায় ২৯ — while Loop</h2>
<p>Condition সত্য থাকা পর্যন্ত চলতে থাকে।</p>
<div class="code">let i = 1;
while(i <= 5){
  console.log(i);
  i++;
}</div>
`},

{id:29, title:"অধ্যায় ৩০ — do...while Loop", html:`
<h2>অধ্যায় ৩০ — do...while Loop</h2>
<div class="code">let i = 1;
do {
  console.log(i);
  i++;
} while(i <= 5);</div>
<div class="grid-2">
  <div class="card-item">while → আগে Condition দেখে</div>
  <div class="card-item">do...while → আগে চালায়, পরে দেখে</div>
</div>
`},

{id:30, title:"অধ্যায় ৩১ — Loop Practice", html:`
<h2>অধ্যায় ৩১ — Loop Practice</h2>
<p>১ থেকে ১০ পর্যন্ত সংখ্যা:</p>
<button onclick="practiceLoop()">▶ Show Numbers</button>
<div class="output-box" id="practiceOutput"></div>
`},

{id:31, title:"অধ্যায় ৩২ — Function কী?", html:`
<h2>অধ্যায় ৩২ — Function কী?</h2>
<p>Function হলো এমন একটি কোডের ব্লক যেটি একবার লিখে যতবার খুশি ব্যবহার করা যায়।</p>
<div class="note">🍜 রাইস কুকার = Function। একবার তৈরি করো, বারবার ব্যবহার করো।</div>
<div class="code">function sayHello(){
  console.log("হ্যালো বাংলাদেশ!");
}
sayHello(); // call করো
sayHello(); // আবার call করো</div>
<button onclick="sayHelloDemo()">▶ Function চালাও</button>
<div class="output-box" id="helloResult"></div>
`},

{id:32, title:"অধ্যায় ৩৩ — Function Parameter", html:`
<h2>অধ্যায় ৩৩ — Function Parameter</h2>
<div class="code">function welcome(name){
  console.log("স্বাগতম " + name);
}
welcome("Ali");   // স্বাগতম Ali
welcome("Rahim"); // স্বাগতম Rahim</div>
<div class="note">Parameter = খালি বাক্স &nbsp;|&nbsp; Argument = আসল Value</div>
`},

{id:33, title:"অধ্যায় ৩৪ — Return", html:`
<h2>অধ্যায় ৩৪ — Return</h2>
<div class="code">function add(a, b){
  return a + b;
}
let total = add(20, 30);
console.log(total); // 50</div>
<input id="fa" type="number" placeholder="প্রথম সংখ্যা" class="text-input">
<input id="fb" type="number" placeholder="দ্বিতীয় সংখ্যা" class="text-input" style="margin-top:8px">
<button onclick="functionAdd()">▶ Function দিয়ে যোগ</button>
<div class="output-box" id="functionResult"></div>
`},

{id:34, title:"অধ্যায় ৩৫ — Arrow Function", html:`
<h2>অধ্যায় ৩৫ — Arrow Function</h2>
<p>ES6-এর ছোট ও সুন্দর Function লেখার পদ্ধতি।</p>
<div class="code">// পুরোনো পদ্ধতি
function square(n){ return n * n; }

// Arrow Function
const square2 = (n) => n * n;

console.log(square(5));  // 25
console.log(square2(5)); // 25</div>
<div class="note">() => {} দেখলেই বুঝবে Arrow Function</div>
`},

{id:35, title:"অধ্যায় ৩৬ — Function Quiz", html:`
<h2>অধ্যায় ৩৬ — Function Quiz</h2>
<div class="quiz-box">
  <div class="quiz-q">Function কোন Keyword দিয়ে তৈরি হয়?</div>
  <div class="option" onclick="quiz(this,'wrong')">loop</div>
  <div class="option" onclick="quiz(this,'correct')">function</div>
  <div class="option" onclick="quiz(this,'wrong')">class</div>
  <div class="quiz-result" id="functionQuizResult"></div>
</div>
`},

{id:36, title:"অধ্যায় ৩৭ — Scope", html:`
<h2>অধ্যায় ৩৭ — Scope</h2>
<p>Scope মানে একটি Variable কোথায় ব্যবহার করা যাবে।</p>
<div class="grid-2">
  <div class="card-item">🌍 <b>Global</b><br>সব জায়গা থেকে</div>
  <div class="card-item">⚙️ <b>Function</b><br>শুধু Function-এর ভেতরে</div>
  <div class="card-item">🧱 <b>Block</b><br>শুধু {} এর ভেতরে</div>
</div>
<div class="code">let country = "Bangladesh"; // Global
function show(){
  let city = "Dhaka"; // Function Scope
  console.log(country); // ✅ কাজ করবে
  console.log(city);    // ✅ কাজ করবে
}
// console.log(city); ❌ Error!</div>
`},

{id:37, title:"অধ্যায় ৩৮ — Hoisting", html:`
<h2>অধ্যায় ৩৮ — Hoisting</h2>
<p>JavaScript কোড চালানোর আগেই Variable ও Function Declaration মেমরিতে নিয়ে যায়।</p>
<div class="code">console.log(x); // undefined (Error নয়!)
var x = 10;

// Function Hoisting
sayHi(); // ✅ কাজ করে
function sayHi(){ console.log("Hi!"); }</div>
<div class="note">⚠️ let ও const hoist হয় কিন্তু initialize হয় না।</div>
`},

{id:38, title:"অধ্যায় ৩৯ — Array", html:`
<h2>অধ্যায় ৩৯ — Array</h2>
<p>একটি Variable-এ অনেকগুলো Data রাখার জন্য Array।</p>
<div class="note">🧺 ফলের ঝুড়ি = Array। অনেক ফল একসাথে।</div>
<div class="code">let fruits = ["আম", "কলা", "আপেল", "লিচু"];
console.log(fruits[0]); // আম
console.log(fruits.length); // 4</div>
<button onclick="showArray()">▶ ফল দেখাও</button>
<div class="output-box" id="arrayResult"></div>
`},

{id:39, title:"অধ্যায় ৪০ — Array Methods", html:`
<h2>অধ্যায় ৪০ — Array Methods</h2>
<div class="code">let arr = ["Free Fire", "PUBG"];
arr.push("Minecraft");  // শেষে যোগ
arr.pop();              // শেষটা মুছো
arr.unshift("GTA");     // শুরুতে যোগ
arr.shift();            // প্রথমটা মুছো
console.log(arr);</div>
<div class="quiz-box">
  <div class="quiz-q">Array-এর শেষে নতুন Item যোগ করতে কোন Method?</div>
  <div class="option" onclick="quiz(this,'correct')">push()</div>
  <div class="option" onclick="quiz(this,'wrong')">pop()</div>
  <div class="option" onclick="quiz(this,'wrong')">shift()</div>
  <div class="quiz-result" id="arrayQuizResult"></div>
</div>
`},

{id:40, title:"অধ্যায় ৪১ — for...of Loop", html:`
<h2>অধ্যায় ৪১ — for...of Loop</h2>
<p>Array-এর প্রতিটি Item সহজে পড়ার জন্য।</p>
<div class="code">let fruits = ["আম", "কলা", "আপেল"];
for(let fruit of fruits){
  console.log(fruit);
}</div>
<button onclick="showForOf()">▶ Run করো</button>
<div class="output-box" id="forOfOutput"></div>
`},

{id:41, title:"অধ্যায় ৪২ — Object", html:`
<h2>অধ্যায় ৪২ — Object</h2>
<p>একটি জিনিসের অনেক তথ্য একসাথে রাখার জন্য Object।</p>
<div class="note">🎓 একজন ছাত্রের — নাম, বয়স, ক্লাস, রোল — সব Object-এ রাখা যায়।</div>
<div class="code">let student = {
  name: "Ali",
  age: 20,
  class: "Honours",
  city: "Dhaka"
};
console.log(student.name); // Ali
console.log(student.age);  // 20</div>
<button onclick="showCar()">▶ গাড়ির তথ্য দেখাও</button>
<div class="output-box" id="carResult"></div>
`},

{id:42, title:"অধ্যায় ৪৩ — Object Methods", html:`
<h2>অধ্যায় ৪৩ — Object Methods</h2>
<div class="code">let person = {
  name: "Ali",
  sayHello: function(){
    return "হ্যালো 👋 আমি " + this.name;
  }
};
console.log(person.sayHello());

// Object.keys() — সব Key
let keys = Object.keys(person);
// Object.values() — সব Value
let vals = Object.values(person);</div>
`},

{id:43, title:"অধ্যায় ৪৪ — Object Quiz", html:`
<h2>অধ্যায় ৪৪ — Object Quiz</h2>
<div class="quiz-box">
  <div class="quiz-q">Object-এর Property বের করতে কোন Syntax?</div>
  <div class="option" onclick="quiz(this,'correct')">person.name</div>
  <div class="option" onclick="quiz(this,'wrong')">person=>name</div>
  <div class="option" onclick="quiz(this,'wrong')">person-name</div>
  <div class="quiz-result" id="objectQuizResult"></div>
</div>
`},

{id:44, title:"অধ্যায় ৪৫ — DOM কী?", html:`
<h2>অধ্যায় ৪৫ — DOM কী?</h2>
<p><b>Document Object Model</b> — JavaScript দিয়ে HTML-এর যেকোনো Element খুঁজে বের করে পরিবর্তন করার প্রযুক্তি।</p>
<div class="note">🏠 HTML = বাড়ি &nbsp;|&nbsp; DOM = প্রতিটি রুমের চাবি &nbsp;|&nbsp; JS = চাবি দিয়ে খোলা</div>
<div class="code">// Element খোঁজা
document.getElementById("title");
document.querySelector(".card");
document.querySelectorAll("p");</div>
`},

{id:45, title:"অধ্যায় ৪৬ — DOM Manipulation", html:`
<h2>অধ্যায় ৪৬ — DOM Manipulation</h2>
<div class="code">// লেখা পরিবর্তন
document.getElementById("demo").innerHTML = "নতুন লেখা";

// Style পরিবর্তন
document.getElementById("box").style.color = "red";

// Class যোগ/বাদ
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");</div>
<h3 id="demoText" style="margin-top:12px;padding:12px;background:#f0f0f0;border-radius:10px">আমি পরিবর্তনের অপেক্ষায় আছি 😊</h3>
<button onclick="changeText()">▶ লেখা পরিবর্তন করো</button>
`},

{id:46, title:"অধ্যায় ৪৭ — addEventListener", html:`
<h2>অধ্যায় ৪৭ — addEventListener</h2>
<p>Event যোগ করার সবচেয়ে আধুনিক ও Professional উপায়।</p>
<div class="code">const btn = document.getElementById("myBtn");
btn.addEventListener("click", function(){
  console.log("Button Click হয়েছে!");
});</div>
<button id="eventBtn">👆 আমাকে ক্লিক করো</button>
<div class="output-box" id="eventMessage"></div>
`},

{id:47, title:"অধ্যায় ৪৮ — Input Value", html:`
<h2>অধ্যায় ৪৮ — Input Value নেওয়া</h2>
<input id="studentName" type="text" placeholder="তোমার নাম লিখো" class="text-input">
<button onclick="showName()">▶ দেখাও</button>
<div class="output-box" id="nameResult"></div>
<div class="code">let name = document.getElementById("studentName").value;
console.log("স্বাগতম " + name);</div>
`},

{id:48, title:"অধ্যায় ৪৯ — createElement", html:`
<h2>অধ্যায় ৪৯ — createElement</h2>
<div class="code">let p = document.createElement("p");
p.textContent = "নতুন Paragraph!";
p.style.color = "blue";
document.body.appendChild(p);</div>
<button onclick="createParagraph()">▶ নতুন Element যোগ করো</button>
<div id="newParagraphArea"></div>
`},

{id:49, title:"অধ্যায় ৫০ — DOM Quiz", html:`
<h2>অধ্যায় ৫০ — DOM Quiz</h2>
<div class="quiz-box">
  <div class="quiz-q">HTML Element ID দিয়ে নির্বাচন করতে কোন Method?</div>
  <div class="option" onclick="quiz(this,'correct')">getElementById()</div>
  <div class="option" onclick="quiz(this,'wrong')">queryLoop()</div>
  <div class="option" onclick="quiz(this,'wrong')">selectHtml()</div>
  <div class="quiz-result" id="domQuizResult"></div>
</div>
`},

{id:50, title:"অধ্যায় ৫১ — Template Literal", html:`
<h2>অধ্যায় ৫১ — Template Literal</h2>
<div class="code">let name = "Ali";
let age = 20;
// পুরোনো পদ্ধতি
console.log("আমার নাম " + name + " বয়স " + age);
// Template Literal (ES6)
console.log(&#96;আমার নাম &#36;{name} বয়স &#36;{age}&#96;);</div>
<div class="note">Backtick ব্যবহার করো &#96; এটা। &#36;{ } এর ভেতরে Variable লিখবে।</div>
`},

{id:51, title:"অধ্যায় ৫২ — Math Object", html:`
<h2>অধ্যায় ৫২ — Math Object</h2>
<div class="grid-2">
  <div class="card-item">Math.random()</div>
  <div class="card-item">Math.floor()</div>
  <div class="card-item">Math.ceil()</div>
  <div class="card-item">Math.round()</div>
  <div class="card-item">Math.max()</div>
  <div class="card-item">Math.min()</div>
  <div class="card-item">Math.abs()</div>
  <div class="card-item">Math.sqrt()</div>
</div>
<button onclick="randomNumber()">▶ Random Number</button>
<div class="output-box" id="randomOutput"></div>
`},

{id:52, title:"অধ্যায় ৫৩ — String Methods", html:`
<h2>অধ্যায় ৫৩ — String Methods</h2>
<div class="code">let text = "JavaScript Academy";
console.log(text.length);         // 18
console.log(text.toUpperCase());   // JAVASCRIPT ACADEMY
console.log(text.toLowerCase());   // javascript academy
console.log(text.includes("Java")); // true
console.log(text.replace("Java","Type")); // TypeScript Academy
console.log(text.trim());          // Space মুছে</div>
<input id="lengthInput" type="text" placeholder="কিছু লিখো" class="text-input">
<button onclick="countLength()">▶ Character গণনা</button>
<div class="output-box" id="lengthResult"></div>
`},

{id:53, title:"অধ্যায় ৫৪ — split() ও join()", html:`
<h2>অধ্যায় ৫৪ — split() ও join()</h2>
<div class="code">// split: String → Array
let fruits = "আম,কলা,আপেল";
let arr = fruits.split(",");
console.log(arr); // ["আম", "কলা", "আপেল"]

// join: Array → String
let joined = arr.join(" | ");
console.log(joined); // আম | কলা | আপেল</div>
<button onclick="splitExample()">▶ Split দেখাও</button>
<div class="output-box" id="splitResult"></div>
`},

{id:54, title:"অধ্যায় ৫৫ — Array map()", html:`
<h2>অধ্যায় ৫৫ — Array map()</h2>
<p>Array-এর প্রতিটি Item-এ কাজ করে নতুন Array তৈরি করে।</p>
<div class="code">let numbers = [10, 20, 30, 40];
let result = numbers.map(item => item + 5);
console.log(result); // [15, 25, 35, 45]</div>
<button onclick="mapExample()">▶ Run</button>
<div class="output-box" id="mapResult"></div>
`},

{id:55, title:"অধ্যায় ৫৬ — filter() ও find()", html:`
<h2>অধ্যায় ৫৬ — filter() ও find()</h2>
<div class="code">let ages = [12, 18, 25, 15, 40];

// filter: শর্ত অনুযায়ী নতুন Array
let adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25, 40]

// find: প্রথম মিল পাওয়া Item
let first = ages.find(age => age >= 18);
console.log(first); // 18</div>
<button onclick="filterExample()">▶ Adults List</button>
<div class="output-box" id="filterResult"></div>
`},

{id:56, title:"অধ্যায় ৫৭ — reduce() ও forEach()", html:`
<h2>অধ্যায় ৫৭ — reduce() ও forEach()</h2>
<div class="code">let nums = [10, 20, 30];

// forEach: প্রতিটিতে Loop
nums.forEach((item, i) => {
  console.log(i + ": " + item);
});

// reduce: একটি Final Value বের করো
let total = nums.reduce((sum, item) => sum + item, 0);
console.log(total); // 60</div>
`},

{id:57, title:"অধ্যায় ৫৮ — Date Object", html:`
<h2>অধ্যায় ৫৮ — Date Object</h2>
<div class="code">let now = new Date();
console.log(now.getFullYear()); // বছর
console.log(now.getMonth()+1);  // মাস (0 থেকে শুরু!)
console.log(now.getDate());     // তারিখ
console.log(now.toLocaleTimeString()); // সময়</div>
<button onclick="showDateTime()">▶ বর্তমান সময় দেখাও</button>
<div class="output-box" id="dateResult"></div>
`},

{id:58, title:"অধ্যায় ৫৯ — JSON", html:`
<h2>অধ্যায় ৫৯ — JSON</h2>
<p><b>JavaScript Object Notation</b> — Data আদান-প্রদানের সবচেয়ে জনপ্রিয় Format।</p>
<div class="code">// Object → JSON String
let user = { name: "Ali", age: 20 };
let jsonStr = JSON.stringify(user);
console.log(jsonStr); // {"name":"Ali","age":20}

// JSON String → Object
let obj = JSON.parse(jsonStr);
console.log(obj.name); // Ali</div>
<button onclick="parseExample()">▶ Run Example</button>
<div class="output-box" id="parseResult"></div>
`},

{id:59, title:"অধ্যায় ৬০ — localStorage", html:`
<h2>অধ্যায় ৬০ — localStorage</h2>
<p>Browser-এ Data সংরক্ষণ করো — Browser বন্ধ করলেও থাকে।</p>
<div class="code">localStorage.setItem("name", "Ali");
let name = localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();</div>
<input id="saveNameInput" type="text" placeholder="তোমার নাম লিখো" class="text-input">
<button onclick="saveName()">💾 Save</button>
<button onclick="loadName()" style="background:#34c759">📂 Load</button>
<div class="output-box" id="saveResult"></div>
`},

{id:60, title:"অধ্যায় ৬১ — setTimeout", html:`
<h2>অধ্যায় ৬১ — setTimeout</h2>
<p>নির্দিষ্ট সময় পরে একবার Code চালায়।</p>
<div class="note">🍜 Maggi Timer = setTimeout। ২ মিনিট পরে বাজে।</div>
<div class="code">setTimeout(function(){
  console.log("২ সেকেন্ড পরে চললাম!");
}, 2000);</div>
<button onclick="timeoutDemo()">▶ Run setTimeout</button>
<div class="output-box" id="timeoutResult"></div>
`},

{id:61, title:"অধ্যায় ৬২ — setInterval", html:`
<h2>অধ্যায় ৬২ — setInterval</h2>
<p>প্রতি নির্দিষ্ট সময় পরে বারবার Code চালায়।</p>
<div class="note">⏰ দেয়ালের ঘড়ি = setInterval। প্রতি সেকেন্ডে Tick।</div>
<div class="code">let id = setInterval(function(){
  console.log("Tick!");
}, 1000);
// বন্ধ করতে:
clearInterval(id);</div>
<button onclick="intervalDemo()">▶ Start</button>
<button onclick="stopInterval()" style="background:#ff3b30">⏹ Stop</button>
<div class="output-box" id="intervalResult"></div>
`},

{id:62, title:"অধ্যায় ৬৩ — try...catch", html:`
<h2>অধ্যায় ৬৩ — try...catch</h2>
<p>Error হলেও Program বন্ধ না হয়।</p>
<div class="code">try {
  console.log(unknownVar); // Error হবে
} catch(error) {
  console.log("Error ধরা পড়েছে: " + error.message);
} finally {
  console.log("সবসময় চলে");
}</div>
<button onclick="tryCatchDemo()">▶ Run</button>
<div class="output-box" id="tryResult"></div>
`},

{id:63, title:"অধ্যায় ৬৪ — Promise", html:`
<h2>অধ্যায় ৬৪ — Promise</h2>
<p>ভবিষ্যতে কাজ সফল বা ব্যর্থ হবে — তা জানানোর Object।</p>
<div class="note">🍕 Pizza Order = Promise। আসলে Resolve, না আসলে Reject।</div>
<div class="code">let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("কাজ সফল! ✅"), 1500);
});
promise.then(result => console.log(result))
       .catch(err => console.log(err));</div>
<button onclick="promiseSuccess()">▶ Success Promise</button>
<button onclick="promiseFail()" style="background:#ff3b30">▶ Fail Promise</button>
<div class="output-box" id="promiseResult"></div>
`},

{id:64, title:"অধ্যায় ৬৫ — async/await", html:`
<h2>অধ্যায় ৬৫ — async/await</h2>
<p>Promise-এর সবচেয়ে সুন্দর লেখার পদ্ধতি।</p>
<div class="code">async function getData(){
  try {
    let result = await Promise.resolve("Data এসে গেছে ✅");
    console.log(result);
  } catch(err){
    console.log(err);
  }
}</div>
<button onclick="asyncDemo()">▶ Run Async</button>
<div class="output-box" id="asyncResult"></div>
`},

{id:65, title:"অধ্যায় ৬৬ — Fetch API", html:`
<h2>অধ্যায় ৬৬ — Fetch API</h2>
<p>Server থেকে Data আনার জন্য।</p>
<div class="note">🧑‍🍳 API = Waiter। তুমি Order করো, Kitchen থেকে খাবার আনে।</div>
<div class="code">async function getUser(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  console.log(data.name);
}</div>
<button onclick="fetchUser()">▶ User Load করো</button>
<div class="output-box" id="fetchResult"></div>
`},

{id:66, title:"অধ্যায় ৬৭ — ES6 Features", html:`
<h2>অধ্যায় ৬৭ — ES6 Features</h2>
<div class="grid-2">
  <div class="card-item">let / const</div>
  <div class="card-item">Arrow Function</div>
  <div class="card-item">Template Literal</div>
  <div class="card-item">Destructuring</div>
  <div class="card-item">Spread ...</div>
  <div class="card-item">Rest ...</div>
  <div class="card-item">Default Param</div>
  <div class="card-item">Class</div>
  <div class="card-item">Promise</div>
  <div class="card-item">import/export</div>
</div>
`},

{id:67, title:"অধ্যায় ৬৮ — Destructuring", html:`
<h2>অধ্যায় ৬৮ — Destructuring</h2>
<div class="code">// Object Destructuring
const student = { name: "Ali", age: 20, city: "Dhaka" };
const { name, age } = student;
console.log(name); // Ali
console.log(age);  // 20

// Array Destructuring
const [a, b, c] = [10, 20, 30];
console.log(a); // 10</div>
`},

{id:68, title:"অধ্যায় ৬৯ — Spread Operator", html:`
<h2>অধ্যায় ৬৯ — Spread Operator (...)</h2>
<div class="code">// Array Spread
const fruits = ["আম", "কলা"];
const all = [...fruits, "আপেল", "লিচু"];
console.log(all);

// Object Spread
const user = { name: "Ali" };
const newUser = { ...user, age: 20 };
console.log(newUser);</div>
<button onclick="spreadDemo()">▶ Run Spread</button>
<div class="output-box" id="spreadResult"></div>
`},

{id:69, title:"অধ্যায় ৭০ — Default Parameter", html:`
<h2>অধ্যায় ৭০ — Default Parameter</h2>
<div class="code">function welcome(name = "Guest"){
  return "স্বাগতম " + name;
}
console.log(welcome());      // স্বাগতম Guest
console.log(welcome("Ali")); // স্বাগতম Ali</div>
<button onclick="defaultDemo()">▶ Run</button>
<div class="output-box" id="defaultResult"></div>
`},

{id:70, title:"অধ্যায় ৭১ — Class ও OOP", html:`
<h2>অধ্যায় ৭১ — Class ও OOP</h2>
<p>একই ধরনের অনেক Object তৈরির Blueprint।</p>
<div class="note">🏠 Blueprint = Class। এক Blueprint থেকে ১০০ বাড়ি বানাও।</div>
<div class="code">class Student {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  introduce(){
    return \`আমি \${this.name}, বয়স \${this.age}\`;
  }
}
const s1 = new Student("Ali", 20);
console.log(s1.introduce());</div>
<button onclick="classDemo()">▶ Run Class</button>
<div class="output-box" id="classResult"></div>
`},

{id:71, title:"অধ্যায় ৭২ — Inheritance", html:`
<h2>অধ্যায় ৭২ — Inheritance (উত্তরাধিকার)</h2>
<div class="code">class Animal {
  sound(){ return "Sound..."; }
}
class Dog extends Animal {
  sound(){ return "Woof! 🐕"; }
}
class Cat extends Animal {
  sound(){ return "Meow! 🐱"; }
}
const dog = new Dog();
console.log(dog.sound()); // Woof!</div>
<div class="note">extends keyword দিয়ে Parent Class-এর সব পাওয়া যায়।</div>
`},

{id:72, title:"অধ্যায় ৭৩ — Regular Expression", html:`
<h2>অধ্যায় ৭৩ — Regular Expression (Regex)</h2>
<p>Text খোঁজা, মেলানো ও পরিবর্তনের জন্য বিশেষ Pattern।</p>
<div class="code">// Email Check
const email = "student@gmail.com";
const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
console.log(ok); // true

// Replace
let text = "cat cat cat";
let result = text.replace(/cat/g, "dog");
console.log(result); // dog dog dog</div>
<input id="emailInput" type="text" placeholder="Email লিখো" class="text-input">
<button onclick="checkEmail()">▶ Email Check</button>
<div class="output-box" id="emailResult"></div>
`},

{id:73, title:"অধ্যায় ৭৪ — Error Types", html:`
<h2>অধ্যায় ৭৪ — Error Types</h2>
<div class="grid-2">
  <div class="card-item">❌ <b>SyntaxError</b><br>কোড লেখার নিয়ম ভাঙা</div>
  <div class="card-item">❌ <b>ReferenceError</b><br>নেই এমন Variable</div>
  <div class="card-item">❌ <b>TypeError</b><br>ভুল Type-এ কাজ</div>
  <div class="card-item">❌ <b>RangeError</b><br>সীমার বাইরে মান</div>
</div>
<button onclick="referenceDemo()">▶ Error Demo</button>
<div class="output-box" id="referenceResult"></div>
`},

{id:74, title:"অধ্যায় ৭৫ — Closure", html:`
<h2>অধ্যায় ৭৫ — Closure</h2>
<p>Inner Function তার Outer Function-এর Variable মনে রাখে — Outer শেষ হলেও।</p>
<div class="code">function outer(){
  let count = 0;
  return function(){
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3</div>
<button onclick="closureDemo()">▶ Closure Demo</button>
<div class="output-box" id="closureResult"></div>
`},

{id:75, title:"অধ্যায় ৭৬ — this Keyword", html:`
<h2>অধ্যায় ৭৬ — this Keyword</h2>
<p>this সাধারণত "বর্তমান Object"-কে নির্দেশ করে।</p>
<div class="code">const student = {
  name: "Ali",
  show(){
    console.log(this.name); // Ali
  }
};
student.show();</div>
<div class="note">⚠️ Arrow Function-এর নিজস্ব this নেই। Interview-তে খুব জনপ্রিয় প্রশ্ন।</div>
`},

{id:76, title:"অধ্যায় ৭৭ — Event Bubbling", html:`
<h2>অধ্যায় ৭৭ — Event Bubbling</h2>
<p>Event প্রথমে Child-এ ঘটে, তারপর Parent-এর দিকে ওঠে।</p>
<div class="note">🫧 পানির বুদবুদ নিচ থেকে উপরে ওঠে = Event Bubbling</div>
<div class="code">// Bubbling বন্ধ করো
element.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Default বন্ধ করো
form.addEventListener("submit", (e) => {
  e.preventDefault();
});</div>
`},

{id:77, title:"অধ্যায় ৭৮ — Optional Chaining ও Nullish", html:`
<h2>অধ্যায় ৭৮ — Modern JS Operators</h2>
<div class="code">// Optional Chaining (?.)
const user = { name: "Ali" };
console.log(user.address?.city); // undefined (Error নয়!)

// Nullish Coalescing (??)
let username = null;
console.log(username ?? "Guest"); // Guest

// ?? vs ||
console.log(0 ?? "default");  // 0
console.log(0 || "default");  // "default"</div>
<button onclick="optionalDemo()">▶ Run Demo</button>
<div class="output-box" id="optionalResult"></div>
`},

{id:78, title:"অধ্যায় ৭৯ — Memory: Stack ও Heap", html:`
<h2>অধ্যায় ৭৯ — Memory: Stack ও Heap</h2>
<div class="code">// Stack (Primitive) - Copy হয়
let a = 10;
let b = a;
b = 99;
console.log(a); // 10 (অপরিবর্তিত)

// Heap (Object) - Reference শেয়ার হয়
let obj1 = { name: "Ali" };
let obj2 = obj1;
obj2.name = "Rahim";
console.log(obj1.name); // Rahim! ⚠️</div>
<button onclick="memoryDemo()">▶ Demo</button>
<div class="output-box" id="memoryResult"></div>
`},

{id:79, title:"অধ্যায় ৮০ — Event Loop", html:`
<h2>অধ্যায় ৮০ — Event Loop</h2>
<p>JavaScript কীভাবে Async কাজ করে — এটাই Event Loop।</p>
<div class="code">console.log("A"); // 1st
setTimeout(() => {
  console.log("B"); // 3rd (Callback Queue)
}, 0);
Promise.resolve().then(() => {
  console.log("Promise"); // 2nd (Microtask Queue)
});
console.log("C"); // সাথে সাথে</div>
<button onclick="engineDemo()">▶ Engine Demo</button>
<div class="output-box" id="engineResult"></div>
`},

{id:80, title:"অধ্যায় ৮১ — Modules", html:`
<h2>অধ্যায় ৮১ — JavaScript Modules</h2>
<p>বড় Project-এ Code ছোট ছোট File-এ ভাগ করা হয়।</p>
<div class="code">// math.js
export const pi = 3.1416;
export function add(a,b){ return a+b; }

// app.js
import { pi, add } from "./math.js";
console.log(pi);      // 3.1416
console.log(add(2,3)); // 5</div>
<div class="note">&lt;script type="module"&gt; ব্যবহার করতে হয়।</div>
`},

{id:81, title:"অধ্যায় ৮২ — Recursion", html:`
<h2>অধ্যায় ৮২ — Recursion</h2>
<p>Function নিজেকেই আবার Call করে — কিন্তু Stopping Condition থাকতে হবে।</p>
<div class="code">function countdown(n){
  if(n === 0){
    console.log("🚀 Go!");
    return;
  }
  console.log(n);
  countdown(n - 1); // নিজেকেই ডাকছে
}
countdown(5);</div>
<button onclick="recursiveProject()">▶ Run</button>
<div class="output-box" id="recursiveResult"></div>
`},

{id:82, title:"অধ্যায় ৮৩ — Mini Project: To-Do App", html:`
<h2>অধ্যায় ৮৩ — Mini Project: To-Do App 📝</h2>
<input id="todoInput" type="text" placeholder="নতুন Task লিখো" class="text-input">
<button onclick="addTodo()">➕ যোগ করো</button>
<div id="todoList" style="margin-top:12px"></div>
`},

{id:83, title:"অধ্যায় ৮৪ — Mini Project: Calculator", html:`
<h2>অধ্যায় ৮৪ — Mini Project: Calculator 🧮</h2>
<input id="c1" type="number" placeholder="সংখ্যা ১" class="text-input">
<input id="c2" type="number" placeholder="সংখ্যা ২" class="text-input" style="margin-top:8px">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
  <button onclick="calc('+')">➕</button>
  <button onclick="calc('-')" style="background:#ff9500">➖</button>
  <button onclick="calc('*')" style="background:#34c759">✖️</button>
  <button onclick="calc('/')" style="background:#af52de">➗</button>
</div>
<div class="output-box" id="calcResult"></div>
`},

{id:84, title:"অধ্যায় ৮৫ — Mini Project: Quiz App", html:`
<h2>অধ্যায় ৮৫ — Mini Project: Quiz App 🎯</h2>
<div id="quizApp">
  <div class="quiz-box">
    <div class="quiz-q" id="qText">JavaScript-এ Variable রাখার keyword কোনটি?</div>
    <div class="option" onclick="quizApp(this, true)">let</div>
    <div class="option" onclick="quizApp(this, false)">print</div>
    <div class="option" onclick="quizApp(this, false)">show</div>
    <div class="quiz-result" id="qaResult"></div>
  </div>
</div>
`},

{id:85, title:"অধ্যায় ৮৬ — Mini Project: Password Generator", html:`
<h2>অধ্যায় ৮৬ — Password Generator 🔐</h2>
<input id="passLen" type="number" value="12" placeholder="Length" class="text-input">
<button onclick="generatePassword()">🔑 Generate</button>
<div class="output-box" id="passResult"></div>
`},

{id:86, title:"অধ্যায় ৮৭ — Mini Project: Digital Clock", html:`
<h2>অধ্যায় ৮৭ — Digital Clock ⏰</h2>
<div id="clockDisplay" style="font-size:36px;font-weight:900;text-align:center;padding:20px;background:linear-gradient(135deg,#007aff,#5856d6);color:white;border-radius:16px;margin:12px 0;letter-spacing:2px">00:00:00</div>
<button onclick="startClock()" id="clockBtn">▶ Clock চালু করো</button>
`},

{id:87, title:"অধ্যায় ৮৮ — Mini Project: Random Quote", html:`
<h2>অধ্যায় ৮৮ — Random Motivational Quote 💡</h2>
<button onclick="showQuote()">🎲 নতুন Quote</button>
<div class="output-box" id="quoteResult" style="font-size:16px;font-style:italic;line-height:1.7"></div>
`},

{id:88, title:"অধ্যায় ৮৯ — Form Validation", html:`
<h2>অধ্যায় ৮৯ — Form Validation ✅</h2>
<input id="username" type="text" placeholder="Username (৪+ অক্ষর)" class="text-input">
<input id="userpassword" type="password" placeholder="Password (৮+ অক্ষর)" class="text-input" style="margin-top:8px">
<input id="useremail" type="text" placeholder="Email" class="text-input" style="margin-top:8px">
<button onclick="validateForm()">▶ Validate</button>
<div class="output-box" id="loginResult"></div>
`},

{id:89, title:"অধ্যায় ৯০ — Window ও Navigator", html:`
<h2>অধ্যায় ৯০ — BOM: Window ও Navigator</h2>
<div class="code">// Window Object
console.log(window.innerWidth);
console.log(window.innerHeight);
// Navigator
console.log(navigator.language);
console.log(navigator.userAgent);</div>
<button onclick="showWindowInfo()">▶ Browser Info</button>
<div class="output-box" id="windowInfo"></div>
`},

{id:90, title:"অধ্যায় ৯১ — sessionStorage", html:`
<h2>অধ্যায় ৯১ — sessionStorage</h2>
<p>Tab বন্ধ করলে Data মুছে যায়।</p>
<div class="code">sessionStorage.setItem("course", "JavaScript");
let c = sessionStorage.getItem("course");
console.log(c);</div>
<button onclick="saveSession()">💾 Session Save</button>
<button onclick="loadSession()" style="background:#34c759">📂 Session Load</button>
<div class="output-box" id="sessionResult"></div>
`},

{id:91, title:"অধ্যায় ৯২ — Keyboard ও Mouse Events", html:`
<h2>অধ্যায় ৯২ — Keyboard ও Mouse Events</h2>
<input id="keyboardInput" type="text" placeholder="এখানে টাইপ করো..." class="text-input">
<div class="output-box" id="keyboardResult" style="margin-top:8px">টাইপ শুরু করো...</div>
<div id="mouseBox" style="margin-top:12px;padding:24px;background:#f0f0f5;border-radius:14px;text-align:center;font-size:22px;cursor:pointer;transition:.2s">🖱️ Mouse নিয়ে আসো</div>
<div class="output-box" id="mouseResult" style="margin-top:8px"></div>
`},

{id:92, title:"অধ্যায় ৯৩ — Live Character Counter", html:`
<h2>অধ্যায় ৯৩ — Live Character Counter ✍️</h2>
<textarea id="liveText" placeholder="এখানে লিখো..." rows="4" style="width:100%;padding:14px;border-radius:12px;border:2px solid #ddd;font-size:15px;font-family:inherit;resize:vertical"></textarea>
<div class="output-box" id="charCount">Character: 0 | Word: 0</div>
`},

{id:93, title:"অধ্যায় ৯৪ — Theme Switcher", html:`
<h2>অধ্যায় ৯৪ — Theme Switcher 🌙</h2>
<p>Preference localStorage-এ Save হবে।</p>
<button onclick="saveTheme('dark')" style="background:#1c1c1e">🌙 Dark Mode</button>
<button onclick="saveTheme('light')" style="background:#34c759">☀️ Light Mode</button>
<button onclick="loadTheme()" style="background:#af52de">📂 Load Theme</button>
<div class="output-box" id="themeResult"></div>
`},

{id:94, title:"অধ্যায় ৯৫ — Countdown Timer", html:`
<h2>অধ্যায় ৯৫ — Countdown Timer ⏳</h2>
<input id="countInput" type="number" value="10" placeholder="কত সেকেন্ড?" class="text-input">
<button onclick="countdown()">▶ Start</button>
<button onclick="stopCountdown()" style="background:#ff3b30">⏹ Stop</button>
<div class="output-box" id="countdownResult" style="font-size:28px;font-weight:800;text-align:center"></div>
`},

{id:95, title:"অধ্যায় ৯৬ — Random User Fetch", html:`
<h2>অধ্যায় ৯৬ — API: Random User Fetch 🌍</h2>
<p>Internet থেকে Real User Data আনো।</p>
<button onclick="randomUser()">👤 Load User</button>
<div class="output-box" id="userResult"></div>
`},

{id:96, title:"অধ্যায় ৯৭ — Hoisting Deep Dive", html:`
<h2>অধ্যায় ৯৭ — Hoisting Deep Dive</h2>
<div class="code">// var হয় hoist
console.log(a); // undefined
var a = 5;

// let/const hoist হয় কিন্তু...
// console.log(b); // ❌ ReferenceError
let b = 10;

// Function Declaration hoist হয়
hello(); // ✅ কাজ করে
function hello(){ console.log("Hi!"); }

// Function Expression হয় না
// bye(); ❌ Error
const bye = function(){ console.log("Bye!"); }</div>
`},

{id:97, title:"অধ্যায় ৯৮ — Call Stack Deep Dive", html:`
<h2>অধ্যায় ৯৮ — Call Stack</h2>
<p>LIFO — শেষে ঢোকা Function আগে বের হয়।</p>
<div class="code">function c(){ console.log("C"); }
function b(){ c(); console.log("B"); }
function a(){ b(); console.log("A"); }
a();
// Output: C → B → A</div>
<div class="note">📚 বই রাখার মতো। উপরের বইটাই আগে বের হয়।</div>
`},

{id:98, title:"অধ্যায় ৯৯ — Pure vs Impure Function", html:`
<h2>অধ্যায় ৯৯ — Pure ও Impure Function</h2>
<div class="code">// Pure Function — same input, same output
function add(a, b){ return a + b; }

// Impure — বাইরের কিছু পরিবর্তন করে
let total = 0;
function addToTotal(n){ total += n; } // Impure!</div>
<div class="note">✅ Pure Function লেখার অভ্যাস করো। Debug সহজ হয়।</div>
`},

{id:99, title:"অধ্যায় ১০০ — Callback Function", html:`
<h2>অধ্যায় ১০০ — Callback Function 🎉</h2>
<p>Function-কে অন্য Function-এ argument হিসেবে পাঠানো।</p>
<div class="code">function greet(name, callback){
  console.log("হ্যালো " + name);
  callback();
}
function done(){
  console.log("✅ কাজ শেষ!");
}
greet("Ali", done);</div>
<div class="note">Callback = "এই কাজটা শেষ হলে এটা করো।"</div>
`},

{id:100, title:"অধ্যায় ১০১ — Promise Chain", html:`
<h2>অধ্যায় ১০১ — Promise Chain</h2>
<div class="code">fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.json())
  .then(data => {
    console.log(data.title);
    return data.userId;
  })
  .then(id => console.log("User ID: " + id))
  .catch(err => console.log("Error: " + err));</div>
`},

{id:101, title:"অধ্যায় ১০২ — Promise.all()", html:`
<h2>অধ্যায় ১০২ — Promise.all() ও Promise.race()</h2>
<div class="code">// Promise.all — সব শেষ হলে
const p1 = Promise.resolve("Result 1");
const p2 = Promise.resolve("Result 2");
Promise.all([p1, p2]).then(results => {
  console.log(results); // ["Result 1", "Result 2"]
});

// Promise.race — যে আগে শেষ করে
Promise.race([p1, p2]).then(first => {
  console.log(first); // "Result 1"
});</div>
`},

{id:102, title:"অধ্যায় ১০৩ — Error Handling Best Practices", html:`
<h2>অধ্যায় ১০৩ — Error Handling Best Practices</h2>
<div class="code">// Custom Error
class ValidationError extends Error {
  constructor(message){
    super(message);
    this.name = "ValidationError";
  }
}

async function getUser(id){
  if(!id) throw new ValidationError("ID দাও!");
  const res = await fetch(\`/api/user/\${id}\`);
  if(!res.ok) throw new Error("User পাওয়া যায়নি");
  return res.json();
}</div>
`},

{id:103, title:"অধ্যায় ১০৪ — WeakMap ও WeakSet", html:`
<h2>অধ্যায় ১০৪ — Map, Set, WeakMap, WeakSet</h2>
<div class="code">// Map — key যেকোনো type হতে পারে
const map = new Map();
map.set("name", "Ali");
map.set(42, "number key");
console.log(map.get("name")); // Ali

// Set — unique values only
const set = new Set([1, 2, 3, 2, 1]);
console.log([...set]); // [1, 2, 3]</div>
`},

{id:104, title:"অধ্যায় ১০৫ — Generator Function", html:`
<h2>অধ্যায় ১০৫ — Generator Function</h2>
<div class="code">function* counter(){
  yield 1;
  yield 2;
  yield 3;
}
const gen = counter();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3</div>
<div class="note">function* এবং yield দেখলে Generator বুঝবে।</div>
`},

{id:105, title:"অধ্যায় ১০৬ — Symbol", html:`
<h2>অধ্যায় ১০৬ — Symbol</h2>
<div class="code">const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false! সবসময় unique

const obj = {
  [id1]: "প্রথম",
  name: "Ali"
};
console.log(obj[id1]); // প্রথম</div>
<div class="note">Symbol সবসময় Unique। Object-এর hidden property হিসেবে ব্যবহার।</div>
`},

{id:106, title:"অধ্যায় ১০৭ — Proxy ও Reflect", html:`
<h2>অধ্যায় ১০৭ — Proxy ও Reflect</h2>
<div class="code">const user = { name: "Ali", age: 20 };
const proxy = new Proxy(user, {
  get(target, key){
    console.log(\`\${key} পড়া হচ্ছে\`);
    return target[key];
  },
  set(target, key, value){
    console.log(\`\${key} = \${value} সেট হচ্ছে\`);
    target[key] = value;
    return true;
  }
});
proxy.name; // "name পড়া হচ্ছে"
proxy.age = 25; // "age = 25 সেট হচ্ছে"</div>
`},

{id:107, title:"অধ্যায় ১০৮ — Iterators", html:`
<h2>অধ্যায় ১০৮ — Iterators ও Iterables</h2>
<div class="code">// Custom Iterator
function range(start, end){
  return {
    [Symbol.iterator](){
      let current = start;
      return {
        next(){
          if(current <= end)
            return { value: current++, done: false };
          return { done: true };
        }
      };
    }
  };
}
for(let num of range(1, 5)){
  console.log(num); // 1 2 3 4 5
}</div>
`},

{id:108, title:"অধ্যায় ১০৯ — Async Iterator", html:`
<h2>অধ্যায় ১০৯ — Async Iteration</h2>
<div class="code">async function* asyncRange(start, end){
  for(let i = start; i <= end; i++){
    await new Promise(r => setTimeout(r, 100));
    yield i;
  }
}

async function run(){
  for await(let num of asyncRange(1, 5)){
    console.log(num);
  }
}
run();</div>
`},

{id:109, title:"অধ্যায় ১১০ — Memoization", html:`
<h2>অধ্যায় ১১০ — Memoization (Performance)</h2>
<div class="code">function memoize(fn){
  const cache = {};
  return function(...args){
    const key = JSON.stringify(args);
    if(cache[key]) {
      console.log("Cache থেকে নেওয়া হলো");
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

const expensiveFn = memoize((n) => {
  return n * n;
});
console.log(expensiveFn(5)); // গণনা হলো
console.log(expensiveFn(5)); // Cache থেকে</div>
`},

{id:110, title:"অধ্যায় ১১১ — Debounce ও Throttle", html:`
<h2>অধ্যায় ১১১ — Debounce ও Throttle</h2>
<p>Performance optimization-এর জন্য।</p>
<div class="code">// Debounce — শেষ call-এর পরে নির্দিষ্ট সময় অপেক্ষা করে
function debounce(fn, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
// Search box-এ ব্যবহার
const search = debounce((q) => {
  console.log("Searching: " + q);
}, 300);</div>
<input type="text" class="text-input" placeholder="টাইপ করো (debounced)" oninput="debounceSearch(this.value)">
<div class="output-box" id="debounceResult"></div>
`},

{id:111, title:"অধ্যায় ১১২ — Design Patterns", html:`
<h2>অধ্যায় ১১২ — Design Patterns</h2>
<div class="code">// Singleton Pattern
class Singleton {
  static instance = null;
  static getInstance(){
    if(!Singleton.instance)
      Singleton.instance = new Singleton();
    return Singleton.instance;
  }
}

// Observer Pattern
class EventEmitter {
  constructor(){ this.events = {}; }
  on(event, fn){ 
    (this.events[event] = this.events[event] || []).push(fn); 
  }
  emit(event, data){ 
    (this.events[event] || []).forEach(fn => fn(data)); 
  }
}</div>
`},

{id:112, title:"অধ্যায় ১১৩ — Mini Project: Notes App", html:`
<h2>অধ্যায় ১১৩ — Notes App 📓</h2>
<input id="noteTitle" type="text" placeholder="Note-এর শিরোনাম" class="text-input">
<textarea id="noteBody" placeholder="Note লিখো..." rows="3" style="width:100%;margin-top:8px;padding:12px;border-radius:12px;border:2px solid #ddd;font-size:14px;font-family:inherit;resize:vertical"></textarea>
<button onclick="addNote()">➕ Note Save করো</button>
<div id="notesList" style="margin-top:12px"></div>
`},

{id:113, title:"অধ্যায় ১১৪ — Mini Project: BMI Calculator", html:`
<h2>অধ্যায় ১১৪ — BMI Calculator ⚖️</h2>
<input id="weight" type="number" placeholder="ওজন (kg)" class="text-input">
<input id="height" type="number" placeholder="উচ্চতা (cm)" class="text-input" style="margin-top:8px">
<button onclick="calcBMI()">▶ BMI হিসাব করো</button>
<div class="output-box" id="bmiResult"></div>
`},

{id:114, title:"অধ্যায় ১১৫ — Mini Project: Currency Converter", html:`
<h2>অধ্যায় ১১৫ — Currency Converter 💰</h2>
<input id="bdtAmount" type="number" placeholder="BDT পরিমাণ" class="text-input">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
  <button onclick="convertCurrency('USD')">→ USD</button>
  <button onclick="convertCurrency('EUR')" style="background:#ff9500">→ EUR</button>
  <button onclick="convertCurrency('INR')" style="background:#34c759">→ INR</button>
  <button onclick="convertCurrency('GBP')" style="background:#af52de">→ GBP</button>
</div>
<div class="output-box" id="currencyResult"></div>
`},

{id:115, title:"অধ্যায় ১১৬ — Mini Project: Rock Paper Scissors", html:`
<h2>অধ্যায় ১১৬ — Rock Paper Scissors ✌️</h2>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:12px 0">
  <button onclick="playRPS('rock')" style="font-size:24px;padding:16px">🪨</button>
  <button onclick="playRPS('paper')" style="font-size:24px;padding:16px;background:#34c759">📄</button>
  <button onclick="playRPS('scissors')" style="font-size:24px;padding:16px;background:#ff9500">✂️</button>
</div>
<div class="output-box" id="rpsResult"></div>
`},

{id:116, title:"অধ্যায় ১১৭ — Mini Project: Word Counter", html:`
<h2>অধ্যায় ১১৭ — Word Counter 📝</h2>
<textarea id="wordText" placeholder="এখানে লিখো..." rows="4" style="width:100%;padding:14px;border-radius:12px;border:2px solid #ddd;font-size:15px;font-family:inherit;resize:vertical"></textarea>
<button onclick="countWords()">▶ বিশ্লেষণ করো</button>
<div class="output-box" id="wordResult"></div>
`},

{id:117, title:"অধ্যায় ১১৮ — Mini Project: Color Picker", html:`
<h2>অধ্যায় ১১৮ — Color Picker 🎨</h2>
<button onclick="randomColor()">🎲 Random Color</button>
<div id="colorBox" style="height:80px;border-radius:14px;margin:12px 0;background:#007aff;transition:.3s;display:flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:18px">#007aff</div>
<div id="colorPalette" style="display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-top:8px"></div>
`},

{id:118, title:"অধ্যায় ১১৯ — Mini Project: Typing Speed Test", html:`
<h2>অধ্যায় ১১৯ — Typing Speed Test ⌨️</h2>
<div id="typingTarget" class="note" style="font-size:14px;line-height:1.8">শুরু করতে নিচে টাইপ করো...</div>
<textarea id="typingInput" placeholder="এখানে টাইপ করো..." rows="3" style="width:100%;margin-top:8px;padding:12px;border-radius:12px;border:2px solid #ddd;font-size:14px;font-family:inherit;resize:none" oninput="checkTyping()" onfocus="startTypingTest()"></textarea>
<div class="output-box" id="typingResult"></div>
`},

{id:119, title:"অধ্যায় ১২০ — Mini Project: Number Guessing Game", html:`
<h2>অধ্যায় ১২০ — Number Guessing Game 🎮</h2>
<p id="guessHint">১ থেকে ১০০-এর মধ্যে একটি সংখ্যা ভাবছি...</p>
<input id="guessInput" type="number" placeholder="তোমার guess" class="text-input" min="1" max="100">
<button onclick="makeGuess()">▶ Guess করো</button>
<button onclick="newGame()" style="background:#34c759">🔄 নতুন খেলা</button>
<div class="output-box" id="guessResult"></div>
`},

{id:120, title:"অধ্যায় ১২১ — Webpack ও Bundlers", html:`
<h2>অধ্যায় ১২১ — Bundlers (Webpack, Vite)</h2>
<p>Real Project-এ অনেক JS file একসাথে bundle করা হয়।</p>
<div class="grid-2">
  <div class="card-item">📦 <b>Webpack</b><br>সবচেয়ে জনপ্রিয়</div>
  <div class="card-item">⚡ <b>Vite</b><br>সবচেয়ে দ্রুত</div>
  <div class="card-item">🔧 <b>Parcel</b><br>Zero config</div>
  <div class="card-item">🛠️ <b>Rollup</b><br>Library-র জন্য</div>
</div>
<div class="code">// Vite দিয়ে শুরু করা
npm create vite@latest my-app
cd my-app
npm install
npm run dev</div>
`},

{id:121, title:"অধ্যায় ১২২ — npm ও package.json", html:`
<h2>অধ্যায় ১২২ — npm ও package.json</h2>
<div class="code">// npm (Node Package Manager)
npm init -y           // নতুন project শুরু
npm install lodash    // package install
npm install -D jest   // dev dependency

// package.json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "test": "jest"
  }
}</div>
`},

{id:122, title:"অধ্যায় ১২৩ — Node.js পরিচিতি", html:`
<h2>অধ্যায় ১২৩ — Node.js পরিচিতি</h2>
<p>Browser ছাড়া JavaScript চালানোর জন্য Node.js।</p>
<div class="grid-2">
  <div class="card-item">🖥️ Server-side JS</div>
  <div class="card-item">📁 File System</div>
  <div class="card-item">🌐 HTTP Server</div>
  <div class="card-item">🗄️ Database</div>
</div>
<div class="code">// Basic HTTP Server
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello World!');
});
server.listen(3000, () => {
  console.log('Server চলছে port 3000-এ');
});</div>
`},

{id:123, title:"অধ্যায় ১২৪ — React পরিচিতি", html:`
<h2>অধ্যায় ১২৪ — React পরিচিতি ⚛️</h2>
<p>JavaScript-এর সবচেয়ে জনপ্রিয় UI Library।</p>
<div class="code">// React Component
function Welcome({ name }){
  return &lt;h1&gt;হ্যালো, {name}!&lt;/h1&gt;;
}

// useState Hook
import { useState } from 'react';
function Counter(){
  const [count, setCount] = useState(0);
  return (
    &lt;button onClick={() => setCount(count + 1)}&gt;
      Count: {count}
    &lt;/button&gt;
  );
}</div>
<div class="note">React শিখতে হলে আগে JavaScript ভালোভাবে জানতে হবে — তুমি সেই পথেই আছো! 🚀</div>
`},

{id:124, title:"অধ্যায় ১২৫ — TypeScript পরিচিতি", html:`
<h2>অধ্যায় ১২৫ — TypeScript পরিচিতি 🔷</h2>
<p>JavaScript + Type Safety = TypeScript।</p>
<div class="code">// TypeScript
function greet(name: string): string {
  return "হ্যালো " + name;
}

interface Student {
  name: string;
  age: number;
  isActive: boolean;
}

const student: Student = {
  name: "Ali",
  age: 20,
  isActive: true
};</div>
<div class="note">TypeScript শিখলে job পাওয়া অনেক সহজ হয়।</div>
`},

{id:125, title:"অধ্যায় ১২৬ — Interview Questions ১", html:`
<h2>অধ্যায় ১২৬ — Interview Questions ১</h2>
<div class="quiz-box">
  <div class="quiz-q">Hoisting কী?</div>
  <div class="option" onclick="quiz(this,'correct')">Variable ও Function Declaration Code চালানোর আগে Memory-তে ওঠে</div>
  <div class="option" onclick="quiz(this,'wrong')">Loop-এর আরেক নাম</div>
  <div class="option" onclick="quiz(this,'wrong')">Promise-এর একটি অংশ</div>
  <div class="quiz-result" id="iq1Result"></div>
</div>
`},

{id:126, title:"অধ্যায় ১২৭ — Interview Questions ২", html:`
<h2>অধ্যায় ১২৭ — Interview Questions ২</h2>
<div class="quiz-box">
  <div class="quiz-q">Closure কী?</div>
  <div class="option" onclick="quiz(this,'correct')">Inner Function তার Outer Function-এর Variable মনে রাখে</div>
  <div class="option" onclick="quiz(this,'wrong')">Browser বন্ধ হওয়া</div>
  <div class="option" onclick="quiz(this,'wrong')">Array-এর একটি Method</div>
  <div class="quiz-result" id="iq2Result"></div>
</div>
`},

{id:127, title:"অধ্যায় ১২৮ — Interview Questions ৩", html:`
<h2>অধ্যায় ১২৭ — Interview Questions ৩</h2>
<div class="quiz-box">
  <div class="quiz-q">== এবং === এর পার্থক্য কী?</div>
  <div class="option" onclick="quiz(this,'correct')">== শুধু Value দেখে, === Value ও Type দুটোই দেখে</div>
  <div class="option" onclick="quiz(this,'wrong')">একই জিনিস, পার্থক্য নেই</div>
  <div class="option" onclick="quiz(this,'wrong')">=== শুধু number-এর জন্য</div>
  <div class="quiz-result" id="iq3Result"></div>
</div>
`},

{id:128, title:"অধ্যায় ১২৯ — Interview Questions ৪", html:`
<h2>অধ্যায় ১২৯ — Interview Questions ৪</h2>
<div class="quiz-box">
  <div class="quiz-q">Event Loop কী?</div>
  <div class="option" onclick="quiz(this,'correct')">Call Stack খালি হলে Callback Queue থেকে কাজ নিয়ে চালায়</div>
  <div class="option" onclick="quiz(this,'wrong')">for loop-এর আরেক নাম</div>
  <div class="option" onclick="quiz(this,'wrong')">React-এর একটি Hook</div>
  <div class="quiz-result" id="iq4Result"></div>
</div>
`},

{id:129, title:"অধ্যায় ১৩০ — Common Mistakes", html:`
<h2>অধ্যায় ১৩০ — Common Mistakes ❌</h2>
<div class="grid-2">
  <div class="card-item">❌ var ব্যবহার</div>
  <div class="card-item">❌ == ব্যবহার</div>
  <div class="card-item">❌ Scope না বোঝা</div>
  <div class="card-item">❌ async/await confuse</div>
  <div class="card-item">❌ this confuse</div>
  <div class="card-item">❌ console.log ভুলে যাওয়া</div>
  <div class="card-item">❌ Error handling না করা</div>
  <div class="card-item">❌ Practice না করা</div>
</div>
<div class="note">✅ প্রতিদিন একটু একটু করে কোড লিখো। এটাই একমাত্র সমাধান।</div>
`},

{id:130, title:"অধ্যায় ১৩১ — JavaScript Roadmap", html:`
<h2>অধ্যায় ১৩১ — JavaScript Roadmap 🗺️</h2>
<div class="grid-2">
  <div class="card-item">1️⃣ <b>Basics</b><br>Variable, Type, Operator, Loop, Function</div>
  <div class="card-item">2️⃣ <b>DOM</b><br>Select, Modify, Events</div>
  <div class="card-item">3️⃣ <b>ES6+</b><br>Arrow, Spread, Destructuring, Class</div>
  <div class="card-item">4️⃣ <b>Async</b><br>Callback, Promise, async/await</div>
  <div class="card-item">5️⃣ <b>APIs</b><br>fetch, REST, JSON</div>
  <div class="card-item">6️⃣ <b>Projects</b><br>To-Do, Quiz, Weather</div>
  <div class="card-item">7️⃣ <b>React</b><br>Component, Hook, State</div>
  <div class="card-item">8️⃣ <b>Node.js</b><br>Server, API, Database</div>
</div>
<div class="note">🚀 তুমি ১ থেকে ৬ পর্যন্ত শেষ করেছো! React-এর জন্য তুমি এখন Ready!</div>
`},

{id:131, title:"🏆 Final — THE END!", html:`
<h2>🏆 অভিনন্দন! JavaScript A-Z শেষ!</h2>
<div style="text-align:center;padding:20px;background:linear-gradient(135deg,#007aff,#5856d6);border-radius:20px;color:white;margin:12px 0">
  <div style="font-size:60px">🎓</div>
  <div style="font-size:22px;font-weight:800;margin-top:8px">তুমি এখন JavaScript জানো!</div>
  <div style="opacity:.85;margin-top:6px;font-size:14px">Beginner থেকে Advanced পর্যন্ত সফলভাবে শেষ করেছো</div>
</div>
<div class="note">
  🎯 <b>Next Steps:</b><br>
  ✔️ React শেখো<br>
  ✔️ Node.js শেখো<br>
  ✔️ Real Project বানাও<br>
  ✔️ GitHub-এ Upload করো<br>
  ✔️ Full Stack Developer হও!
</div>
<div class="note" style="background:#fff3e0;border-color:#ff9500">
  💪 <b>মনে রাখো:</b><br>
  "Code না লিখলে শেখা হয় না।"<br>
  প্রতিদিন ৩০ মিনিট Practice করো।
</div>
`}
];

// ── TOPIC GROUPS ──
const GROUPS = [
  {label:"🚀 JavaScript পরিচিতি", icon:"🚀", color:"#007aff",  s:0,   e:8},
  {label:"🔢 Data Types",          icon:"🔢", color:"#af52de",  s:8,   e:14},
  {label:"➕ Operators",           icon:"➕", color:"#ff9500",  s:14,  e:20},
  {label:"🔀 Conditions",          icon:"🔀", color:"#34c759",  s:20,  e:27},
  {label:"🔁 Loops",               icon:"🔁", color:"#5ac8fa",  s:27,  e:31},
  {label:"⚙️ Functions",           icon:"⚙️", color:"#007aff",  s:31,  e:37},
  {label:"📦 Scope ও Hoisting",    icon:"📦", color:"#ff3b30",  s:37,  e:39},
  {label:"📚 Array",               icon:"📚", color:"#34c759",  s:39,  e:42},
  {label:"🗂️ Object",             icon:"🗂️", color:"#ff9500",  s:42,  e:45},
  {label:"🌐 DOM",                 icon:"🌐", color:"#007aff",  s:45,  e:51},
  {label:"🎯 Events",              icon:"🎯", color:"#af52de",  s:51,  e:52},
  {label:"🔤 String Methods",      icon:"🔤", color:"#5ac8fa",  s:52,  e:55},
  {label:"📊 Array Methods",       icon:"📊", color:"#34c759",  s:55,  e:58},
  {label:"⏰ Date ও Timer",        icon:"⏰", color:"#ff9500",  s:58,  e:62},
  {label:"💾 JSON ও Storage",      icon:"💾", color:"#007aff",  s:59,  e:61},
  {label:"⚡ Async JS",            icon:"⚡", color:"#af52de",  s:63,  e:66},
  {label:"🌍 API ও Fetch",         icon:"🌍", color:"#34c759",  s:65,  e:67},
  {label:"✨ ES6+ Features",       icon:"✨", color:"#5ac8fa",  s:67,  e:72},
  {label:"🏛️ Class ও OOP",        icon:"🏛️", color:"#ff9500",  s:70,  e:73},
  {label:"🧩 Advanced JS",         icon:"🧩", color:"#ff3b30",  s:73,  e:112},
  {label:"🎮 Mini Projects",       icon:"🎮", color:"#007aff",  s:112, e:120},
  {label:"🚀 Professional Path",   icon:"🚀", color:"#af52de",  s:120, e:132},
];
