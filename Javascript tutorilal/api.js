const url ="https://cat-fact.herokuapp.com/facts";


// let promise=fetch(url);
// console.log(promise);

const factpara=document.querySelector("#fact");
const btn=document.querySelector("#btnfact");



const getfacts=async()=>{
    console.log("getting data");
    let response= await fetch(url);
    console.log(response.status);
    let data=await response.json();
    console.log(data);
    console.log(data[0].text);
    factpara.innerText=data[0].text;
};

btn.addEventListener("click",getfacts);


