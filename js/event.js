function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
}
function makeDefault(){
    document.body.style.backgroundColor = 'transparent'
}

const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}


const makeAquaBtn = document.getElementById('make-aqua');
makeAquaBtn.onclick = function makeAqua(){
    document.body.style.backgroundColor = 'aqua'
}

const makePinkBtn = document.getElementById('make-pink');
makePinkBtn.addEventListener('click', makePink)
function makePink(){
    document.body.style.backgroundColor = 'pink'
}


const makeGreenBtn = document.getElementById('make-green');
makeGreenBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
})