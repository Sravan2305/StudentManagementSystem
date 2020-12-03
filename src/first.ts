import  './first.css';
 (<HTMLInputElement>document.getElementById("signin")).addEventListener("click", function signin(){
    let usr:RegExp= /\S+@\S+\.\S+/;

    let username_str:string = (<HTMLInputElement>document.getElementById("username")).value;


    let password_str:string = (<HTMLInputElement>document.getElementById("password")).value;

    let count:number=0;
   count += /[a-z]/.test(password_str) ? 1 : 0;
   count += /[A-Z]/.test(password_str) ? 1 : 0;
   count += /\d/.test(password_str) ? 1 : 0;
   count += /[@,$,*,&,^,-,!]/.test(password_str) ? 1 : 0;

   let flag:number = 1;
   if(!usr.test(username_str)){
      (<HTMLInputElement>document.getElementById("usrerror")).style.display = "inline";
      flag=0;
      
   }   
   if(count<4){
      (<HTMLInputElement>document.getElementById("pwderror")).style.display = "inline";
      flag=0;
   }
   if(flag==1){
      window.open("second.html","_self");
   }
 })

 