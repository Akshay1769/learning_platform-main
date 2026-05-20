async function loadCourse() {

    const courseId =
    localStorage.getItem("courseId")

    if (!courseId) {

        window.location.href = "courses.html"
        return

    }

    // COURSE DATA

    const { data: course, error } =
    await supabaseClient
    .from("courses")
    .select("*")
    .eq("id", courseId)
    .single()

    if (error) {

        console.log(error)
        return

    }

    // COURSE TITLE

    document.getElementById("courseTitle")
    .innerText = course.title

    // BREADCRUMB TITLE

    document.getElementById(
        "breadcrumbCourseTitle"
    ).innerText = course.title

    // COURSE DESCRIPTION

    document.getElementById(
        "courseDescription"
    ).innerText = course.description

    // COURSE IMAGE

    document.getElementById(
        "courseImage"
    ).src = course.image


    // LESSONS

    const { data: lessons, error: lessonsError } =
    await supabaseClient
    .from("lessons")
    .select("*")
    .eq("course_id", courseId)
    .order("lesson_no", { ascending: true })

    if (lessonsError) {

        console.log(lessonsError)
        return

    }

    let lessonsHTML = ""

    lessons.forEach((lesson, index) => {

        lessonsHTML += `

        <div class="accordion-item">

            <h2 class="accordion-header">

                <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#lesson${index}">

                    Lesson ${lesson.lesson_no} :
                    ${lesson.title}

                </button>

            </h2>

            <div
            id="lesson${index}"
            class="accordion-collapse collapse">

                <div class="accordion-body">

                    ${lesson.content}

                </div>

            </div>

        </div>

        `

    })

    document.getElementById(
        "lessonsContainer"
    ).innerHTML = lessonsHTML

}

loadCourse()