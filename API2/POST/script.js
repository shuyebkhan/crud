const myform =document.getElementById('myform');

myform.addEventListener('submit',function(e){
     e.preventDefault();


      const formData = new FormData(myform);
      const data= Object.fromEntries(formData);

      fetch("https://reqres.in/api/users", {
            method:'post',
             headers:{
                  'Content-Type' : 'application/json'
             },
             body: JSON.stringify(data)
      }).then(res => res.json())
       .then(data => console.log(data))
       .catch(err =>console.log(err));
       
 })