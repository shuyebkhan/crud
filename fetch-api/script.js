const url="https://jsonplaceholder.typicode.com/posts";


const getButton=document.querySelector("#getPost");
const createButton = document.querySelector("#createPost");
const updateButton=document.querySelector("#updatePost");
const patchButton=document.querySelector("#patchPost");
const deleteButton=document.querySelector("#deletePost");



// get Posts.
const getPosts =async ()=>{
    const response =await fetch(url);
    const posts = await response.json();
     return posts;
}


// create Post.
 const createPost = async (newPost)=>{
   const response = await fetch( url,{
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((posts) => console.log(posts));
 }




// Updated post.
     const updatedPost =async (newPost,id) =>{
        const response = await fetch( `${url}/${id}`,{
            method: 'PUT',
            body: JSON.stringify(newPost),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((posts) => console.log(posts));
     }


// Patch Post.
   const patchPost = async(newPost,id)=>{
    const response = await fetch( `${url}/${id}`,{
        method: 'PATCH',
        body: JSON.stringify(newPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((posts) => console.log(posts));   

   }

   


//    delete Post
const deletePost =async (id)=>{
    const response = await fetch( `${url}/${id}`,{
        method: 'DELETE',
       
      })
        .then((response) => response.json())
        .then((posts) => console.log(posts));
}






// getButton.
getButton.addEventListener("click", async ()=>{
      const posts =await getPosts();
      console.log(posts);


      let placeholder =document.querySelector("#data-output");
      placeholder.innerHTML="";


      let showdata="";
      for(let post of posts.slice(80)){
             
           showdata+=`
                     <tr>
                         <td>${post.id}</td>
                         <td>${post.title}</td>
                         <td>${post.body}</td>
                     </tr>      
           `
      }
      placeholder.innerHTML=showdata;

})

// CreateButton.
 createButton.addEventListener("click" ,async ()=>{
          const newPost ={
              title:"New Post Title",
              body:"New Post Body",
              userId:0991,
          };

    const createdPost =await createPost(newPost);
    //   console.log(createdPost);
 })


// uddateButton.
updateButton.addEventListener("click", async () =>{
       const newPost ={
           id:2,
           title:"Updated Post Title",
           body:"Updated Post Body",
           userId:1,
       };

       const updatePost = await updatedPost(newPost,2);
    //    console.log(updatePost);
})


// patchButton.
patchButton.addEventListener("click" , async() =>{
       const newPost ={
           title:"Change the title",
       };

       const patchedPost= await patchPost(newPost,2);
        // console.log(patchedPost);
})





deleteButton.addEventListener("click", async ()=>{
       const deletedPost=await deletePost(2);
    //    console.log(deletedPost);
})