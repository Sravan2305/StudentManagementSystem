import "./second.css";
import * as x from "chart.js";
import * as Chart from "chart.js";


 
if((<HTMLInputElement>document.getElementById("newregistration"))!=null)
(<HTMLInputElement>document.getElementById("newregistration")).addEventListener("click" , ()=>{
    window.open("third.html","_self");
    return false;
});
if((<HTMLInputElement>document.getElementById("classes"))!=null)
(<HTMLInputElement>document.getElementById("classes")).addEventListener("click" , ()=>{
    window.open("fourth.html","_self");
    return false;
});
if((<HTMLInputElement>document.getElementById("display"))!=null)
(<HTMLInputElement>document.getElementById("display")).addEventListener("click" , ()=>{
    window.open("fifth.html","_self");
    return false;
});

export class Student {
    name: string;
    fatherName:string;
    dob:Date;
    standard:string;
    address:string;
    interests:string;
    rollNo:string;
    constructor(){
        console.log("Trying to create student");
    }
}

export  let school : Student[] =[] ;

let count:number = 1;

if(count>0)
{
sessionStorage.setItem("roll","1");
count--;
}



let  obj = JSON.parse(sessionStorage.getItem("myschool"));
console.log(obj);
console.log("%%%%%%%%");

console.log(sessionStorage.getItem("roll"));

window.onload = function (){
var ctx = (<HTMLCanvasElement>document.getElementById("myChart")).getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e",
        "black",
        "violet",
        "maroon",
      ],
      data: []
    }]
  }
});

function addData(chart:Chart, label:string, data:number) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
let class1count:number=0;
let class2count:number=0;
let class3count:number=0;
let class4count:number=0;
let class5count:number=0;
let class6count:number=0;
let class7count:number=0;
let class8count:number=0;
let class9count:number=0;
let class10count:number=0;
if(obj!=null)
for(let i=0; i<obj.length ; i++)
{   
    if(obj[i]["standard"] == "1")
        class1count++;
    else if(obj[i]["standard"] == "2")
        class2count++;
    else if(obj[i]["standard"] == "3")
        class3count++;
    else if(obj[i]["standard"] == "4")
        class4count++;
    else if(obj[i]["standard"] == "5")
        class5count++;     
    else if(obj[i]["standard"] == "6")
        class6count++;
    else if(obj[i]["standard"] == "7")
        class7count++;
    else if(obj[i]["standard"] == "8")
        class8count++;
    else if(obj[i]["standard"] == "9")
        class9count++;
    else if(obj[i]["standard"] == "10")
        class10count++;                             
}



addData(myChart , "Class 1" , class1count);
addData(myChart , "Class 2" , class2count);
addData(myChart , "Class 3" , class3count);
addData(myChart , "Class 4" , class4count);
addData(myChart , "Class 5" , class5count);
addData(myChart , "Class 6" , class6count);
addData(myChart , "Class 7" , class7count);
addData(myChart , "Class 8" , class8count);
addData(myChart , "Class 9" , class9count);
addData(myChart , "Class 10" , class10count);

}

