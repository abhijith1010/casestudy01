function handlesubmit(cllback) {
    var id=document.getElementById('form2Example11').value;
    var pass=document.getElementById('form2Example22').value;
    console.log(id);
    console.log(pass)

    if (id === 'admin' && pass  === '12345') {
        cllback()
    } else {
       alert("invalid credentials")
    }
  
}

function validate(){
    window.location.href = "body.html";
}