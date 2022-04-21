const firebaseConfig = {
    apiKey: "AIzaSyA0kR5G8AiRPcrUIdYCRoNgM_K5SG1UVbw",
    authDomain: "letschat-2840c.firebaseapp.com",
    databaseURL: "https://letschat-2840c-default-rtdb.firebaseio.com",
    projectId: "letschat-2840c",
    storageBucket: "letschat-2840c.appspot.com",
    messagingSenderId: "517205717549",
    appId: "1:517205717549:web:5337a657486b1bbd983ea4",
    measurementId: "G-EYNYS6QR9M"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
   room_name=document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
   })
   localStorage.setItem("room_name", room_name);
   window.location="kwitter_page.html"
}
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row="<div class='room_name' id=" + Room_names + " onclick='rederictToRoomName(this.id)'>#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML +=row;
   //End code
   });});}
getData();

function rederictToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location="kwitter_page.html"
}

function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
       window.location = "index.html";
   }