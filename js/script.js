let form = document.querySelector(".myform");
form.addEventListener("submit",function(e){
  e.preventDefault();

  let formdata = new FormData(this);

  let fName = formdata.get("fname");
  let lName = formdata.get("lname");
  let email = formdata.get('email');
  let message = formdata.get('message');

  let name = fName +" "+ lName;

  sendEmail(name,email,message);
  
});


function sendEmail(userFullName,userEmail,userMessage){

  

  fetch("https://formsubmit.co/ajax/markowski.patrick@gmail.com",{
    method:"POST",
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body:JSON.stringify({
      'name': userFullName,
      'email':userEmail,
      'message':userMessage
    })

  })
    .then(response=>response.json())
    .then(data => console.log(data))
    .catch(error=>console.log(error));
    
    setInterval(sendUserOut,500);
}

function sendUserOut(){
  window.location.href="aphex29.github.io/thankyou.html";
  return false;
}