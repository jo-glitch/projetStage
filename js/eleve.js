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

  firebase.initializeApp(firebaseConfig);



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


  
  $('#addUserForm').on('submit', onAddUser);


function onAddUser (event) {
    event.preventDefault();

    const name = $('#name').val();
    const presence = $("input[name='presence']:checked").val();


    // Ajouter  dans la database
    firebase.database().ref('eleve/').push({
        name,
        presence
    });
}