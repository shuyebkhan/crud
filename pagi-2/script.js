// let page=0;
// const url=`https://dummyjson.com/products?limit=${limit}&skip=${page}`;



let limit=10;
let page=0;


function pageChange(num){
          console.log(num)
       page = page+num;
       console.log("page",page);
       if(page<0){
              page=1;
              getData(limit,page);
       } else {
              getData (limit,page);
       }
}


getData(limit,page);



function pageno(page){
       getData(limit,page)
};




function getData(limit,page){
const url=`https://dummyjson.com/products?limit=${limit}&skip=${page*limit}`;
fetch(url) 
.then((res)=>res.json())
.then((data)=>{
       console.log(data);

       let placeholder=document.getElementById("data-output");
       placeholder.innerHTML="";
       let i;

       if(page!==1){
              i=limit *(page-1)+1;
       }else{
              i=1
       }

       let out="";
       for(let user of data.products){
                out +=`
                     <tr>
                        <td>${user.id}</td>
                         <td>${user.brand}</td>
                         <td>${user.category}</td>
                          <td>${user.price}</td>
                          <td onClick="onEdit('i')" id="editBtn">Edit</td>
                          <td onClick="onDelete('i')" id="deleteBtn">Delete</td>
                     </tr>
                `
       }
       placeholder.innerHTML=out;
})

}




function onEdit(i){
       alert("edit");
       console.log("edit")
}


function onDelete(i){
        alert("delete")
        fetch('https://dummyjson.com/products/1', {
              method: 'DELETE',
            })
            .then(res => res.json())
            .then((result)=>{
                console.log(result)
                getData()
            })
}