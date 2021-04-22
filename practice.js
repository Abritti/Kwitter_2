
//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDzVW4B-dT5C1V4Gok2UkJK-n0Z5l3gQSY",
    authDomain: "newagent-ditc.firebaseapp.com",
    databaseURL: "https://newagent-ditc-default-rtdb.firebaseio.com",
    projectId: "newagent-ditc",
    storageBucket: "newagent-ditc.appspot.com",
    messagingSenderId: "921773656861",
    appId: "1:921773656861:web:c89706a78cbe9d00d3aff4",
    measurementId: "G-38DGG36PFV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose: "adding user" 
      });
    
  }