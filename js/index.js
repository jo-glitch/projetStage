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

  let Adm = document.getElementById("adm");
  let Prof = document.getElementById("prof");
  let elev = document.getElementById("elev");
 

$("#conect").css({
    'display' : 'none'
})
// fuction display none de mes div 
$( "#btn2" ).click(function() {
    
    $('#ins').css({
        'display': 'flex',
    })
$('#conect').css({
        'display': 'none',
    })
});
  $("#inscrit").click(function(){
      $('#conect').css({
          'display':'flex'
      })
$('#ins').css({
        'display':'none'
    })
})
// apelle a la fonction create user
$('#loginForm').on('submit', emailPasswordLogin);
// Create user with email and pass.
function emailPasswordLogin(event) {
    event.preventDefault();
    const email = $('#emailField').val();
    const password = $('#passwordField').val();
    const connect =  firebase.auth().createUserWithEmailAndPassword(email, password).catch(event => {
        
       
    })
}
//  apelle a la fonction logging quand l'user est connecter 
$('#loginForm1').on('submit',loging);
// verification du mail et password pour loging un user
function loging(event) {
    event.preventDefault();
    const email = $('#emailField1').val();
   
    const password = $('#passwordField1').val();
    // Votre code ici ...
    firebase.auth().signInWithEmailAndPassword(email, password)
.then(function (result) {
        console.log('Succès de connexion', result);
       
            
              if (Adm.checked == true){
                    document.location.href="./admin.html"
                } else if (Prof.checked == true) {
            document.location.href="./prof.html"
            $('#results').html(
                '<h1>Bienvenue à vous Chere prof </h1>'
        );
        }else if (elev.checked==true) {
            document.location.href="./eleve.html"
            $('#results').html(
'<h1>Bienvenue à vous chere eleve </h1>'
            );
        }else{
          alert('tu na rien remplis')
}    
})
.catch(function (error) {
       console.log(error)
       
    });
}
  // Initialisation des gestionnaires d'événement
  $('#addUserForm').on('submit', onAddUser);
  function onAddUser (event) {
      event.preventDefault();
  
      const name = $('#emailField').val();
      // Ajouter  dans la database ...
      firebase.database().ref('User/').push({
          name,
          
      });
  }
