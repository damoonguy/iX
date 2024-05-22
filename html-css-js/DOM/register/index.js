const onSubmit = () => {
    console.log("submutted");

    if (form.checkValidity()) {
        const fn = document.getElementById("firstName");
        const ln = document.getElementById("lastName");
        const bio = document.getElementById("bio");
        const email = document.getElementById("email");
        const passwd = document.getElementById("password");
        console.log(fn, ln, bio, email, passwd);

    } else {
        console.log("Form not valid");
    }

    form.classList.add("was-validated");


}