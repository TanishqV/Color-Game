var color = document.getElementById('color')
var ng = document.getElementById('restart')
var easy = document.getElementById('easy')
var hard = document.getElementById('hard')
var noOfSq = 3
var a = [0, 0, 0, 0, 0, 0]
var answer = 3
var score = 0
var roundCompleted = false
var r, g, b

function setColor(noOfSq){
	for (var i = 0; i < noOfSq; i++) {
		r = Math.floor(Math.random()*256).toString()
		g = Math.floor(Math.random()*256).toString()
		b = Math.floor(Math.random()*256).toString()

		a[i] = `rgb(${r}, ${g}, ${b})`
	}
	document.getElementById('b1').style.background = a[0]
	document.getElementById('b2').style.background = a[1]
	document.getElementById('b3').style.background = a[2]
	document.getElementById('b4').style.background = a[3]
	document.getElementById('b5').style.background = a[4]
	document.getElementById('b6').style.background = a[5]

	console.log(a)
}

function pickColor(noOfSq){
	answer = Math.floor(Math.random()*noOfSq)
	color.innerHTML = a[answer]

	console.log('Answer => ' + (answer+1).toString())
}

function checkColor(bl){

	document.getElementById('msg').style.display = 'inline-block'
	if (bl == answer) {

		roundCompleted = true

		document.getElementById('b1').style.background = a[answer]
		document.getElementById('b2').style.background = a[answer]
		document.getElementById('b3').style.background = a[answer]
		document.getElementById('b4').style.background = a[answer]
		document.getElementById('b5').style.background = a[answer]
		document.getElementById('b6').style.background = a[answer]


		document.getElementById('msg').innerHTML = 'SUCCESS !!'
		document.getElementsByTagName('h2')[0].style.background = `rgb(${255-r}, ${255-g}, ${255-b})`
		score++
		console.log('Score : ', score)
	}
	else if (!roundCompleted){
		document.getElementById(`b${bl+1}`).style.background = 'black'
		document.getElementById('msg').innerHTML = 'TRY AGAIN..'
		score = 0
	}
}

ng.addEventListener("click", ()=>{
	
	document.getElementById('msg').innerHTML = ''
	roundCompleted = false

	if (hard.className == 'selected') {

		easy.classList.remove('selected')
		noOfSq = 6
		setColor(noOfSq)
		document.getElementById('b4').style.display = 'block'
		document.getElementById('b5').style.display = 'block'
		document.getElementById('b6').style.display = 'block'

		pickColor(noOfSq)
	}
	else {

		hard.classList.remove('selected')
		noOfSq = 3
		setColor(noOfSq)
		document.getElementById('b4').style.display = 'none'
		document.getElementById('b5').style.display = 'none'
		document.getElementById('b6').style.display = 'none'

		pickColor(noOfSq)
	}
})

easy.addEventListener("click", ()=>{

	document.getElementById('msg').innerHTML = ''
	roundCompleted = false
	hard.classList.remove('selected')

	score = 0

	easy.className = 'selected'
	noOfSq = 3
	setColor(noOfSq)
	document.getElementById('b4').style.display = 'none'
	document.getElementById('b5').style.display = 'none'
	document.getElementById('b6').style.display = 'none'

	pickColor(noOfSq)
})

hard.addEventListener("click", ()=>{

	document.getElementById('msg').innerHTML = ''
	roundCompleted = false
	easy.classList.remove('selected')
	hard.className = 'selected'

	score = 0

	noOfSq = 6
	setColor(noOfSq)
	document.getElementById('b4').style.display = 'block'
	document.getElementById('b5').style.display = 'block'
	document.getElementById('b6').style.display = 'block'
	
	pickColor(noOfSq)
})

b1.addEventListener("click", ()=>{
	checkColor(0)
})
b2.addEventListener("click", ()=>{
	checkColor(1)
})
b3.addEventListener("click", ()=>{
	checkColor(2)
})
b4.addEventListener("click", ()=>{
	checkColor(3)
})
b5.addEventListener("click", ()=>{
	checkColor(4)
})
b6.addEventListener("click", ()=>{
	checkColor(5)
})