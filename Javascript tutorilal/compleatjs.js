console.log("ashutosh mali");

const student={
    fullName:20,
    cgpa:8.2,
    isPass:true,
};

console.log(student);
console.log(student['fullName']);
console.log(student.cgpa);


for(let count=1;count<=5;count++){
    console.log(count);
}

let obj={
    item:"pen",
    price:10,
};

let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("the cost of",obj.item,"is",obj.price,"rupees");


let cities=["delhi","pune","mumbai","hydrabad"];
for(let city of cities){
    console.log(city);
}



const arrowsum=(a,b)=>{
    console.log(a+b);
};


const arrowmul=(a,b)=>{
    console.log(a*b);
};

// arrowsum(6,7);

// arrowmul(6,7);


const arrowprint=()=>{
    console.warn("warning");
}

// arrowprint();


let arr=[1,2,3,4,5];

arr.forEach(function printval(val){
    console.log(val);
});

let array=["pune","delhi","mumbai"]
array.forEach((val,idx)=>{
    console.log(val.toUpperCase(),idx);  
})


let nums=[2,3,4,5,6];

nums.forEach((num)=>{
    console.log(num*num);
})

let calcsum=(num)=>{
    console.log(num*2);
}

nums.forEach(calcsum);



let newarray= nums.map((val)=>{
    let res
    console.log(val*10);
    return res=val*10;
})


//console.log(newarray);

let newArr=nums.filter((val=>{
    return val%2 === 0;
}))
//console.log(newArr);

let arr2=[1,2,3,4];

const output1 =arr2.reduce((res,curr)=>{
    return res+curr;
})

//console.log(output1); 

