// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the form, input, and QR code container
  const form = document.querySelector('form');
  const input = document.querySelector('input[type="text"]');
  const qrcodeContainer = document.getElementById('qrcode');
  const cardFooter = document.getElementById('card-footer');

  // Initialize QR code generator
  let qrcode = new QRCode(qrcodeContainer, {
    text: "",
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Handle form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const url = input.value.trim();
    if (url) {
      // Show the card footer
      cardFooter.classList.remove('hidden');
      // Clear any existing QR code
      qrcode.clear();
      // Generate new QR code
      qrcode.makeCode(url);
    }
  });
});
