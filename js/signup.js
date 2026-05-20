const signupForm =
document.getElementById("signupForm")

signupForm.addEventListener("submit", async (e) => {

    e.preventDefault()

    const username =
    document.getElementById("username").value

    const email =
    document.getElementById("email").value

    const password =
    document.getElementById("password").value

    const { data, error } =
    await supabaseClient.auth.signUp({

        email: email,
        password: password,

        options: {

            data: {
                username: username
            }

        }

    })

    if (error) {

        alert(error.message)
        return

    }

    alert("Signup Successful")

    window.location.href = "login.html"

})