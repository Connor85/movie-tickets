//business logic

function Ticket (movie, age, time){
  this.movie = movie;
  this.age = age;
  this.time = time;
}

  // var price = 12;
  //
  // function Cost (cost){ alert(price)
  //   if (this.age > 65 || this.age < 16 && this.time === morning || this.time === noon) {
  //     return price - 5;
  //   } else if (this.time === evening ){
  //     return price + 3;
  //   } else if (this.time === morning){
  //     return price - 3;
  //   }
  // }

Ticket.prototype.fullTicket = function() {
  return "MOVIE: " + this.movie +"<li>" +  "Age: " + this.age + "</li>"+ "<li>" + " At " + this.time + "</li>";
}


// UI logic

$(document).ready(function() {
  $("form#MovieTicket").submit(function(event){
  event.preventDefault();




  var inputtedMovie = $("#new-movie").val();
  var inputtedAge = $("input#new-age").val();
  var inputtedTime = $("#new-time").val();




  var newTicket = new Ticket(inputtedMovie, inputtedAge, inputtedTime);


  var Cost = function(price) {
    if (inputtedAge < 15 || inputtedAge > 65)
    {return price - 3}
  }

 // alert(Cost(12));

  $("ul#price").append("<li>"+ newTicket.fullTicket() + "</li>" + "<li>" + "$" + Cost(12) + "</li>");

  $('input#new-movie').val(" ");
  $('input#new-age').val('');
  $('input#new-time').val('');
});
});
