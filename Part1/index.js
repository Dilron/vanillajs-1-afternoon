console.log('we connected')

let emptyArr = []
let playing = document.getElementById('player')

function play(box){
    let tempBox = document.getElementById(box)
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
    }
    if(emptyArr[3] !== undefined && emptyArr[3] === emptyArr[4] && emptyArr[3] === emptyArr[5]){
        alert('Player ' + emptyArr[3] + ' wins')
    }
    if(emptyArr[6] !== undefined && emptyArr[6] === emptyArr[7] && emptyArr[6] === emptyArr[8]){
        alert('Player ' + emptyArr[6] + ' wins')
    }
    if(emptyArr[0] !== undefined && emptyArr[0] === emptyArr[3] && emptyArr[0] === emptyArr[6]){
        alert('Player ' + emptyArr[0] + ' wins')
    }
    if(emptyArr[1] !== undefined && emptyArr[1] === emptyArr[4] && emptyArr[1] === emptyArr[7]){
        alert('Player ' + emptyArr[1] + ' wins')
    }
    if(emptyArr[2] !== undefined && emptyArr[2] === emptyArr[5] && emptyArr[2] === emptyArr[8]){
        alert('Player ' + emptyArr[2] + ' wins')
    }
    if(emptyArr[0] !== undefined && emptyArr[0] === emptyArr[4] && emptyArr[0] === emptyArr[8]){
        alert('Player ' + emptyArr[0] + ' wins')
    }
    if(emptyArr[2] !== undefined && emptyArr[2] === emptyArr[4] && emptyArr[2] === emptyArr[6]){
        alert('Player ' + emptyArr[2] + ' wins')
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
    }
    
}


