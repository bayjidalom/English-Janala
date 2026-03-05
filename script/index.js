const loadLessons = () => {

    fetch("https://openapi.programming-hero.com/api/levels/all")   // promise of response
        .then(res => res.json())                // promise of json data
        .then((json) => displayLessons(json.data))

}


const loadLevelWord = (id) => {

    const url = `https://openapi.programming-hero.com/api/level/${id}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWord(data.data))
};

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML = "";
    // { id: 19, level: 1, word: "Sincere", meaning: "সত্‍ / আন্তরিক", pronunciation: "সিনসিয়ার" }

    words.forEach(word => {
        console.log(word)
        console.log(word)
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="text-2xl font-bold">${word.word}</h2>
            <p class="font-semibold ">Meaning /Pronounciation</p>

            <div class="font-bangla text-2xl font-medium">${word.meaning}/${word.pronunciation}</div>

            <div class="flex justify-between items-center">

                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]">
                    <i class="fa-solid fa-circle-info"></i>
                </button>

                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]">
                    <i class="fa-solid fa-volume-high"></i>
                </button>

            </div>

        </div>
        `;

        wordContainer.append(card);

    });

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
        
                    <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
                     <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
                    </button>
                        
        `

        // step-4 append into container
        levelContainer.appendChild(btnDiv)

    }


}

loadLessons()