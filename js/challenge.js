//Creating Counter//
const counter = document.querySelector('#counter')

let interval = setInterval(intervalFunction, 1000)
function intervalFunction() {
    num = counter.innerHTML
    num++
    counter.innerHTML = num
}

//Creating Add//
const plus = document.querySelector('#plus')
plus.addEventListener('click', function increase() {
    let num = counter.innerHTML 
    num++
    counter.innerHTML = num
})
//Creating Subtract//
const minus = document.querySelector('#minus')
minus.addEventListener('click', function decrease() {
    let num = counter.innerHTML 
    num--
    counter.innerHTML = num
})
//Creating Like//
const heart = document.querySelector('#heart')
const like = document.querySelector('.likes')
let likeArray = []
heart.addEventListener('click', function likeClicked() {
    let element = counter.innerHTML
    let likeNumber = 0
    let ul = document.createElement('ul')
    likeArray.push(element)
    for (let i = 0; i < likeArray.length; i++) {
        if (element === likeArray[i]) {
            likeNumber++
            ul.innerHTML = `${element} was liked ${likeNumber} time(s)`
        }
    }
    like.appendChild(ul)
})
//Creating Pause//
function clear () {
    clearInterval(interval)
}
window.addEventListener('DOMContentLoaded', function stop() {
    const pause = document.querySelector('#pause')
    pause.addEventListener('click', function clickPause() {
        if (heart.disabled === false) {
            clearInterval(interval)
            heart.disabled = true
            plus.disabled = true
            minus.disabled = true
            submit.disabled = true
            pause.innerText = 'resume'
        } else if (heart.disabled === true) {
            heart.disabled = false
            plus.disabled = false
            minus.disabled = false
            submit.disabled = false
            pause.innerText = 'pause'
            interval = setInterval(intervalFunction, 1000)
        }
    })
})
//Creating Comment//
const submit = document.querySelector('#submit')
const form = document.querySelector('form')
const comment = document.querySelector('#list')
form.addEventListener('submit', function commentSubmission(e) {
    e.preventDefault()
    let b = this.children[0]
    let c = b.value
    let p = document.createElement('p')
    p.innerText = c
    comment.appendChild(p)
})