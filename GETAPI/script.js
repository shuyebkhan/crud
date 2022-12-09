const url= "https://jsonplaceholder.typicode.com/posts";

const body= document.querySelector("body");
const  container =document.createElement("div");
container.classList.add("container");
body.appendChild(container);


const heading =document.createElement("h1");
heading.innerText="Storing API data in tabel";
let table=document.createElement("table");

container.append(heading,table);




let thead=document.createElement("thead");
let trHead=document.createElement("tr");
thead.appendChild(trHead);


let id=document.createElement("th");
id.textContent="ID";

let title = document.createElement("th");
title.textContent="TITLE";

let description =document.createElement("th");
description.textContent="DESCRIPTION";

trHead.append(id,title,description);



// ADD THEAD AND  TBODY IN TABLE;
let tableBody =document.createElement('tbody');
table.append(thead,tableBody);




//   MAKE A FUNCTION IN DOM.
const createElement =(data) =>{
    const row= document.createElement('tr');

    let id= document.createElement("td");
    id.innerText=data.id;

    let title=document.createElement("td");
     title.innerText=data.title;

     let disc =document.createElement("td");
     disc.innerText= data.body;

     row.append(id,title,disc);

     tableBody.append(row);
}



fetch(url)
.then((response)=> response.json())

.then((elements)=>{
    console.log(elements)
      for(let element of elements.slice(19)){
          createElement(element);
      }
})
.catch((error)=>{
    console.log(error);
});








