const apiService = {
  get: async function (url:string):Promise<any> {
    console.log("get",url)
    return new  Promise((resolve, reject)=>{
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response=>response.json())
        .then((json)=> {
          console.log("Response",json);
          // alert('response')
          resolve(json)
        })
        .catch((error)=>{
          console.log("Error", error);
          reject(error)
        });
    })
  },
  post: async function (url:string,data:any):Promise<any> {
    console.log('data',url, data)
    return new  Promise((resolve, reject)=>{
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`,{
        method: 'POST',
        body:data,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response=>response.json())
        .then((json)=> {
          console.log("Response",json);
          // alert('response')
          resolve(json)
        })
        .catch((error)=>{
          console.log("Error", error);
          reject(error)
        });
    })
}
}

export default apiService