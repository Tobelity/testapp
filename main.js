// Payment form
const paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_xxxxxxxx', // Replace with your Paystack public key
    email: paymentForm.querySelector('input[type="email"]').value,
    amount: paymentForm.querySelector('input[type="number"]').value * 100, // kobo
    currency: 'NGN',
    ref: 'ASSURED_' + Math.floor((Math.random() * 1000000000) + 1),
    callback: function (response) {
      alert('Payment successful! Reference: ' + response.reference);
      // TODO: Make a backend call here to verify payment and save details
    },
    onClose: function () {
      alert('Transaction was not completed.');
    }
  });

  handler.openIframe();
});

// Mobile menu toggle (separate from payment code)
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
