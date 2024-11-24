//alert("Don't Forget to Pray!");
function submit() {
  const userName = document.querySelector(".userName").value;
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;

  const message = document.querySelector("h4");

  if (userName && email && password) {
    message.innerHTML = `Thank you <strong>${userName}</strong>, for filling out the form!`;
    const link = document.querySelector(".link").setAttribute("href", "https://drive.google.com/file/d/1Fk0oz2-1N95cltHcNOJVm5PJNpZJcL9w/view?usp=drivesdk");
    message.style.color = "whitesmoke";
    message.style.textAlign = "center";
    message.style.fontFamily = "courier new";
    document.querySelector(".home").setAttribute("href","home-evan.html");
    document.querySelector(".appoint").setAttribute("href","appoint.html");
    document.querySelector(".about").setAttribute("href","about.html");

    
    let linkText = document.querySelector(".link");
    linkText.innerHTML = "Download Scriptures reference";
    linkText.style.color= "whitesmoke";
    linkText.style.fontFamily = "courier new";
    linkText.style.textDecoration = "none";
    linkText.style.textAlign = "center";
  } else {
    message.innerHTML = "Please fill in all the fields.";
    message.style.color = "grey";
    alert("You cannot go beyond this page unless you fill in the form!");
  }
  
}
