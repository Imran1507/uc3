// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


// const API = `https://www.omdbapi.com/?i=tt3896198&apikey=e1b29673`


let searchvideo = async ()=>{

  try{
     const query = document.getElementById("search").value;


const url= ` http://www.omdbapi.com/?t=avenger&apikey=e1b29673&`
     const res = await fetch(url);
     console.log(query)
    const data  = await res.json();
  console.log(url)
    console.log("iamin",res)

  }
  catch(err){
    console.log("imwrong",err)
  }
}

searchvideo()