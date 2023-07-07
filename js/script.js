


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


function sendEmail(userName,userEmail,userMessage){
  let URL = 'http://127.0.0.1:3000/thankyou.html'
  window.location.href = URL;
  window.location.replace(URL);
  fetch("https://formsubmit.co/ajax/markowski.patrick@gmail.com",{
    method:"POST",
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },

    body:JSON.stringify({
      'name': userName,
      'email':userEmail,
      'message':userMessage
    })
  })
    .then(response=>response.json())
    .then(data => console.log(data))
    .catch(error=>console.log(error));

  
}