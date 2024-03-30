// Storage (Session ve LocalStorage)

// 1.SetItem

let word = "Menim adim nermindi";

localStorage.setItem("MyWord", word);
localStorage.setItem("Name", "Nermin");
localStorage.setItem("Age", 22);

// 2.GetItem

console.log(localStorage.getItem("MyWord"));

// 3.RemoveItem

localStorage.removeItem("MyWord");

// 4.Clear

localStorage.clear();

let array = [12, 23, "salam", true];
let object = {
  name: "Narmin",
  age: 23,
};

localStorage.setItem("Array", JSON.stringify(array));

localStorage.setItem("Object", JSON.stringify(object));

console.log(JSON.parse(localStorage.getItem("Array")));
console.log(JSON.parse(localStorage.getItem("Object")));

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});



const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

// Konsola her bir istifadecinin tam adini yazdirin (Albert Einstein)
// Her bir istifadecinin yasini tapin (Albert : 76)
// Her bir istifadecinin yasinin 60 dan cox oldugunu yoxluyun
// Dogulma tarixine gore azdan coxa siralayin
// Yalniz 1500 ve 1800 illeri arasinda dogulanlari qeyd edin

let first = inventors.map((item)=> item.first + '' + item.last)
console.log(first);