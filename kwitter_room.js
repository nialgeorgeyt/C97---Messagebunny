//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
  apiKey: "AIzaSyBw2CFDvRW7ibYc6u3IBUSAo3mMW_t0q9w",
  authDomain: "messagebunny-2663b.firebaseapp.com",
  databaseURL: "https://messagebunny-2663b.firebaseio.com",
  projectId: "messagebunny-2663b",
  storageBucket: "messagebunny-2663b.appspot.com",
  messagingSenderId: "1060933535161",
  appId: "1:1060933535161:web:f06849f49001b098a6a268",
  measurementId: "G-16MPXLSM72"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "mb_messagepage.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "mb_messagepage.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}