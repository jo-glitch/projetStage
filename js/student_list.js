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
  firebase.database().ref('/user').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const name = item.val()
        content += `<li>${name.name}</li>`;
    });
  
    $('#name').html(content);
  
  });

  // POUR AFFICHER LA DATE DE NAISSANCE

  firebase.database().ref('/user').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const date = item.val()
        content += `<li>${date.birthday}</li>`;
    });
  
    $('#date').html(content);
  
  });

  // POUR AFFICHER LE NUMERO DE TEL

  firebase.database().ref('/user').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const tel = item.val()
        content += `<li>${tel.tel}</li>`;
    });
  
    $('#tel').html(content);
  
  });
//   POUR AFFICHER LE NIVEAU D'ÉTUDES

  firebase.database().ref('/user').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const etude = item.val()
        content += `<li>${etude.etudes}</li>`;
    });
  
    $('#etudes').html(content);
  
  });

//  POUR AFFICHER LE SEXE

  firebase.database().ref('/user').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const sexe = item.val()
        content += `<li>${sexe.sexe}</li>`;
    });
  
    $('#sexe').html(content);
  
  });