function navside(){
   
    var navbar=document.getElementById("togglenav");
    navbar.classList.toggle('show');
}

function imagebutton(){
    
    var ok=document.getElementById("buttonclick").style.display;
    console.log(ok);
    if(ok==='block'){
        document.getElementById("buttonclick").style.display = 'none';
    }else{
        document.getElementById("buttonclick").style.display = 'block';
    }
    
    // console.log(imge);
    // img.src='images/pappericon.jpeg';
    // imge.style.display = 'block';
   
}
