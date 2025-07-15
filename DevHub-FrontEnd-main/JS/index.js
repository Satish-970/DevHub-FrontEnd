// Sample data (this should come from backend API in real app)
const developers = [
  {
    name: "Satish Pakalapati",
    bio: "Full-stack developer from Telangana",
    blogs: 5,
    projects: 3,
    comments: 12,
    image: "https://via.placeholder.com/80"
  },
  {
    name: "Kiran Kumar",
    bio: "Java backend expert",
    blogs: 3,
    projects: 4,
    comments: 8,
    image: "https://via.placeholder.com/80"
  }
];

function loadDevelopers() {
  const container = document.getElementById("developer-list");
  container.innerHTML = "";

  developers.forEach(dev => {
    const card = document.createElement("div");
    card.className = "dev-card";

    card.innerHTML = `
      <img src="${dev.image}" alt="${dev.name}" />
      <div class="dev-info">
        <h4>${dev.name}</h4>
        <p>${dev.bio}</p>
        <div class="dev-stats">
          Blogs: ${dev.blogs} | Projects: ${dev.projects} | Comments: ${dev.comments}
        </div>
        <button onclick="viewProfile('${dev.name}')">View Full Profile</button>
      </div>
    `;

    container.appendChild(card);
  });
}

function viewProfile(name) {
  alert(`Navigating to profile of ${name}...`);
  // Here, you’d normally use window.location.href = `/profile/${userId}`;
}

document.addEventListener("DOMContentLoaded", loadDevelopers);
// Inject navbar.html into the page
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "navbar.css";
    document.head.appendChild(link);
  });

function logout() {
  // Clear token/session
  alert("Logging out...");
  // Redirect to login page
  window.location.href = "login.html";
}
