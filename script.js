// contact form handler
function handleContact(e) {
  e.preventDefault();
  var f = e.target;
  var name = f.name.value.trim();
  var phone = f.phone.value.trim();
  var email = f.email.value.trim();
  var tz = f.timezone.value;
  var pet = f.petName.value.trim();
  var type = f.petType.value;
  var age = f.age.value;

  if (!name || !phone || !email || !tz || !pet || !type || age === '') {
    alert('Please fill out all fields.');
    return;
  }

  var msg = 'Thanks ' + name + '!\n' +
    'We got your details:\n' +
    'Phone: ' + phone + '\n' +
    'Email: ' + email + '\n' +
    'Time zone: ' + tz + '\n' +
    "Pet: " + pet + ' (' + type + ')\n' +
    'Age: ' + age;

  alert(msg);
  f.reset();
}
