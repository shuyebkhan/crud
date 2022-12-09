const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

const head = document.createElement("h1");
head.setAttribute("id", "head");
container.appendChild(head);
head.innerText = "CRUD OPERATION WITH JAVASCRIPT";

const form = document.createElement("form");
form.setAttribute("id", "form");
container.appendChild(form);



function createElement(element,attribute,attributeValue){
           let newElement=document.createElement(element);

           attribute.forEach((element,i)=>{
               newElement.setAttribute(attribute[i], attributeValue[i]);
           });

           return newElement
};

const input1 = createElement("input" ,["id","type","class"], ["name","text","cl1"]);
console.log(input1);

const btn = createElement("input", ["id", "type", "value"], ["btn","button", "submit"]);
console.log(btn);
form.appendChild(input1);
form.appendChild(btn);



// ADDEVENTLISTNER ON BUTTON.
const addbtn= document.getElementById("btn")
addbtn.addEventListener("click", manageData);
// END BUTTON;




const msg=createElement("div",["id"],["msg"]);
console.log(msg)
container.appendChild(msg);


const h2=createElement("h2",["id"],["head2"]);
console.log(h2);
container.appendChild(h2);
h2.innerText="List";


const table = document.createElement("table");
table.setAttribute("border","1")
container.appendChild(table);


const thead= document.createElement("thead");
table.appendChild(thead);

const tr=document.createElement("tr");
thead.appendChild(tr);


const td1=document.createElement("td");
td1.innerText="S.No";
const td2=document.createElement("td");
td2.innerText="Name";
const td3=document.createElement("td");
td3.innerText="Action";

tr.append(td1,td2,td3);



const tbody=document.createElement("tbody");
// tbody.setAttribute("id","root");
// console.log(tbody);
table.appendChild(tbody);




// FUNCTIONALITIY START.


let id="";
selectData();

function manageData(){
       document.getElementById('msg').innerHTML="";
      let name=document.getElementById('name').value;

      if(name==''){
           document.getElementById('msg').innerHTML="Please Fill Your Name";
      } else{
               if(id==''){
                        // IF USER ADD DATA.
                      let arr=JSON.parse(localStorage.getItem('userData'))  ;
                   
                      if(arr==null){
                           let data=[name];
                           localStorage.setItem("userData",JSON.stringify(data));
                           selectData()
                      }else{
                             arr.push(name);
                             localStorage.setItem("userData",JSON.stringify(arr));
                             selectData()
                      }

                      document.getElementById('name').value='';
                       document.getElementById('msg').innerHTML="Data added";
               }else{
                    //    USER EDIT DATA.
              
              
                    
               }

               selectData();
      }
        

}





// DATA POPULATE.
function selectData(){
         let arr=JSON.parse(localStorage.getItem("userData"));
tbody.innerHTML = ""
         if(arr !== null){
           console.log(arr,"array")
           arr.forEach((element,i)=>{
                    let tr = document.createElement("tr")
                    let td = document.createElement("td")
                    td.innerText = element;
                    let srNo = document.createElement("td")
                    srNo.innerText = i +1;

                    
                     let editbtn=document.createElement("button");
                    editbtn.innerHTML=` <button id="btnEdit" onClick='onEdit(${i})'>Edit</button>`;
                   
                    let deletbtn=document.createElement("button");
                    deletbtn.innerHTML=`<button onClick='onDelete(${i})'>Delete</button>`;

                   
    
                    

                     tr.append(srNo,td,editbtn,deletbtn)
                     tbody.append(tr)
                })

                     
                 
         }
}

// localStorage.clear()


function onDelete(i){
     if (confirm('Are you sure to delete this record ?')) {
    let arr=JSON.parse(localStorage.getItem('userData'));
    arr.splice(i,1);
    localStorage.setItem("userData",JSON.stringify(arr));
     selectData();
     }
};



function onEdit(i){
     let arr=JSON.parse(localStorage.getItem('userData'));
      document.getElementById('name').value=arr[i];
      localStorage.setItem("userData",JSON.stringify(arr));
     
      
      
}