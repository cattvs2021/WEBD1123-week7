// wedClass(Array)
const webClasses = [{
    courseNumber: "WEBD1012",
    courseTitle: "Introduction to Visual Communications Careers",
    courseDescription: "This foundational first-semester course introduces the technical practices of visual communications and how these practices are applied in various visual communications professions. The focus of this course is on a hands-on, practice-based approach to the application of common design methods. Course activities involve creating projects using industry-standard software to apply effective visual communications techniques and practices. Topics also include the variety of career paths within the visual communications field.This Visual Communications Careers core class is intended for students pursuing an award in Web Design. Other Century College students with the right prerequisites wishing to explore the area are welcome as well."
},
{
    courseNumber: "WEBD1013",
    courseTitle: "Fundamentals of Applied Design",
    courseDescription: "This course explores practical and real-world design solutions used in the visual communications industry. Topics include the elements and principles of design, spatial relationships, and imagery; the history of design movements; and personal and professional branding. Activities focus on the creative design process, including traditional tools, industry- standard visual vocabulary, client-based projects, and class critiques.This Visual Communications Careers core class is intended for students pursuing an award in Web Design. Other Century College students with the right prerequisites wishing to explore the area are welcome as well."
},
{
    courseNumber: "WEBD1015",
    courseTitle: "Project Planning",
    courseDescription: "This course introduces established planning processes and practices as they relate to project execution in the visual communications field. Topics include the practical aspects of planning and scheduling, conducting risk assessment, resource allocation, and performance measurement, all of which are required for successful project completion.This Visual Communications Careers core class is intended for students pursuing an award in Web Design. Other Century College students with the right prerequisites wishing to explore the area are welcome as well."
},
{
    courseNumber: "WEBD1018",
    courseTitle: "Introduction to Adobe Photoshop",
    courseDescription: "This first-semester, course uses an iterative design process to create and enhance imagery using Adobe Photoshop. Course activities include applying problem-solving techniques that simulate real-world visual communications design challenges. Topics include selections, layers, resolution, file formats, color systems, retouching, and copyright.This Visual Communications Careers core class is intended for students pursuing an award in Web Design. Other Century College students with the right prerequisites wishing to explore the area are welcome as well."
},
{
    courseNumber: "WEBD1019",
    courseTitle: "Professional Identity Development",
    courseDescription: "This intermediate, second-semester course continues the exploration of the technical practices of visual communications and how these practices are applied in various visual communications professions. Course activities focus on using industry standard software to develop media reflecting professional identity and brand. Further examination of the various career paths within the industry will also be covered.This Visual Communications Careers core class is intended for students pursuing an award in Web Design. Other Century College students with the right prerequisites wishing to explore the area are welcome as well."
},
{
    courseNumber: "WEBD1121",
    courseTitle: "Web Design with HTML5 and CSS3",
    courseDescription: "This hands-on, project-oriented course introduces the many new and exciting options now available with HTML5 and CSS3. The course covers designing and creating both single- and multiple-page websites with text, graphics, multimedia elements, and interactivity. Topics include the semantic use of HTML5 (Hypertext Markup Language version 5), formatting the appearance of websites with CSS3 (Cascading Style Sheets version 3), optimizing graphics, and applying multimedia elements to produce efficient, interactive websites. The course also introduces the standard practice of working with the Git version control systems and their integration with GitHub."
},
{
    courseNumber: "WEBD1123",
    courseTitle: "Interactive Web Design 1",
    courseDescription: "This hands-on, project-oriented course focuses on designing and building informative and functional, modern web pages, using industry-standard software and design tools, to meet client needs. Topics include employing the elements and principles of design; using and modifying components of Adobe Dreamweaver; integrating Adobe Animate with Dreamweaver, HTML5, and CSS3; and a cursory introduction to JavaScript and jQuery within the design environment."
},
{
    courseNumber: "WEBD1125",
    courseTitle: "Advanced Web Design with CSS3",
    courseDescription: "This hands-on, project-oriented course builds on concepts introduced in WEBD 1121. The course focuses on creating visually appealing and contemporary webpage designs using advanced CSS3 formatting properties that employ the formal principles of design. Projects include using CSS Variables and Preprocessors, advanced layouts and appropriate color usage and more."
},
{
    courseNumber: "WEBD1127",
    courseTitle: " Interactive Web Design 2- SVG and Canvas",
    courseDescription: "This hands-on, project-oriented course introduces both the SVG and HTML5 Canvas elements. SVG (Scalable Vector Graphics) is a technology that is used to create visual assets for the web. Canvas is a similar technology with more advanced features. Topics include comparing and differentiating the use of these technologies, as well as creating dynamic interactivity on webpages and advanced animation techniques."
},
{
    courseNumber: "WEBD2121",
    courseTitle: "Responsive Web Design for Desktop and Mobile Devices",
    courseDescription: "This course emphasizes designing responsive websites that display equally well on all formats, from desktop computers to mobile devices such as tablets and smart phones. This hands-on, project-oriented course focuses on planning and creating multiple responsive webpage layouts using CSS Media Queries, Grid, Flexbox, and Bootstrap."
},
{
    courseNumber: "WEBD2123",
    courseTitle: " Interactive User Interface Design",
    courseDescription: "Planning is an integral aspect of the design process. This hands-on course includes conducting user research; user interface design; creating mood boards and style guides; creating wire frames, sitetypes, and sitemaps; conducting usability tests and analysis towards building a comprehensive website project. Topics also includethe following design principles: white space, color, contrast, scale, alignment, typography, and visual hierarchy."
},
{
    courseNumber: "WEBD2125",
    courseTitle: "Advanced Web Concepts",
    courseDescription: "This hands-on, project-oriented course examines a variety of modern tools, techniques, frameworks, and libraries that are critical for designing webpages and developing websites with current industry best practices. The following tools are explored: Git as a version-control system (collaboratively), SEO (Search Engine Optimization), UI /UX (User Interface/User Experience), jQuery Mobile, and many more."
},
{
    courseNumber: "WEBD2127",
    courseTitle: "App Design for Mobile Devices",
    courseDescription: "Mobile app design has become arguably the fastest growing area of the Visual Communications Industry. This hands-on, project-oriented course explores the concepts, design issues, and techniques of planning and designing for the mobile app space or GUI. Projects include designing for the mobile app space for mobile applications with an advanced prototyping tool Axure-RP. The course builds on concepts covered in WEBD 2123, Interactive User Interface Design."
},
{
    courseNumber: "WEBD2129",
    courseTitle: "Web Design Portfolio",
    courseDescription: "This hands-on, project-oriented course provides an opportunity to build a web design portfolio based on content created in previous classes. The portfolio is prepared for online delivery. Presentation techniques, identifying portfolio-worthy content, and resume suggestions are stressed. The culmination of the course is to present at the annual VCC Program Portfolio show."
},
];

// console.log(webClasses[0].courseDescription);
// courseNumb = document.getElementById("courseNum");
// courseTit = document.getElementById("courseT");
// courseDesc = document.getElementById("courseDesc");

// courseNumb.innerHTML = webClasses[1].courseNumber;
// courseTit.innerHTML = webClasses[1].courseTitle;
// courseDesc.innerHTML = webClasses[1].courseDescription;

// // let paragraph = document.querySelector("p"); //gets the first paragraph
// // let paragraph = document.querySelectorAll("p");//gets every paragraph
// // console.log(paragraph);

// // let sect1 = document.querySelector("section");
// // console.log(sect1);
// // let para = document.createElement("p");
// // we use createElement to create an HTML element in memory that we can later use
// // sect1.appendChild(para);
// // we use appendChild to add other elements to existing elements
// // sect1.setAttribute('id', 'section1');
// // sect1.classList.add("mySection");
// console.log(webClasses.length);


let container = document.querySelector(".container");
console.log(container);


for(let i = 0; i < webClasses.length; i++) {
    let section = document.createElement("section");
    let courseNum = document.createElement("h1");
    let courseTitle = document.createElement("h2");
    let courseDescription = document.createElement("p");

    courseNum.innerHTML = webClasses[i].courseNumber;
    courseTitle.innerHTML = webClasses[i].courseTitle;
    courseDescription.innerHTML = webClasses[i].courseDescription;
    section.appendChild(courseNum);
    section.appendChild(courseTitle);
    section.appendChild(courseDescription);
    container.appendChild(section);
}