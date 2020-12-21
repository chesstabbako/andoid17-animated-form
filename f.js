
var nombre= document.getElementById("nombre");
var mail= document.getElementById("mail");
var pass= document.getElementById("pass");
var warnings= document.querySelector(".warnings");

document.getElementById("enviar").addEventListener("click", (e)=>{
    
   e.preventDefault;
   
   warnings.innerHTML="";
   
   var regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
   if(nombre.value.length<6){
         
   warnings.innerHTML+= "<p>Nombre no válido<p>";
        
   }
   
   if(!regexEmail.test(mail.value)){
         
    warnings.innerHTML+= "<p>Email no válido<p>";
         
   }
   
   if(pass.value.length<8){
         
    warnings.innerHTML+= "<p>Email no válido<p>";
         
   }
   
});




























