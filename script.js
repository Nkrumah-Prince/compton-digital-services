// Scroll to top (optional)
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Send booking via WhatsApp
function sendBooking(formId, serviceName, price){
    const form = document.getElementById(formId);
    const name = form.querySelector('[name="name"]').value;
    const contact = form.querySelector('[name="contact"]').value;
    const details = form.querySelector('[name="details"]').value;

    const msg = `Booking: ${serviceName}\nName: ${name}\nContact: ${contact}\nPrice: GHS ${price}\nDetails: ${details}`;

    // Open WhatsApp
    window.open(`https://wa.me/233550520858?text=${encodeURIComponent(msg)}`, '_blank');
}
