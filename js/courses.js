async function loadCourses() {

    const { data, error } =
    await supabaseClient
    .from("courses")
    .select("*")

    if (error) {

        console.log(error)
        return

    }

    let html = ""

    data.forEach((course) => {

        html += `

        <div class="col-lg-3 col-md-6 wow fadeInUp">

            <div class="course-item shadow">

                <div class="position-relative overflow-hidden text-light image">

                    <img class="img-fluid"
                    src="${course.image}"
                    alt="">

                </div>

                <div class="p-3">

                    <h5 class="mb-3">

                        ${course.title}

                    </h5>

                    <p>

                        ${course.description}

                    </p>

                    <button
                    class="btn btn-primary"

                    onclick="openCourse(${course.id})">

                    Open Course

                    </button>

                </div>

            </div>

        </div>

        `
    })

    document.getElementById("courseCards")
    .innerHTML = html
}

loadCourses()

function openCourse(id) {

    localStorage.setItem("courseId", id)

    window.location.href = "single.html"

}