// Sample ticket prices in RM for each movie.
const moviePrices = {
    "Avengers: Endgame": 20,
    "The Lion King": 15,
    "Joker": 18
};

function Booking(customerName, movieName, timeSlot, numberOfTickets) {
    this.customerName = customerName;
    this.movieName = movieName;
    this.timeSlot = timeSlot;
    this.numberOfTickets = numberOfTickets;
}

Booking.prototype.calculateTotalPrice = function () {
    return this.numberOfTickets * moviePrices[this.movieName];
};

document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value.trim();
    const movieName = document.getElementById("movieName").value;
    const timeSlot = document.getElementById("timeSlot").value;
    const numberOfTickets = Number(document.getElementById("numberOfTickets").value);
    const output = document.getElementById("output");

    if (!customerName || !Number.isInteger(numberOfTickets) || numberOfTickets < 1) {
        output.textContent = "Please enter your name and a positive whole number of tickets.";
        return;
    }

    const booking = new Booking(customerName, movieName, timeSlot, numberOfTickets);
    const totalPrice = booking.calculateTotalPrice();

    output.textContent = "Customer: " + booking.customerName +
        " | Movie: " + booking.movieName +
        " | Time: " + booking.timeSlot +
        " | Tickets: " + booking.numberOfTickets +
        " | Total price: RM " + totalPrice.toFixed(2);
});
