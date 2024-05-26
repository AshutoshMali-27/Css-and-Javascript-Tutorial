// const student={
//     fullName:"Ashutosh Mali",
//     marks:97.8,
//     printMarks: function(){
//        console.log("marks =", this.marks);
//     }, 
// };


// console.log("one");
// console.log("two");
// console.log("three");



// function hello(){
//     console.log("hello ashutosh");
// }

// setTimeout(hello,5000);


// setTimeout(()=>{
// console.log("hi Aashutosh ");
// },5000)


// function sum(a,b){
//     console.log(a+b);
// }

// function Calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// Calculator(4,5,sum);


// Calculator(1,2,(a,b)=>{
//     console.log(a*b);
// })


// function getData(dataID){
//   //  console.log('data',dataID);

//   setTimeout(()=>{
//     console.log("data",dataID);
//   },5000)
// };

// getData(1);

// getData(2);

// getData(3);





// function getData(dataID,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataID);

//         if(getNextData){
//             getNextData();
//         }
   
//     },2000);
// }

// getData(1,()=>{
//     console.log("getting data 2 ....");
//     getData(2,()=>{
//         console.log("getting data 3 ....");
//         getData(3,()=>{
//             console.log("getting data 4 ....");
//             getData(4);
//         });
//     });
// });


// let promise=new Promise((resolve,reject)=>{
// console.log("i am a promise ");
// resolve(123);
// //reject("some error occured");
// });


// function getData(dataID,getNextData){
//     return new Promise((resolve,reject)=>{
//  setTimeout(()=>{

//     console.log('data',dataID);

//     resolve("success");
//     if(getNextData){
//         getNextData();
//     }
//  },5000);

//     });
// }






// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise");
//        // resolve("sussess");
//         reject("error");
//     })
// }


// let promise2 =getPromise();
// promise2.then((res)=>{
//     console.log("promise fulfilled",res);
// })
// promise2.catch((err)=>{
//     console.log("rejected",err);
// })


function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        },4000);
    });
}


console.log("fetching data");

let p1=asyncFunc();
p1.then((res)=>{
    console.log(res);
})