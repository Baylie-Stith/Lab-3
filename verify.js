function verifyPasswords() {
  const pw1 = document.getElementById('pw1').value;
  const pw2 = document.getElementById('pw2').value;

  if (pw1.length < 8 || pw2.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  if (pw1 !== pw2) {
    alert('Passwords do not match. Please try again.');
    return;
  }

  alert('Success! Both passwords matched.');
}