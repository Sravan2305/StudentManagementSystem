import './third.css';

import {school} from './second';
import {Student} from './second';


window.onload = function(){

let inputdob:string ;
let dob:Date ;
let studentinterest : string ="NA";
let flag:boolean = false;

let roll:number =1;

let arr:string;



(<HTMLInputElement>document.getElementById("submit")).addEventListener("click" , ()=>{
    (<HTMLInputElement>document.getElementById("invalidmessage")).innerHTML="Invalid ";
   let studentName : string = (<HTMLInputElement>document.getElementById("studentname")).value;
   let fatherName : string = (<HTMLInputElement>document.getElementById("fathername")).value;
   let studentDob : Date = dob;
    let studentStandard:string = (<HTMLSelectElement>document.getElementById("standard")).value;
    let studentAddress:string = (<HTMLInputElement>document.getElementById("address")).value;
    
    if(flag) studentinterest = (<HTMLInputElement>document.getElementById("interest")).value;
    
    let invalidcount:number=0;
    
    var regex = /^[a-zA-Z ]{2,30}$/;

     if(!regex.test(studentName))
     {(<HTMLInputElement>document.getElementById("invalidmessage")).style.display = "block"; 
     (<HTMLInputElement>document.getElementById("invalidmessage")).innerHTML+=" ,Student name";
     invalidcount++;
    }

     if(!regex.test(fatherName))
     {(<HTMLInputElement>document.getElementById("invalidmessage")).style.display = "block"; 
     (<HTMLInputElement>document.getElementById("invalidmessage")).innerHTML+=" ,Father name";
     invalidcount++;
    }

    if(studentAddress.length==0)
    {(<HTMLInputElement>document.getElementById("invalidmessage")).style.display = "block"; 
    (<HTMLInputElement>document.getElementById("invalidmessage")).innerHTML+=" ,Address";
    invalidcount++;
   }

   if(studentStandard === "none")
   {(<HTMLInputElement>document.getElementById("invalidmessage")).style.display = "block"; 
   (<HTMLInputElement>document.getElementById("invalidmessage")).innerHTML+=" ,Class";
   invalidcount++;
  }

  let currDate:Date = new Date();
  
  if( currDate.getFullYear() - dob.getFullYear() <= 5  ){
    (<HTMLInputElement>document.getElementById("invalidmessage")).innerHTML="Sorry! Student is under Age";
    invalidcount++;
  }

  if(invalidcount==0){
    (<HTMLInputElement>document.getElementById("invalidmessage")).innerHTML="";
    let s:Student = new Student();
    s.address = studentAddress;
    s.dob = dob;
    s.name = studentName;
    s.fatherName = fatherName;
    s.interests = studentinterest;
    s.standard = studentStandard;
    let roll :number = parseInt(sessionStorage.getItem("roll"));
    s.rollNo = "stu"+studentStandard+studentName[0]+fatherName[0]+studentDob.getMonth();
   
    
    var schoolList = JSON.parse( sessionStorage.getItem('myschool')) || [];
    schoolList.push(s);
    sessionStorage.setItem('myschool', JSON.stringify(schoolList));

    // if(sessionStorage.getItem("myschool")!=null)
    // arr= sessionStorage.getItem("myschool")+ JSON.stringify(s);
    // else 
    // arr=  JSON.stringify(s);
    // //console.log(arr);


     window.open("second.html","_self");
    
    return false;
  }
})





document.getElementById("dob").addEventListener("change", function() {
     inputdob = (<HTMLInputElement>this).value;
     dob= new Date(inputdob);

});

document.getElementById("interest_yes").addEventListener("click", function() {
    (<HTMLInputElement>document.getElementById("display_interest")).style.display = "table-row";
    flag=true;
});
document.getElementById("interest_no").addEventListener("click", function() {
    (<HTMLInputElement>document.getElementById("display_interest")).style.display = "none";
    studentinterest="NA";
    flag = false;
});


}