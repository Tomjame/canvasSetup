const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

 
const c = canvas.getContext('2d');


const mouse = {
    x: undefined,
    y: undefined
}
const maxRadius = 40;
const minRadius = 5;
const colorArray = [
    "#E3535D",
    "#047073",
    "#67BAB7",
    "#FED568",
    "#F3B4B7",
];


window.addEventListener("mousemove",
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;       
    })
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

//RNG
function randomNumRange (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
    }
function randomColor(colorArray) {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
    }
    
//Object
function Object(x, y, dx, dy, size, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.color = color;
     
    //drawing the shape
    this.draw = function () {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.size, this.size);
    }
    //adding movement
    this.update = function () {
        if (this.x > innerWidth || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight || this.y < 0) {
            this.dy = -this.dy;
            }
             
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}
//array to store our objects
let objects = [];
//init function
function init() {
    //filling the array with randomised objects
    for (let i = 0; i < 34; i++){
        let x = randomNumRange(0, innerWidth);
        let y = randomNumRange(0, innerHeight);
        let dx = randomNumRange(-7, 7);
        let dy = randomNumRange(-7, 7);
        let size = randomNumRange(5, 30);
        let color = randomColor(colorArray);
        objects.push(new Object(x, y, dx, dy, size, color));
        
    }    
   
    }
    

    

//Animate function 
//this cycles through the array of objects we have created
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < objects.length; i++) {
        objects[i].update();
    }
}
init();
animate();
