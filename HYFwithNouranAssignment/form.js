function validation() {


   let theName = document.getElementById('name').value;
   localStorage.setItem("name", theName);
    name = localStorage.getItem("name");

   let theAge = document.getElementById('age').value;
   localStorage.setItem("age", theAge);
    age = localStorage.getItem("age");

   let theHobbies = document.getElementById('hobbies').value;
   localStorage.setItem("hobbies", theHobbies);
    hobbies = localStorage.getItem("hobbies");

   let theImage = document.getElementById('image').value;
   localStorage.setItem("image", theImage);
    image = localStorage.getItem("image");
    
    if(document.getElementById('male').checked){
        let theMale = document.getElementById('male').value;
        localStorage.setItem("gender", theMale);
        gender = localStorage.getItem("gender");
      }else if(document.getElementById('female').checked){
        let theFemale = document.getElementById('female').value;
        localStorage.setItem("gender", theFemale);
        gender = localStorage.getItem("gender");
      }
    
    
    
  //Start validation of the inputs.. 
   if (name == "" && age == "" && hobbies == "" && image == "") {
      document.getElementById("results").innerHTML = "Please Fill All Fields";
      document.getElementById("validateName").innerHTML = "Please The Name Is Required!";
      document.getElementById("validateAge").innerHTML = "Please Put Your Age!";
      document.getElementById("validateHobbies").innerHTML = "Please Choose Your Hobbies!";
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
      document.getElementById("validateHobbies").innerHTML = "Please Choose Your Hobbies!";
      return false;
   }
   //to change the image
   else if (image == ""){
    //this needs fix imporatant
    //let theImage = '<img id = "x" src="profile.png" width="70px" height="70px">';
     // localStorage.setItem("image", theImage);
     // image = localStorage.getItem("image");
      }
    
    else {
      window.location = "profile.html";
   }
  
const addForm = document.getElementById('form-inline');
      addForm.addEventListener('submit', function(e) {
         e.preventDefault();
      });
const submit = document.getElementById("submit");
      submit.addEventListener('submit', function(e){
      });
  
}//the end of th function
 
  
  