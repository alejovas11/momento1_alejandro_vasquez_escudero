function login() {
  let usr = document.getElementById("user").value;
  let password = document.getElementById("pwd").value;
  const name = "alejo";
  const pass = "12345";

  if (usr == name && password == pass) {
    window.location.href = "index.html";
  } else {
    alert("Los Datos Ingresados Son Incorrectos.    Intente de nuevo");
  }
}
