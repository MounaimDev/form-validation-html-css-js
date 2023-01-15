document.getElementById("myForm").onsubmit = function() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (name == "" || email == "") {
    alert("Name and email must be filled out");
    return false;
  }
}
