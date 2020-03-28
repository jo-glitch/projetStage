let firebaseConfig = {
    apiKey: "AIzaSyCF4gH1dahG_J1P2Iwa_B6uJ9CUJfGDanM",
    authDomain: "projetappli-8b839.firebaseapp.com",
    databaseURL: "https://projetappli-8b839.firebaseio.com",
    projectId: "projetappli-8b839",
    storageBucket: "projetappli-8b839.appspot.com",
    messagingSenderId: "103484594399",
    appId: "1:103484594399:web:36a524a1c3094c14e3f16a",
    measurementId: "G-YJK8MTJPHZ"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // POUR AFICHER LE NOM
  firebase.database().ref('/eleve').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const name = item.val()
        content += `<li>${name.name}</li>`;
    });
  
    $('#nom').html(content);
  
  });
  // POUR AFICHER LE NOM
  firebase.database().ref('/eleve').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const presence = item.val()
        content += `<li>${presence.presence}</li>`;
    });
  
    $('#presence').html(content);
  });