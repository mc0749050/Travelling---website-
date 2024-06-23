let searchDiv = document.getElementById("searchDiv");
let searchopenbtn = document.getElementById("searchopendivbtn");
searchopenbtn.addEventListener("click", ()=>(
  searchDiv.style.display = "block" ));
  
function maketripdivoff(){
  document.getElementById("maketripdiv").style.display = "none";
}
function maketripdivon(){
  document.getElementById("maketripdiv").style.display = "block";
}

//email send
function sendMail(){
      (function(){
        emailjs.init("blOwV5vbcgf0DWkXf");
      })();
      
      
      var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        city: document.getElementById("city").value,
      };
      
      var serviceID = "service_zbrp8qc";
      var templateID = "template_p4snab2";
      
      emailjs.send(serviceID, templateID, params).then( res => {
        console.log("email send successful");
      })
      .catch();
      

   
    }
    
    
