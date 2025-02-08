 // Functions for select elems with id & class
 var $ = document;
 function _id(id_name) {
   return $.getElementById(id_name);
 }

 function _class(class_name) {
   return $.getElementsByClassName(class_name);
 }

 // Select Elems0
 
 var togglePassword = _class("toggle-password");
 var passwordField = _id("password-field"); 
//  console.log(passwordField.type)
// Fire click event on eye icon

 passwordField.type = "password";
 togglePassword[0].addEventListener("click", function () {
   if (passwordField.type == "text") {
     passwordField.type = "password";
     togglePassword[0].classList.remove("active");



   } else {
    // if (passwordField.type == "password")
     passwordField.type = "text";
     togglePassword[0].classList.add("active");
   }
 })


 console.log("sam")