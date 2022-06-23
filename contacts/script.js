
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