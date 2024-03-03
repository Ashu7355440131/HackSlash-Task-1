let modes=document.getElementById("mode");
let body=document.querySelector("body");
let currmode="light";
modes.addEventListener("click",()=>{
    if(currmode=="light"){
        currmode="dark";
        body.style.color="white";
        body.style.transition="1s";
        body.style.backgroundColor="black";
        modes.style.border="1px solid white";
        
    }
    else{
        currmode="light";
        body.style.color="black";
        body.style.backgroundColor="white";
    }
    console.log(currmode);
})
    
 
