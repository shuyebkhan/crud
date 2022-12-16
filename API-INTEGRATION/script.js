// POST DATA.
const myform = document.getElementById('myform');

myform.addEventListener('submit' ,function(e){
      e.preventDefault();

    let title=  document.getElementById("title").value;
    let body=  document.getElementById("body").value;

       let data={
           title:title,
           body:body,
       }

     fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {console.log(json)
    let newData=""      
    newData+="<tr>"
    newData+=`<td>${json.id}</td>`;
    newData+=`<td>${json.title}</td>`;
    newData+=`<td>${json.body}</td>`
    newData+=`<td><button >Edit</button></td>`;
    newData+=`<td><button class="dBtn">Delete</button></td>`;
     newData+="</tr>";
        

     document.getElementById("tbData").innerHTML="";
     document.getElementById("tbData").innerHTML=tmpData+newData;
  })
  
      

  document.getElementById("title").value="";
  document.getElementById("body").value="";


  
  let tmpData="";
   
getData();

})




// GET DATA
function getData(){
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then((res)=>res.json()
     ).then((response)=>{
          tmpData ="";
         console.log(response);
         response.forEach((user)=>{
                    tmpData+="<tr>"
                    tmpData+=`<td>${user.id}</td>`;
                    tmpData+=`<td>${user.title}</td>`;
                    tmpData+=`<td>${user.body}</td>`
                    tmpData+=`<td><button>Edit</button></td>`;
                    tmpData+=`<td><button class="dBtn">Delete</button></td>`;
                    // tmpData+=`<td><button>onClick='onDelete(${id})</button></td>`
                   tmpData+="</tr>";
          })
              
           document.getElementById("tbData").innerHTML="";
          document.getElementById("tbData").innerHTML=tmpData;
       
     })
};

getData();
