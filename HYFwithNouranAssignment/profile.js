

document.getElementById("results").innerHTML = 
[
   "<h1 class='list'>Name:</h1>",
   "<h2>" + localStorage.getItem("name") + "</h2>",
   "<h1 class='list'>Age:</h1>",
   "<h2>" + localStorage.getItem("age") + "</h2>",
   "<h1 class='list'>Hobby:</h1>",
   "<h2>" + localStorage.getItem("hobbies") + "</h2>",
   "<h1 class='list'>Image:</h1>",
   "<h2>" + localStorage.getItem("image") + "</h2>",
   "<h1 class='list'>Gender:</h1>",
   "<h2>" + localStorage.getItem("gender") + "</h2>"
];

function cancel()
{
   localStorage.removeItem("name");
   localStorage.removeItem("age");
   localStorage.removeItem("hobbies");
   localStorage.removeItem("image");
   localStorage.removeItem("gender");
   window.location = "form.html";
}