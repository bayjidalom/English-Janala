const loadLessons = () => {

    fetch("https://openapi.programming-hero.com/api/levels/all")   // promise of response
        .then(res => res.json())                // promise of json data
        .then((json) => displayLessons(json.data))       // cz array in a object named 'data'      // send to line 10

}

const displayLessons = (lessons) => {
    // console.log(lessons)
    // step-1 get the container and empty
    const levelContainer = document.getElementById('level-container')
    levelContainer.innerHTML = "";

    // step-2 get into every lessons
    for (let lesson of lessons) {
        console.log(lesson)
        // step-3 create element
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
        
                    <button class="btn btn-outline btn-primary">
                     <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
                    </button>
                        
        `

        // step-4 append into container
        levelContainer.appendChild(btnDiv)

    }


}

loadLessons()