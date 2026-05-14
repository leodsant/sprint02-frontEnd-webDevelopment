function showPage(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function handleLogin() {
  const user = document.getElementById("username");
  const pass = document.getElementById("password");
  const userErr = document.getElementById("userErr");

  if (user.value.trim().length < 3) {
    userErr.textContent = "Usuário inválido.";
    return;
  }

  const name = user.value.trim();
  document.getElementById("welcomeName").textContent = name;
  document.getElementById("navPill").textContent = name;
  document.getElementById("logoutBtn").style.display = "block";

  showPage("dashboard");
}

function logout() {
  document.getElementById("logoutBtn").style.display = "none";
  document.getElementById("navPill").textContent = "Camera System";
  showPage("home");
}
