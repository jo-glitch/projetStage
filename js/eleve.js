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



//  PARTIE ELEVE

// le planning et la partie pour prevenir le formateur son par defaut en display none
  $('#list_admin_ul, #list_attribut_planning_admin').css({
    'display': 'none',
})
$('#addUserForm').css({
    'display': 'none',
})
// lorsqu'on clique sur les bouttons les parties s'affiche
  $( "#formateur" ).click(function() {
    $('#addUserForm').css({
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center'
    })
    $('#list_attribut_planning_admin, #list_admin_ul').css({
        'display': 'none',
    })
  });

  $("#edt").click(function(){
      $('#list_attribut_planning_admin').css({
        'border': '1px solid',
        'display': 'flex',
        'justify-content': 'space-around',
        'align-items': 'center'
    })
    $('#list_admin_ul').css({
        'display': 'flex',
        'justify-content': 'space-around'
    })
    $('#list_admin_ul ul li').css({
        'list-style-type': 'none'
    })
    $('#submit-admin').css({
        'display' : 'flex',
        'justify-content': 'center'
    })
      $('#addUserForm').css({
        'display': 'none',
    })
  })

// PLANNING ELEVE
// LUNDI
firebase.database().ref('/admin/planning/lundi').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const lundi = item.val()
        content += `<ul>
                        <li>${lundi.lundi_name}</li>
                        <li>${lundi.lundi_date}</li>
                        <li>${lundi.lundi_formateur}</li>
                        <li>${lundi.lundi_salle}</li>
                    </ul>
                    <hr>`;
    });
    $('#lundi_eleve').html(content);
  });

// MARDI
firebase.database().ref('/admin/planning/mardi').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const mardi = item.val()
        content += `<ul>
                        <li>${mardi.mardi_name}</li>
                        <li>${mardi.mardi_date}</li>
                        <li>${mardi.mardi_formateur}</li>
                        <li>${mardi.mardi_salle}</li>
                    </ul>
                    <hr>`;
    });
    $('#mardi_eleve').html(content);
  });
//   MERCREDI

firebase.database().ref('/admin/planning/mercredi').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const mercredi = item.val()
        content += `<ul>
                        <li>${mercredi.mercredi_name}</li>
                        <li>${mercredi.mercredi_date}</li>
                        <li>${mercredi.mercredi_formateur}</li>
                        <li>${mercredi.mercredi_salle}</li>
                    </ul>
                    <hr>`;
    });
    $('#mercredi_eleve').html(content);
  });
// JEUDI
  firebase.database().ref('/admin/planning/jeudi').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const jeudi = item.val()
        content += `<ul>
                        <li>${jeudi.jeudi_name}</li>
                        <li>${jeudi.jeudi_date}</li>
                        <li>${jeudi.jeudi_formateur}</li>
                        <li>${jeudi.jeudi_salle}</li>
                    </ul>
                    <hr>`;
    });
    $('#jeudi_eleve').html(content);
  });
//   VENDREDI
  firebase.database().ref('/admin/planning/vendredi').on('value', function (snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const vendredi = item.val()
        content += `<ul>
                        <li>${vendredi.vendredi_name}</li>
                        <li>${vendredi.vendredi_date}</li>
                        <li>${vendredi.vendredi_formateur}</li>
                        <li>${vendredi.vendredi_salle}</li>
                    </ul>
                    <hr>`;
    });
    $('#vendredi_eleve').html(content);
  });

// PREVENIR LE FORMATEUR
  $('#addUserForm').on('submit', onAddUser);


function onAddUser (event) {
    event.preventDefault();

    const name = $('#name').val();
    const classe = $('#classe').val();
    const presence = $("input[name='presence']:checked").val();


    // Ajouter  dans la database
    firebase.database().ref('eleve/').push({
        name,
        presence,
        classe
    });
}