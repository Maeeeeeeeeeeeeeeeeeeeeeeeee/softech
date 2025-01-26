document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const name = this.querySelector("input[type='text']").value.trim();
    const email = this.querySelector("input[type='email']").value.trim();
    const message = this.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }


    const modal = document.getElementById("confirmation-modal");


    modal.style.display = "flex";

 
    setTimeout(() => {
        modal.style.display = "none";
    }, 2000);

    
    // this.reset();
});
