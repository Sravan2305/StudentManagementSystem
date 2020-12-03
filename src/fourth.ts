import './fourth.css';



let  obj = JSON.parse(sessionStorage.getItem("myschool"));
let std:string = "";
let count:number=0;
var table = document.createElement("TABLE")  as HTMLTableElement;  
table = (<HTMLTableElement>document.getElementById("mytable"));


(<HTMLInputElement>document.getElementById("1")).addEventListener("click" , ()=>{
    clear();
    std="1";
    display();
});
(document.getElementById("2")).addEventListener("click" , ()=>{
    clear();
    std="2";
    display();
    
});
(document.getElementById("3")).addEventListener("click" , ()=>{
    clear();
    std="3";
    display();
});
(document.getElementById("4")).addEventListener("click" , ()=>{
    clear();
    std="4";
    display();
});
(document.getElementById("5")).addEventListener("click" , ()=>{
    clear();
    std="5";
    display();
});
(document.getElementById("6")).addEventListener("click" , ()=>{
    clear();
    std="6";
    display();
});

(document.getElementById("7")).addEventListener("click" , ()=>{
    clear();
    std="7";
    display();
});
(document.getElementById("8")).addEventListener("click" , ()=>{
    clear();
    std="8";
    display();
});
(document.getElementById("9")).addEventListener("click" , ()=>{
    clear();
    std="9";
    display();
});
(document.getElementById("10")).addEventListener("click" , ()=>{
    clear();
    std="10";
    display();
});



function display()
{
    for(let i=0; i<obj.length ; i++)
    {
        if( obj[i]["standard"]==std )
            {
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.style.border ="5px solid white"; 
                cell2.style.border = "5px solid white"; 
                cell1.innerHTML = obj[i]["rollNo"];
                cell2.innerHTML = obj[i]["name"];
                document.getElementById("sort").style.display = "inline";
            }
    }
}
function clear(){
    document.getElementById("sort").style.display = "none";
    while(table.rows.length > 1) {
        table.deleteRow(1);
      }
}

(document.getElementById("sort")).addEventListener("click" , ()=>{
    let c:number=0;
    let names:string[] =[];
    let rolls:string[] = [];
    for(let i=0; i<obj.length ; i++)
        {
            if( obj[i]["standard"]==std )
            {   
                rolls[c] = obj[i]["rollNo"];
                names[c] = obj[i]["name"];
                c++;
            }
        }
        // console.log(names[0]);
        for(let lk=0; lk<c-1 ; lk++){
            for(let j=0; j<c-1; j++){
                if( names[j].localeCompare(names[j+1])>0 ){
                    let s:string = names[j];
                    names[j] = names[j+1];
                    names[j+1] = s;
                    let r:string = rolls[j];
                    rolls[j] = rolls[j+1];
                    rolls[j+1] = r;
                }
            }
        }
        // console.log("%%%5"); console.log(names[0]);
        clear();
        for(let i=0; i<c ; i++)
        {
                    var row = table.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.style.border ="5px solid white"; 
                    cell2.style.border = "5px solid white"; 
                    cell1.innerHTML = rolls[i];
                    cell2.innerHTML = names[i];
                    document.getElementById("sort").style.display = "inline";
        }

});

(document.getElementById("prev")).addEventListener("click" , ()=>{
    window.open("second.html","_self");
    return false;
});
