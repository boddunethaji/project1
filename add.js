// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvmDLjvAJ1ZxuQsYGeG4f_0mCb7ZzhLJs",
  authDomain: "applogin-e519c.firebaseapp.com",
  databaseURL: "https://applogin-e519c-default-rtdb.firebaseio.com",
  projectId: "applogin-e519c",
  storageBucket: "applogin-e519c.appspot.com",
  messagingSenderId: "989270072218",
  appId: "1:989270072218:web:4d40d5cab255807b337823"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
  const database = firebase.database()

function add()
{
    var a=parseInt(document.getElementById("first").value);
    var b=parseInt(document.getElementById("second").value);
    var sum=a+b;
    document.getElementById("out").value=sum;

    
     // Move on with Auth
     auth.signInWithEmailAndPassword(email, password)
     .then(function() {
   // Declare user variable
   var user = auth.currentUser

   // Add this user to Firebase Database
   var database_ref = database.ref()

var user_data = {
  first:first_number,
  second:second_number,
  last_login : Date.now()
}


// Push to Firebase Database
database_ref.child('users/' + user.uid).set(user_data)

// DOne
alert('addition done!!')
})}