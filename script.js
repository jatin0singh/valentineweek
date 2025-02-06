let rejectClickCount = 0; // Counter to track how many times the reject button is clicked

function rejectProposal() {
    rejectClickCount++;
    const rejectButton = document.querySelector('.rejected');

    if (rejectClickCount < 3) {
        rejectButton.style.transform = `translateX(${rejectClickCount * 50}px)`; // Move the button a little
    } else {
        rejectButton.classList.add('run-away'); // Move the button away
    }
}

function acceptProposal() {
    // You can replace these details with your Twilio credentials
    const accountSID = "AC42f9bbed55837cd516a6a899fdb7ff63";  // Replace with your Twilio Account SID
    const authToken = "6f4e9c42c87ae77a5e5ab00bd1fa11e5";    // Replace with your Twilio Auth Token
    const fromWhatsAppNumber = "whatsapp:+14155238886"; // Twilio WhatsApp Sandbox Number
    const toWhatsAppNumber = "whatsapp:+916006885526"; // Your WhatsApp Number

    const message = "🎉 She accepted the proposal! ❤️";

    fetch("https://api.twilio.com/2010-04-01/Accounts/" + accountSID + "/Messages.json", {
        method: "POST",
        headers: {
            "Authorization": "Basic " + btoa(accountSID + ":" + authToken)
        },
        body: new URLSearchParams({
            To: toWhatsAppNumber,
            From: fromWhatsAppNumber,
            Body: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("WhatsApp message sent:", data);
        document.getElementById('status').textContent = "Yay! You accepted my proposal I won't let u sad this valentine! 🎉";
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById('status').textContent = "There was an error with the notification 😔.";
    });
}



