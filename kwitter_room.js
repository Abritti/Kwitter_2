
//ADD YOUR FIREBASE LINKS HERE
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
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
    });
  }
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}