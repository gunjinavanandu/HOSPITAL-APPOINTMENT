// Appointment Form

document.getElementById("appointmentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    // Check phone number
    if (phone.length < 10) {
        document.getElementById("message").innerHTML =
            "❌ Please enter a valid phone number.";

        document.getElementById("message").style.color = "red";

        return;
    }

    // Display success message
    document.getElementById("message").innerHTML =
        "✅ Appointment booked successfully!<br><br>" +
        "Patient: " + name + "<br>" +
        "Doctor: " + doctor + "<br>" +
        "Date: " + date + "<br>" +
        "Time: " + time;

    document.getElementById("message").style.color = "green";

    // Clear form
    document.getElementById("appointmentForm").reset();

});