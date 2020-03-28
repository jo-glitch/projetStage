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

  // Initialisation des gestionnaires d'événement
$('#addUserForm').on('submit', onAddUser);


function onAddUser (event) {
    event.preventDefault();

    const name = $('#name').val();
    const birthday = $('#date').val();
    const tel = $('#tel').val();
    const etudes = $('#etudes').val();
    const sexe = $("input[name='gender']:checked").val();


    // Ajouter  dans la database
    firebase.database().ref('user/').push({
        name,
        birthday,
        tel,
        etudes,
        sexe
    });
}