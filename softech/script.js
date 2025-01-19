document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    const name = this.querySelector("input[type='text']").value.trim();
    const email = this.querySelector("input[type='email']").value.trim();
    const message = this.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";
    confirmationMessage.style.opacity = 0;
    confirmationMessage.style.transition = "opacity 0.5s";

    setTimeout(() => {
        confirmationMessage.style.opacity = 1;
    }, 100);

    this.reset();
});
