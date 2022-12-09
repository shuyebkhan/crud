let submitbtn = document.querySelector("#submitbtn");

  
 function setLocalStroage (){
               if(localStorage.getItem("userData")){
                     let showDiv=document.querySelector("#show");
                     showDiv.innerHTML = "";
                     let arr=JSON.parse(localStorage.getItem('userData'));
                   
                        arr.forEach((user,id) => {
                             let newDiv=document.createElement("div");
                             newDiv.setAttribute("class","newData");
                               let htmldata=`Name:- <span>${user.name} </span>
                                             Password:- <span>${user.password}</span>
                                              <button onClick='onDelete(${id})'>Delete</button>
                                              <button id="btnEdit" onClick='onEdit(${id})'>Edit</button>
                                           `;
                                
                                     newDiv.insertAdjacentHTML("afterbegin",htmldata);
                                     showDiv.insertAdjacentElement("afterbegin",newDiv)
                        });
               }else{
                        let arr =[]
                        let arrData ={
                               name:"",
                               password:""
                        }

                        arr.push(arrData);
                        localStorage.setItem("userData",JSON.stringify(arr));
                        alert("data Pushed")
               }
 }

       
      setTimeout(()=>{
             setLocalStroage();
      },2)



// crud operation add submit/ add function.
submitbtn.addEventListener("click", (e)=>{

     e.preventDefault();
    
     let arr = JSON.parse(localStorage.getItem("userData"));

     let name =document.querySelector("#name").value;
     let password=document.querySelector("#password").value;


     if(name.length <=0  && password.length <=0){
            alert("Plz fill the input");

     } else if(name.length > 0 && password.length >0){
               
            let arrData ={
                  name : name,
                  password :password
            }
                
            //  const arr=[]
            arr.push(arrData);
            localStorage.setItem("userData", JSON.stringify(arr));
              setLocalStroage();
              alert("ADD Successfully");   

                name =document.querySelector("#name").value="";
                password=document.querySelector("#password").value="";

     }else{
              alert("enter something")
     }

})






// DELTE  FUNCTION.
function onDelete(id){
       let arr = JSON.parse(localStorage.getItem("userData"));
       // let deleteArr =[...arr];
       arr.splice(id,1);
       // arr=[...deleteArr];
       localStorage.setItem("userData",JSON.stringify(arr)) ;
       setLocalStroage();
}





  
// ON EDIT.

function onEdit(id){
        let arr =JSON.parse(localStorage.getItem('userData'));
        let name=document.querySelector("#name").value = arr[id].name;
        let password=document.querySelector("#password").value = arr[id].password;
         

           submitbtn.setAttribute('disabled',true);

           let update=document.createElement("button");
           let form =document.querySelector("#form");
           let btnEdit=document.querySelectorAll("#btnEdit");
             update.innerHTML="Update";

             
              btnEdit.forEach((elements)=>{
                     elements.setAttribute("disabled",true)
              })
                    
              form.insertAdjacentElement("beforeend",update);


              update.addEventListener("click", (e) =>{
                   e.preventDefault();

                   let newname=document.querySelector('#name');
                   let newpassword= document.querySelector("#password");
                   arr.splice(id,1 ,{name:newname.value, password:newpassword.value});
                   localStorage.setItem("userData",JSON.stringify(arr));
                   setLocalStroage();
                    newname.value="";
                    newpassword.value="";
                    form.removeChild(form.lastElementChild);
                    submitbtn.removeAttribute("disabled");
                 
              })
      }
