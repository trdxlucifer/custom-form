const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


function Mail() {

 var name = document.getElementById("name").value;
 var email = document.getElementById("mail").value;
 var phone =document.getElementById("phone").value;
 var text = document.getElementById("text").value;
 var body = 'name' +name +'<br/> email' +email+'<br/> phone'+phone +'<br/> text'+text
   
 Email.send({
      Host: "smtp.gmail.com",
      Username: "snghdamon@gmail.com",
      Password: "lybbbgyemcznombk",
      To: 'snghdamon@gmail.com',
      From: document.getElementById("mail").value,
      Subject: "New Enquiry of Contact Form",
      Body: body
    }).then(
      message => alert("Message sent")
    );
  }

