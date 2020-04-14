const logout = document.querySelector('#logout');
  logout.addEventListener('click',(e)=>{
    e.preventDefault()
    firebase.auth().signOut()
    .then(function() {
      // Sign-out successful.
      console.log("eureka");
      document.location.href="./index.html"
    })
    .catch(function(error) {
      console.log(error);
    });
  })