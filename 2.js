function submit(btn){
    var user=document.querySelector("#username").innerHTML;
    
    var pass=document.querySelector("#password").innerHTML;
    
    var mail=document.querySelector("#email").innerHTML;


    if(user==="")
    {
        alert("username is requied");
    }

    if(pass==="")
    {
        alert("password is requied");
    }

    if(mail==="")
    {
        alert("email is requied");
    }



    var newElement=Document.querySelector("#display").clone(true);
    newElement.children[0].visibility.visible;
    newElement.children[0].innerHTML=user;
    newElement.children[1].innerHTML=pass;
    newElement.children[1].visibility.visible;
    newElement.children[1].visibility.visible;
    newElement.children[2].innerHTML=mail;

    Document.querySelector("#display").insertbefor(newElement,Document.querySelector("#display").fistchild);


    document.querySelector("#username").innerHTML="";
    document.querySelector("#password").innerHTML="";
    document.querySelector("#email").innerHTML="";

}