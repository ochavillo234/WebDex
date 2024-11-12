function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
    
}

function sendMail(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Basic validation
    if (!name) {
        showAlert("Please enter your name.");
        return;
    }
    
    if (!email || !email.includes("@")) {
        showAlert("Please enter a valid email address.");
        return;
    }
    
    if (!message) {
        showAlert("Please enter your message.");
        return;
    }

    let params = {
        name: name,
        email:email,
        message:message,
    };
    
    console.log("Sending email...");
    
    emailjs.send("service_v9sjpne", "template_3nooiay", params)
        .then(function(response) {
            console.log("Email Sent:", response);

            document.getElementById("conform").style.display = "none";
            document.getElementById("thank-you-message").style.display = "block";
        }), (function(error) {
            console.log("Error sending email: ", error);
            showAlert("There was an issue sending your email. Please try again later.");
        });
}

function showForm() {
    document.getElementById("thank-you-message").style.display = "none";
    document.getElementById("conform").style.display = "block";
    document.getElementById("conform").reset();  
}

function showAlert(message) {
    alert(message);  
}

