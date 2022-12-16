// const url="https://api.github.com/gists?per_page=10&page=10";
// https://api.github.com/repositories/1300192/issues?per_page=2&page=2

let limit = 10;
let page = 1;

function pageChange(num) {
    
  console.log(num);
  page = page + num;
  console.log("page", page);
  if (page < 1) {
    page = 1;
    getData(limit, page);
  } else {
    getData(limit, page);
  }
}




getData(limit,page);


function pageno(page){
       getData(limit,page)
};



function getData(limit, page) {
  const url = `https://api.github.com/gists?per_page=${limit}&page=${page}`;
  fetch(url)
    .then((response) => response.json())
    .then((products) => {
      console.log("products", page);
      let placeholder = document.querySelector("#data-output");
      placeholder.innerHTML = "";
      let i=1 ;
      if(page>1){
          i = limit *(page-1) +1;
                 console.log(i)
      }else{
        i=1

      }

      let out = "";

      for (let product of products) {
        out += `
                <tr>
                   <td>${i++}</td>
                   <td><img src='${product.owner.avatar_url}'> </td>
                    <td>${product.owner.login}</td>
                    <td>${product.owner.id}</td>
                    <td>${product.node_id}</td>
                    <td>${product.created_at}</td>
                     <td>${product.updated_at}</td>
                     <td onClick="onEdit(${'id'})" id="editBtn">Edit</td>
                     <td onClick="onDelete(${'id'})" id="deleteBtn">Delete</td>
                  
                
                    
                   </tr>
                      
                   `;

        console.log(product);
      }
      placeholder.innerHTML = out;

    });
}




function onDelete(id){
  alert("delete");
      
}