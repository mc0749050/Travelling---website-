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

document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault();
            // Your code here to handle the form data
            document.getElementById("requestsubmit").style.display = "block"
        });

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
      

    a = document.getElementById("name").value;
    b = document.getElementById("email").value;
    c = document.getElementById("city").value;
    d = document.getElementById("ph").value;
    e = document.getElementById("num").value;
    
    if (a == "" || b == "" || c == "" || d == "" || e == "") {
      console.log("enter data")
    }
    else {
         
   let parent = document.getElementById("notificationdiv");
   let newdate = new Date();
   let hour = newdate.getHours();
   let minute = newdate.getMinutes();
   let newformat = hour >= 12 ? 'PM' : 'AM';

    // Find current hour in AM-PM Format
    hour = hour % 12;

    // To display "0" as "12"
    hour = hour ? hour : 12;
    minute = minute < 10 ? '0' + minute : minute;


   const newDiv = document.createElement('div');
   newDiv.classList.add("removenotif");
    newDiv.innerHTML = ` <div class="notification">
      <div id="notification-head">
    <p id="time"><span id="hour">${hour}</Span>:<span id="minute">${minute}</span></p>
    <i onclick="closenotification()" class="fa-solid fa-xmark"></i>
    </div>
    <p id="massage">Your <span id="massagecity">${document.getElementById("city").value}</span> trip request has been submitted, Our team will be contact you soon.</p>
    </div>`
    
      parent.appendChild(newDiv);
      
   document.getElementById("nobell").style.display = "none";
   document.getElementById("nonotif").style.display = "none";
    
      document.getElementById("maketripdiv").style.display = "none";
    }
    }
    
    function notificationon() {
      document.getElementById("notificationdiv").style.display = "block";
    }
function notificationoff() {
      document.getElementById("notificationdiv").style.display = "none";
    }

function closenotification() {
  document.querySelector(".removenotif").style.display = "none";
  document.getElementById("nobell").style.display = "block";
  document.getElementById("nonotif").style.display = "block";
}