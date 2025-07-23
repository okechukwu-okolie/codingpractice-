// const ourPromise = new Promise((resolve,reject)=>{
//     if(3*3 == 9){
//         resolve('pr: resolved correctly')
//     }else{
//         reject('pr:rejected unfortunately')
//     }
// })


// ourPromise.then((res)=>{console.log('this is  the resolution',res );})
// ourPromise.catch((res)=>{console.log('conditions were not fulfilled',res)})

// ourPromise.then((res)=>{res}).catch((res)=>{res}).finally(()=>{console.log('finally done.')})



//USING FETCH

// const fetchData =()=>{
//     const result = fetch('https://jsonplaceholder.typicode.com/posts')
//     result.then((res)=>{
//         const Data = res.json()
//         return Data
//     }).then((res)=>{
//         console.log(res)
//     })
// }



//USING ASYNC AND AWAIT

const fetchData = async()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    console.log(posts)

}


fetchData()