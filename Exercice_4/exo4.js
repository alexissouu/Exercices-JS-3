
let pass = document.getElementById("password")
let conf = document.getElementById("confirmPassword")


function verification() {
  if (pass.value != conf.value) {
      document.getElementById("password").style.border = "3px solid Red";
      document.getElementById("confirmPassword").style.border = "3px solid Red";
    } else if (pass.value === conf.value ){
      document.getElementById("password").style.border = "3px solid Green";
      document.getElementById("confirmPassword").style.border = "3px solid Green";
    }
  }