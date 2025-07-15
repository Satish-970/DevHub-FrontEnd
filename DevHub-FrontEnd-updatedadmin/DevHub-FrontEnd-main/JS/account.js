// JS/account.js
const profileImage = document.getElementById("profileImage");
const imageUpload = document.getElementById("imageUpload");
const form = document.getElementById("profileForm");

imageUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Profile updated successfully!");
});

function resetForm() {
  form.reset();
}


// JS/user-profile.js
document.addEventListener("DOMContentLoaded", () => {
  // Simulated user data
  const devData = {
    name: "Jane Developer",
    bio: "Full Stack Java Developer passionate about Spring and REST APIs.",
    image: "assets/default-profile.png",
    linkedin: "https://linkedin.com/in/janedev",
    github: "https://github.com/janedev",
    projects: [
      { title: "Portfolio Site", tech: "HTML, CSS, JS", desc: "Personal website", link: "#" },
      { title: "Task Manager API", tech: "Spring Boot, MySQL", desc: "REST API project", link: "#" }
    ],
    blogs: [
      { title: "Getting Started with Spring Boot" },
      { title: "RESTful API Design Best Practices" }
    ],
    comments: [
      "Great job on your API post!",
      "Very informative project write-up."
    ]
  };

  document.getElementById("devName").textContent = devData.name;
  document.getElementById("devBio").textContent = devData.bio;
  document.getElementById("devImage").src = devData.image;
  document.getElementById("linkedinLink").href = devData.linkedin;
  document.getElementById("githubLink").href = devData.github;

  const projectList = document.getElementById("projectList");
  devData.projects.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `<h4>${proj.title}</h4><p>${proj.desc}</p><small>${proj.tech}</small>`;
    projectList.appendChild(card);
  });

  const blogList = document.getElementById("blogList");
  devData.blogs.forEach(blog => {
    const item = document.createElement("li");
    item.textContent = blog.title;
    blogList.appendChild(item);
  });

  const commentList = document.getElementById("commentList");
  devData.comments.forEach(comment => {
    const li = document.createElement("li");
    li.textContent = comment;
    commentList.appendChild(li);
  });
});
