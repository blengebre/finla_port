/*
1,checck if it is even or odd
num=prompt("enter a number")
if (num%2==0){
console.log("even")}
else{
console.log("odd")}
*/
const prompt = require("prompt-sync")();
let day = prompt("Enter the day of the week in number (1-7):");

// Convert input to number, because prompt returns string
day = Number(day);

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number (must be 1-7).");
}

for(i=0;i<11;i++) {
   console.log(i)
   }

sum=0
i=0
while(i<6){
    sum+=i
    i+=1
}
 console.log(sum)

var greet=(name="guest")=> console.log(`hello ${name}`);
greet();

var add=(a,b)=> console.log(a+b)
add(5,2);
var square= (x) => x*x
console.log(square(7));
function applyTwice(func, value) {
  return func(func(value));
}

const double = x => x * 2;
console.log(applyTwice(double, 5)); // 20
let car={
  brand: "utf",
  year:2017,
  drive: function(){
    console.log(`driving ${this.brand}`)
  }

}
car.drive();
let arr=[1,3,4,5,6,7]
let my=arr.map(n=>n*2);
console.log(my);
let ka=arr.filter(n=>n%2==0);
console.log(ka);
let ma=arr.reduce((a,b)=>a+b,0);
console.log(ma);
let kaa={ name: "Sara", age: 22 };
let {name,age }=kaa;
console.log(name,age);
let arr1=[1,2] ;
let arr2=[...arr1,3,4];
console.log(arr2);

async function fetchPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data); // ✅ Now we can see the post object
  } catch (error) {
    console.error("Error fetching data:", error); // ⚠️ If something fails
  }
}

fetchPost(); // Call the function

/*<form id="myForm">
  <input type="text" id="name" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById("myForm").addEventListener("submit", function(event) {
    const nameInput = document.getElementById("name").value.trim();
    if (nameInput === "") {
      event.preventDefault(); // stop form submission
      alert("Name cannot be empty!");
    }
  });
</script>*/
console.log("A"-1
)
