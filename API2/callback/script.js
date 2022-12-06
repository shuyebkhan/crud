const students=[
    {name:"Harry",subject:"javascript"},
    {name:"Rohan", subject:"Machine Learning"}
    ]
    
    
    
    function enrollstuent(student,callback){
    setTimeout(function(){
    students.push(student);
    console.log("student has been enrolled");
    callback();
    },3000)
    };
    
    function getstudent(){
    setTimeout(function(){
    let str="";
    students.forEach(function(student){
    str += `<li>${student.name}</li>`
    });
    document.getElementById("list").innerHTML= str;
    console.log("student have been fetched");
    },1000);
    };
    
    
    let newStudent={name:"thapa" , subject:"python"};
    enrollstuent(newStudent,getstudent);