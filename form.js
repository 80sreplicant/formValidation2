function validation() {
  const name = document.getElementById('name').value;
  const subject = document.getElementById('subject').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const errorMessage = document.getElementById('error-message');
  let text;

  errorMessage.style.padding = '10px';

  if (name.length <= 5) {
    text = 'Please enter a name with 6 or more characters';
    errorMessage.innerHTML = text;
    return false;
  }

  if (subject.length <= 10) {
    text = 'Please enter the correct subject';
    // const messageText = document.getElementById('message');
    errorMessage.innerHTML = text;
    return false;
  }

  if (isNaN(phone) || phone.length != 10) {
    text = 'Please enter valid phone number';
    errorMessage.innerHTML = text;
    return false;
  }

  if(email.indexOf('@') == -1 || email.length < 6) {
      text = 'Please enter valid email address'
      errorMessage.innerHTML = text;
      return false
  }

  if(message.length <= 20) {
      text = 'Please enter more than 20 characters'
      errorMessage.innerHTML = text;
      return false
  }

  alert('Form submitted Successfully')
  return true;
}
