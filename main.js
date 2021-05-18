//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDBmdwVXIp1950GaTwxW3xy111TMa5jZ2g",
    authDomain: "practice-25985.firebaseapp.com",
    databaseURL: "https://practice-25985-default-rtdb.firebaseio.com",
    projectId: "practice-25985",
    storageBucket: "practice-25985.appspot.com",
    messagingSenderId: "384867813932",
    appId: "1:384867813932:web:35f719c4c23252ad635f89"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "Name for Chating with someone"
      })
  }