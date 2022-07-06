const inputs = document.querySelectorAll(".input");
const input = document.getElementById("form");

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

function sendEmail() {
  console.log("done done")
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "trdxlucifer1@gmail.com",
    Password : "BC28538FEFEBB669117D8696342C6EE8BDFC",
    To : 'singhdepu566@gmail.com',
    From : "deependrajaiswan@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body",
    
}).then(
  message => alert("Message Sent Succefully")
);
}