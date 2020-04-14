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

//   PARTIE ADMIN
$('#list_attribut_planning_admin, #list_attribut_planning_admin1, #list_admin_ul1, #addAdminForm, #submit-admin').css({
    'display': 'none',
})
$( "#list_planning_admin" ).click(function() {
    $('#list_attribut_planning_admin').css({
        'border': '1px solid',
        'display': 'flex',
        'justify-content': 'space-around',
        'align-items': 'center'
    })
    $('#addAdminForm').css({
        'display': 'flex',
        'justify-content': 'space-around'
    })
    $('#submit-admin').css({
        'display' : 'flex',
        'justify-content': 'center'
    })
    $('#list_attribut_planning_admin1, #list_admin_ul1, #list_admin_ul ul li').css({
        'display' : 'none'
    })
  });
  $('#list_planning_admin2').click(function() {
    $('#list_attribut_planning_admin1').css({
        'border': '1px solid',
        'display': 'flex',
        'justify-content': 'space-around',
        'align-items': 'center'
    })
    $('#list_admin_ul1').css({
        'display': 'flex',
        'justify-content': 'space-around'
    })
    $('#list_admin_ul1 ul li').css({
        'list-style-type': 'none'
    })
    $('#list_attribut_planning_admin, #addAdminForm, #list_admin_ul, #submit-admin').css({
        'display' : 'none'
    })
  });


  function onAddPlanning(event) {
    event.preventDefault();

    // LUNDI
    const lundi_name = $('#lundi_name').val();
    const lundi_date = $('#lundi_date').val();
    const lundi_formateur = $('#lundi_formateur').val();
    const lundi_salle = $('#lundi_salle').val();

    // MARDI
    const mardi_name = $('#mardi_name').val();
    const mardi_date = $('#mardi_date').val();
    const mardi_formateur = $('#mardi_formateur').val();
    const mardi_salle = $('#mardi_salle').val();

    // MERCREDI
    const mercredi_name = $('#mercredi_name').val();
    const mercredi_date = $('#mercredi_date').val();
    const mercredi_formateur = $('#mercredi_formateur').val();
    const mercredi_salle = $('#mercredi_salle').val();

    // JEUDI
    const jeudi_name = $('#jeudi_name').val();
    const jeudi_date = $('#jeudi_date').val();
    const jeudi_formateur = $('#jeudi_formateur').val();
    const jeudi_salle = $('#jeudi_salle').val();

    // VENDREDI
    const vendredi_name = $('#vendredi_name').val();
    const vendredi_date = $('#vendredi_date').val();
    const vendredi_formateur = $('#vendredi_formateur').val();
    const vendredi_salle = $('#vendredi_salle').val();

    // Ajouter  dans la database lundi
    firebase.database().ref('admin/planning/lundi').push({
        lundi_name,
        lundi_date,
        lundi_formateur,
        lundi_salle
    });
    // Ajouter  dans la database mardi
    firebase.database().ref('admin/planning/mardi').push({
        mardi_name,
        mardi_date,
        mardi_formateur,
        mardi_salle
    });
    // Ajouter  dans la database mercredi
    firebase.database().ref('admin/planning/mercredi').push({
        mercredi_name,
        mercredi_date,
        mercredi_formateur,
        mercredi_salle
    });
    // Ajouter  dans la database jeudi
    firebase.database().ref('admin/planning/jeudi').push({
        jeudi_name,
        jeudi_date,
        jeudi_formateur,
        jeudi_salle
    });
    // Ajouter  dans la database vendredi
    firebase.database().ref('admin/planning/vendredi').push({
        vendredi_name,
        vendredi_date,
        vendredi_formateur,
        vendredi_salle
    });
  }

//   AFFICHAGE DU PLANNING
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