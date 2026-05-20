async function protectPage(page) {

    const {
        data: { session }
    } = await supabaseClient.auth.getSession()

    if (!session) {

        window.location.href = "login.html"
        return

    }

    window.location.href = page
}