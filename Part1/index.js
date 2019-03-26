console.log('we connected')

let emptyArr = []
let playing = document.getElementById('player')

let box0 = document.getElementById('0')
let box1 = document.getElementById('1')
let box2 = document.getElementById('2')
let box3 = document.getElementById('3')
let box4 = document.getElementById('4')
let box5 = document.getElementById('5')
let box6 = document.getElementById('6')
let box7 = document.getElementById('7')
let box8 = document.getElementById('8')

function reset(){
    emptyArr = []
    box0.innerText = ''
    box1.innerText = ''
    box2.innerText = ''
    box3.innerText = ''
    box4.innerText = ''
    box5.innerText = ''
    box6.innerText = ''
    box7.innerText = ''
    box8.innerText = ''
}

function play(box){
    let tempBox = document.getElementById(box)
    if(tempBox.innerText === 'X'){
        return alert('Square already played')
    }
    if(tempBox.innerText === 'O'){
        return alert('Square already played')
    }

    if(playing.innerText === 'X'){
        tempBox.innerText = playing.innerText
        emptyArr[box] = 'X'
        console.log(emptyArr)
        playing.innerText = 'O'
    } else {
        tempBox.innerText = playing.innerText
        emptyArr[box] = 'O'
        console.log(emptyArr)
        playing.innerText = 'X'
    }
    if(emptyArr[0] !== undefined && emptyArr[0] === emptyArr[1] && emptyArr[0] === emptyArr[2]){
        alert('Player ' + emptyArr[0] + ' wins')
        reset()
    }
    if(emptyArr[3] !== undefined && emptyArr[3] === emptyArr[4] && emptyArr[3] === emptyArr[5]){
        alert('Player ' + emptyArr[3] + ' wins')
        reset()
    }
    if(emptyArr[6] !== undefined && emptyArr[6] === emptyArr[7] && emptyArr[6] === emptyArr[8]){
        alert('Player ' + emptyArr[6] + ' wins')
        reset()
    }
    if(emptyArr[0] !== undefined && emptyArr[0] === emptyArr[3] && emptyArr[0] === emptyArr[6]){
        alert('Player ' + emptyArr[0] + ' wins')
        reset()
    }
    if(emptyArr[1] !== undefined && emptyArr[1] === emptyArr[4] && emptyArr[1] === emptyArr[7]){
        alert('Player ' + emptyArr[1] + ' wins')
        reset()
    }
    if(emptyArr[2] !== undefined && emptyArr[2] === emptyArr[5] && emptyArr[2] === emptyArr[8]){
        alert('Player ' + emptyArr[2] + ' wins')
        reset()
    }
    if(emptyArr[0] !== undefined && emptyArr[0] === emptyArr[4] && emptyArr[0] === emptyArr[8]){
        alert('Player ' + emptyArr[0] + ' wins')
        reset()
    }
    if(emptyArr[2] !== undefined && emptyArr[2] === emptyArr[4] && emptyArr[2] === emptyArr[6]){
        alert('Player ' + emptyArr[2] + ' wins')
        reset()
    }
    let boardFill = true
    console.log(boardFill)
    for(let i = 0; i <= 8; i++){
        if(emptyArr[i] === undefined){
            boardFill = false
            console.log(boardFill)
        }
        
    }
    console.log(boardFill)
    if(boardFill === true){
        alert('Cats Game')
        reset()
    }   
}


