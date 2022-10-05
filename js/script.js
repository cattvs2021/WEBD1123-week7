//object with literal syntx
// let webClasses = {
//     webd1121: "Web Design with HTML5 and CSS3",
//     webd1123: "Interactive Web Design 1",
//     webd1125: "Advanced Web Design with CSS3",
//     webd1127: "Interactive Web Design 2- SVG and Canvas",
//     webd2121:"Responsive Web Design for Desktop and Mobile Devices",
//     webd2123:"Interactive User Interface Design",
//     webd2125:"Advanced Web Concepts",
//     webd2127:"App Design for Mobile Devices",
//     webd2129:"Web Design Portfolio",
//     addClasses: function() {
//         return this.webd1121 + " AND " + this.webd1123}
// }
//console.log(webClasses.webd1121);
let heading = document.getElementById("heading");
let heading2 = document.getElementById("heading2");
console.log(heading);
// heading.innerHTML = webClasses.webd1123;
//heading.innerHTML = webClasses.addClasses();

// objects with constucter syntax
const webClasses = new Object();
webClasses.webd1121 = "Web Design with HTML5 and CSS3";
webClasses.webd1123 = "Interactive User Interface Design";
webClasses.addClasses = function() {
       return this.webd1121 + " AND " + this.webd1123
    }
 heading.innerHTML = webClasses.addClasses();
//literal array syntax
//let words = ["process", "soluyon", "tipping-point", "strategy", "vision"];
//console.log(words[0]);
//heading2.innerHTML = words[0];

//constructor arry syntax
let words = new Array("process", "soluyon", "tipping-point", "strategy", "vision");
heading2.innerHTML = words[0];
// let paragraph = document.euerySelectorAll("p");
let paragraph = document.querySelectorAll("p");
console.log(paragraph);
let sec1 = document.querySelector("section");
console.log(sec1);
let para = document.createElement("p");
// We used create elements to create an html element in memory that we can revisit.
sec1.appendChild(para);
// We used appendChild to add elements to other elements to existing elements. 
sec1.setAttribute("id", "section1");
sec1.classList.add("mySection");
