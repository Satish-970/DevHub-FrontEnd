const authBaseUrl = "http://localhost:8080/api/auth";

// Main login function triggered from <form onsubmit="loginuser(event)">
async function loginuser(e) {
  e.preventDefault(); // Prevent form default submission

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  try {
    const res = await fetch(`${authBaseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert(data.message || "Login failed. Please try again.");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("An error occurred. Please check the console.");
  }
}

// Optional: Show/Hide password toggle
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const currentType = passwordInput.getAttribute("type");
  passwordInput.setAttribute("type", currentType === "password" ? "text" : "password");
}

async function registerUser() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${authBaseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email, password })
  });

  const data = await res.json();
  if (res.ok) {
    alert("Registered successfully. Please log in.");
  } else {
    alert(data.message);
  }
}
