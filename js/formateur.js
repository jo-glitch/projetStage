const firebaseConfig = {
    apiKey: "AIzaSyCF4gH1dahG_J1P2Iwa_B6uJ9CUJfGDanM",
    authDomain: "projetappli-8b839.firebaseapp.com",
    databaseURL: "https://projetappli-8b839.firebaseio.com",
    projectId: "projetappli-8b839",
    storageBucket: "projetappli-8b839.appspot.com",
    messagingSenderId: "103484594399",
    appId: "1:103484594399:web:36a524a1c3094c14e3f16a",
    measurementId: "G-YJK8MTJPHZ"
  };
  firebase.initializeApp(firebaseConfig);

  // PARTIE FORMATEUR

// POUR AFFICHER LE NOM
firebase.database().ref('/eleve').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const name = item.val()
        content += `<li>${name.name}</li>`;
    });
  
    $('#nom').html(content);
  
  });
  // POUR AFFICHER SI L'ELEVE A PREVENU
  firebase.database().ref('/eleve').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const presence = item.val()
        content += `<li>${presence.presence}</li>`;
    });
  
    $('#status').html(content);
  });

  // POUR AFFICHER LA CLASSE 
  firebase.database().ref('/eleve').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const classe = item.val()
        content += `<li>${classe.classe}</li>`;
    });
  
    $('#class').html(content);
  });