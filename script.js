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