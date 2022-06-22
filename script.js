function submit_go() {
    document.querySelector("#search_form").submit();
}

input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        submit_go();
    }
});

function send_email() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "b2027acadcomm@gmail.com",
        Password: "<email password>",
        To: '<recipient’s email address>',
        From: "<sender’s email address>",
        Subject: "<email subject>",
        Body: "<email body>",
    }).then(
        message => alert("mail sent successfully")
    );
}