
  let isSignUpMode = false;

  function switchToSignUp() {
    isSignUpMode = true;
    document.getElementById("formTitle").textContent = "Create an Account";
    document.getElementById("authButton").textContent = "Create Account";
    document.getElementById("authToggleText").innerHTML = `
      Already have an account? 
      <a href="#" class="text-blue-600 hover:underline" onclick="switchToLogin()">Login</a>
    `;
  }

  function switchToLogin() {
    isSignUpMode = false;
    document.getElementById("formTitle").textContent = "Welcome Back";
    document.getElementById("authButton").textContent = "Login";
    document.getElementById("authToggleText").innerHTML = `
      Don't have an account? 
      <a href="#" class="text-blue-600 hover:underline" onclick="switchToSignUp()">Sign Up</a>
    `;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("Username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (isSignUpMode) {
      alert("Account created!");
      window.location.href = "signup.html"; // Simulated signup
    } else {
      alert("Login successful!");
      window.location.href = "index.html"; // Simulated dashboard
    }
  }

  function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleBtn = passwordField.nextElementSibling;
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleBtn.textContent = "Hide";
    } else {
      passwordField.type = "password";
      toggleBtn.textContent = "Show";
    }
  }

  function signInWithGitHub() {
    // Placeholder — you can later integrate GitHub OAuth
    window.location.href = "index.html";
  }

