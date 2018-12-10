

function validation() {


   let name = document.getElementById('name').value;
   let age = document.getElementById('age').value;
   let hobbies = document.getElementById('hobbies').value;
   let image = document.getElementById('image').value;
   let male = document.getElementById('male').value;
   let female = document.getElementById('female').value;

   if (name == "" && age == "" && hobbies == "" && image == "") {
      document.getElementById("results").innerHTML = "Please Fill All Fields";
      document.getElementById("validateName").innerHTML = "Please The Name Is Required!";
      document.getElementById("validateAge").innerHTML = "Please Put Your Age!";
      document.getElementById("validateHobbies").innerHTML = "Please Write Your Hobbies!";
      document.getElementById("validateImage").innerHTML = "Please put Your Image!";
   }
   //to validate the name!!
   if (name == "") {
      document.getElementById("validateName").innerHTML = "Please The Name Is Required!";
      return false;
   }
   else if ((name.length < 3) || (name.length > 15)) {
      document.getElementById("validateName").innerHTML = "Your Name Must Be Between 3 And 15 and just characters!";
      return false;
   }
   else if (!isNaN(name)) {
      document.getElementById("validateName").innerHTML = "Your Name Must Be just characters!";
      return false;
   }
   //to validate the age
   else if (age == "") {
      document.getElementById("validateAge").innerHTML = "Please Put Your Age!";
      return false;
   }
   if (isNaN(age)) {
      document.getElementById("validateAge").innerHTML = "Your Age Must Be just Numbers!";
      return false;
   }
   //to validate the gender

   //to validate the hobbies
   else if (hobbies == "") {
      document.getElementById("validateHobbies").innerHTML = "Please Write Your Hobbies!";
      return false;
   }
   //to change the image
   
  
    else {
      document.getElementById("profile").innerHTML = '<img id = "x" src="profile.png" width="70px" height="70px">' + '<br>' + name + '<br>' + age + '<br>' + hobbies + '<br>';
   }
  



}//the end of th function
   //{important}
   function register() {
      const addForm = document.getElementById('form-inline');
      addForm.addEventListener('submit', function (e) {
         //window.location = "profile.html";
         e.preventDefault();
      });

   }
   function cancel() {
      document.getElementById('form-inline').addEventListener("submit", function (e) {
         document.getElementById("profile").innerHTML = "";
      });
   }
  
