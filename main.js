
    const paymentForm = document.getElementById("paymentForm");
    paymentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let handler = PaystackPop.setup({
        key: 'pk_test_xxxxxxxx', // Replace with your public key
        email: paymentForm.querySelector('input[type="email"]').value,
        amount: paymentForm.querySelector('input[type="number"]').value * 100,
        currency: 'NGN',
        ref: 'ASSURED_' + Math.floor((Math.random() * 1000000000) + 1),
        callback: function (response) {
          alert('Payment successful! Reference: ' + response.reference);
          // Add your backend call here to verify payment and store data
        },
        onClose: function () {
          alert('Transaction was not completed.');
        },
      });
      handler.openIframe();
    });