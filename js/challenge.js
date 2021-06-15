const timer = document.querySelector('#counter')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const heart = document.querySelector('#heart')
const likeList = document.querySelector('ul.likes')
const pause = document.querySelector('#pause')
const submitComment = document.querySelector('#submit')
const commentText = document.querySelector('#comment-input')
const commentList = document.getElementById('list')
const submitForm = document.querySelector('#comment-form')

let running = true

function addSecond(){
    if (running == true){
        timer.innerText = parseInt(timer.innerText) + 1
    }
}

plus.addEventListener('click', function(){
    timer.innerText = parseInt(timer.innerText) + 1
})

minus.addEventListener('click', function(){
    timer.innerText = parseInt(timer.innerText) - 1
})

pause.addEventListener('click', function(){
    if (running === true){
        running = false
        
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        submitComment.disabled = true

        pause.innerText = 'resume'


    } else if (running === false){
        running = true

        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        submitComment.disabled = false

        pause.innerText = 'pause'
    }
})

heart.addEventListener('click', function(){

    let currentNumber = timer.innerText;
    let likeListContents = document.querySelectorAll('.like');

    let result = [...likeListContents].find(function(entry){
        if (entry.innerText.split(' ')[0] == currentNumber){
            return entry
        }
    })

    if (result === undefined) {

        let newEntry = document.createElement('li')
        newEntry.innerText = `${currentNumber} has been liked 1 time!`
        newEntry.className = 'like'
        likeList.append(newEntry);

    } else {

        let currentString = result.innerText.split(' ')
        let currentLikes = parseInt(currentString[currentString.length-2])
        result.innerText = `${currentNumber} has been liked ${currentLikes + 1} times!`

    }
})

submitForm.addEventListener('submit', function(event){
    event.preventDefault()
})


submitComment.addEventListener('click', function(){

    let newComment = document.createElement("li")

    newComment.innerText = commentText.value

    if (newComment.innerText !== ""){

        commentText.value = ''
        commentList.append(newComment)
    }
})

setInterval(addSecond, 1000)