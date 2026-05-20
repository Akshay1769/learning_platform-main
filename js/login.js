const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault()

    const email =
    document.getElementById("email").value

    const password =
    document.getElementById("password").value

    const { data, error } =
    await supabaseClient.auth.signInWithPassword({

        email: email,
        password: password

    })

    if (error) {

        alert(error.message)
        return

    }

    alert("Login Successful")

    window.location.href = "courses.html"

})