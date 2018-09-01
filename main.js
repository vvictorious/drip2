// Initialize Firebase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAFP4lkUJsCU-HvBuqV-pzK3I5aVSGN7xY",
    authDomain: "drip-5730c.firebaseapp.com",
    databaseURL: "https://drip-5730c.firebaseio.com",
    projectId: "drip-5730c",
    storageBucket: "drip-5730c.appspot.com",
    messagingSenderId: "344533023360"
  };
  firebase.initializeApp(config);


//reference messages collection
var messagesRef = firebase.database().ref('messages');

// listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
	e.preventDefault();
	//Get values
	var name = getInputVal('name');
	var company = getInputVal('company');
	var email = getInputVal('email');
	var phone = getInputVal('phone');
	var message = getInputVal('message');
	//save message
	saveMessage(name, company, email, phone, message);
	//show alert
	document.querySelector('.alert').style.display = 'block';
	//hide alert after 3 seconds
	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';
	},3000);
	//clear form
	document.getElementById('contactForm').reset();
}

//function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, company, email, phone, message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone, 
		message: message
	});
}