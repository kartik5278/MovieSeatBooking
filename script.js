const container =document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total');

const movieSelect=document.getElementById('movie');
let ticketPrice=+movieSelect.value;
//functions
// update total and count
function updateSelectedCount(){
	const selectedSeats=document.querySelectorAll('.row .seat.selected');
// --------------------------------------------------------
	// const seatsIndex=[...selectedSeats].map(function(item){
	// 	return [...seats].indexOf(item);
	// });
	// in simple form above function
	const seatsIndex=[...selectedSeats].map(item=>[...seats].indexOf(item));
// --------------------------------------------------------
	// console.log(selectedSeats);
	console.log(seatsIndex);
	// SAVING IN LOCAL SOTRAGE
	localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

	const selectedSeatsCount=selectedSeats.length;

	count.innerText=selectedSeatsCount;
	total.innerText=selectedSeatsCount*ticketPrice;
}


// event listener for picking movie
movieSelect.addEventListener('change',(e)=>{
	ticketPrice=e.target.value;
	updateSelectedCount();
});

// event listener on container seat clicking
container.addEventListener('click',(e)=>{
	if(	e.target.classList.contains('seat') &&!e.target.classList.contains('occupied'))
	{
		e.target.classList.toggle('selected');
	}

	updateSelectedCount();
});
