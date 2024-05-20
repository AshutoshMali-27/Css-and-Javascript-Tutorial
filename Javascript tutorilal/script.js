// //console.log(window);

// console.dir(document.body.childNodes[1]); 

// //document.body.childNodes[1].innerText="ABCD";


// let firstel=document.querySelector("p");
// console.dir(firstel);


// let allelement=document.querySelectorAll("p");
// console.dir(allelement);

// let h4=document.querySelector("h4");
// console.dir(h4.innerText);

// h4.innerText=h4.innerText+" " +"Ashutosh Mali";


let divs=document.querySelectorAll(".box");

let idx=1;
for(div of divs){
    div.innerText=`new unique value is ${idx}`;
    idx++;
}

let div1=document.querySelector(".mydiv");
console.dir(div1.innerText);

let name1=div1.getAttribute("name");
console.log(name1); 


let para=document.querySelector(".para");
console.log(para.getAttribute("class"));
 console.log(para.setAttribute("class","newclass"));


 let div2=document.querySelector("#box");
 console.log(div2);

 div2.style.backgroundColor="green";

 div2.style.fontSize="26px";
 div2.innerText="hello";
 div2.style.visibility="hidden";
 //div2.

 let newbutton=document.createElement("button");
 console.log(newbutton);
 newbutton.innerText="click me";
  
 div1.after(newbutton);
 
 let newheeading=document.createElement("h1");
 newheeading.innerText="hi ,i am new!";

 document.querySelector("body").prepend(newheeading);


 let btn1=document.querySelector("#btn1");
 btn1.onclick=(e)=>{
    console.log('btn1 was clicked');
    let a=25;
    a++;
    console.log(a);
    console.log(e);
    console.log(e.type);
 };

 let mybox=document.querySelector(".mybox");
 mybox.onmouseover=()=>{
    alert("mouse hover inside the div");
    
 };


 let btn3=document.querySelector('#btn3');
//  btn3.addEventListener('click',(e)=>{

//     console.log('btn3 was clicked');
//     console.log(e);
//  });


 btn3.addEventListener('click',()=>{

    console.log('btn3 was clicked-handler 1');
    //console.log(e);
 });
 btn3.addEventListener('click',()=>{

    console.log('btn3 was clicked-handler2');
    //console.log(e);
 });
 btn3.addEventListener('click',()=>{

    console.log('btn3 was clicked-handler3');
    //console.log(e);
 });

 const handler3=()=>{
    console.log('btn3 was clicked-handler3');
 }
 btn3.addEventListener('click',()=>{

    console.log('btn3 was clicked-handler 4');
    //console.log(e);
 });


 btn3.removeEventListener('click',handler3);