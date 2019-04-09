function MovieTicket(movie, time, age, price) {
	this.movie = movie,
	this.time = time,
	this.age = age,
	this.price = priceCalculation(price);
}

function priceCalculation(price) {
	return '$ ' + price.toFixed(2);
}

function showTicket() {

}

$(function() {
	$('form#tix').submit(function(event) {
		event.preventDefault();
		var movieName = $('#movie-name option:selected').text();
		var timeOfDay = $('#time-of-day option:selected').text();
		var ageRange = $('#age-range option:selected').text();
		var ticketPrice = parseFloat($('#age-range').val())*parseFloat($('#time-of-day').val());

		var movieTicket = new MovieTicket(movieName, timeOfDay, ageRange, ticketPrice);
		console.log(movieTicket);
	});
});
