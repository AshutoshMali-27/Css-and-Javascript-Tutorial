what is js ?
js is programming language .we use it to give instruction to the computer .

console.log("ashutosh mali")

it is use to log a massage to the console.

variable in cs

variable are container of data 


let ,const and var
var -:
vaqriable can be re-declared and updated , a global scope variable.

let-:
variable cannot be redeclared  but can be updated . a block scope variable .

const:-
variable cannot be re-declared and updated . a block scope variable . 


datatype in js

primitive
number,string,boolean,undefined,null,bigint,symbol

non primitive 
object ,array



string is a sequence of character used to represent Text

create string 
let name = "ashutosh mali"


method of array-:
push():add to end;
pop():delete from end and return
toString():converts array to string
concat():join multiple arrays and returns result;
unshift():add to start;
shift():delete from start and return



foreach loop in Arrays
arr.foreach(callbackfunction)
callbackfunction: here it is a function for each element in the array;
"A callback is a function passed as an argument to another function" .

arr.foreach((val )=>{
    console.log(val);
})

here foreach are the higher order function 
the foreach method  takes  the function as an argument thats why its called as higher order function 


map-:
create a new array with the result of some operation the value its callback return are used to map new array


filter -:
create a new array of element that give true for a condition 

let newArr=arr.filter((val=>{
    return val%2 === 0;
}))

reduce-:
perform some operations and reduce the array to a single value . it returns that single value.

window object -:

the window object represent on open window in a browser .it is browser object and is automatically created by browser.

it is global object with lots of properties and methods

what is dom 
-when a web page is loaded , the browser create a document object model of the page  
-the dom tree is a model of the page that the browser uses to render the page

dom manipulation

selct with id
document.getElementById("myId")

selecting with class

document.getElementByClassName("myClass");

selecting with tag

document.getElementByTagName("P"); 


document.querySelector("myId/myClass/tag");
//return first element


document.querySelectorAll("myId/myClass/tag");



properties-:

tagName:return tag of element nodes
innerText: returns the text content of the element and all its children

innerHTML: returns the plain text of HTMl contents in the element

textContent: returns textual content even for hidden element 

getAttribute(attr) -: to get attribute value;

setAttribute(attr,value)-: to set attribute value


let el=document.createElement("div");
node.append(el) //add at the end of the node(inside);

node.prepend(el) //add at the start of node (inside);

node.before(el) //add before the node (outside);

node.after(el) //adds after the node(outside);


delete element-:
node.remove() //removes the node and all its children;


event in JS

the change in the state of an object is known as an event

event are fired to notify code of intresting changes that may affect code execution.


mouse events (click ,double click);
keyboard events(keypress,keyup,keydown);
form event(submit);
print event and many more;


prototypes in JS
-A javascript object is an entity having state and behavior (properites and method).
-JS objects have special property called prototype.
-we can set prototype using __proto__

-if iobject and prototype have same method ,object method will use.



this= object refer itsself;



synchronous 
 synchornus means the code run in a perticular sequence of instruction given in the program each instruction waits for the previous instruction to compleat its execution


 Asynchrounos 

 due to synchronous programming .sometimes imp instructions get blocked due to some previous instruction which causes a delay in UI Asynchronous code execution allows to execute next instruction immediately and doesnt block the flow .


 callback hell

 nested callbacks stacked below one another forming a pyramid strecture .
 (pyramid of doom)

 this style of programming become diffcult to understand and manage.


promise 
apromise od form eventual completion of task .it is an object in ja .it is a solutrion to callback hell .

let promise =new promise((resolve,reject)={

})

promise -pending ,fulfiled ,reject



FETCH API

the fetch api provides an interface for fetching (sending/receiving) resouces.

it uses Request and response objects

the fetch() method is used to fetch a resource(data).
 

 ajax is a asynchronous JS and XML
 JSON is Javascript Object Notation
 json() method: return a second promise that resolve with the result of parsing the response body text as json 



 httpresponse header also conatin detail about the response such as content type http status code etc.