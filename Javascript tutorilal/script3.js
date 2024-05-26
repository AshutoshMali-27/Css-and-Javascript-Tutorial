// async function hello(){
//     console.log("hello");
// }
// hello();


// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//            console.log("weather data"); 
//         }, 2000);
//     });
// }


// async function getweatherdata(){
//     await api();
// }


function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('data',dataID);
            resolve("success");
        }, 2000);
    });
}


async function getAlldata(){
    await getData(1);
    await getData(2);
}