function MovieTicket(movie, time, age, price) {
	this.movie = movie,
	this.time = time,
	this.age = age,
	this.price = priceCalculation(price);
}

function priceCalculation(price) {
	return '$' + price.toFixed(2);
}

MovieTicket.prototype.showTicket = function() {
	$('#ticket-result').empty();
	if(this.movie=='Willy Wonka') {
		$('#ticket-result').addClass('gold');
		$('#ticket-result').append('<h2>I\'ve Got a Golden Ticket🎵</h2>');
	} else {
		$('#ticket-result').append('<h2>Your Movie Ticket </h2>');
		$('#ticket-result').removeClass('gold');
	}
	$('#ticket-result').append('<p>Movie Name: ' + this.movie + '</p>');
	$('#ticket-result').append('<p>Time of Day: ' + this.time + '</p>');
	var group = 'Adult';
	if(this.age == '0-12') {
		group = 'Child';
	} else if(this.age == '60-99') {
		group = 'Senior';
	} else if(this.age == '100 and up') {
		group = 'Super Awesome Champion of Life';
	}
	$('#ticket-result').append('<p>Your Age Range: ' + group + '</p>');
	$('#ticket-result').append('<p>Time of Day: ' + this.time + '</p>');
	if(group == 'Super Awesome Champion of Life') {
		$('#ticket-result').append('<p>Price: FREEEEEEEEEEE!!</p>');
	} else {
		$('#ticket-result').append('<p>Price: ' + this.price + '</p>');
	}
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
		movieTicket.showTicket();
	});
});
