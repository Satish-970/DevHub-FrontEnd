let projects = [
  {
    title: "DevHub Platform",
    description: "A full-stack portfolio and blog sharing platform.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/example/devhub",
    demo: "https://devhub.live"
  },
  {
    title: "Task Tracker",
    description: "A simple CRUD-based task manager.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/example/task-tracker",
    demo: ""
  }
];

let editIndex = null;

// Render Projects
function renderProjects(filter = "") {
  const container = document.getElementById("projectList");
  container.innerHTML = "";

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase()) ||
    p.tech.some(t => t.toLowerCase().includes(filter.toLowerCase()))
  );

  if (filtered.length === 0) {
    container.innerHTML = "<p>No projects found.</p>";
    return;
  }

  filtered.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <div class="project-title">${project.title}</div>
      <div class="project-desc">${project.description}</div>
      <div class="project-tech">Tech: ${project.tech.join(", ")}</div>
      <div class="project-links">
        ${project.github ? `<a href="${project.github}" target="_blank">GitHub</a>` : ""}
        ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo</a>` : ""}
      </div>
      <div class="project-actions">
        <button class="edit-btn" onclick="editProject(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteProject(${index})">Delete</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Open Modal
function openProjectModal() {
  document.getElementById("projectModal").classList.remove("hidden");
  document.getElementById("modalTitle").textContent = "Add New Project";
  document.getElementById("projectForm").reset();
  editIndex = null;
}

// Close Modal
function closeProjectModal() {
  document.getElementById("projectModal").classList.add("hidden");
  document.getElementById("projectForm").reset();
  editIndex = null;
}

// Add/Edit Project
document.getElementById("projectForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("projectTitle").value.trim();
  const description = document.getElementById("projectDesc").value.trim();
  const tech = document.getElementById("projectTech").value.split(",").map(t => t.trim());
  const github = document.getElementById("projectGitHub").value.trim();
  const demo = document.getElementById("projectDemo").value.trim();

  if (!title || !description || tech.length === 0 || !github) {
    alert("Please fill all required fields.");
    return;
  }

  const newProject = { title, description, tech, github, demo };

  if (editIndex !== null) {
    projects[editIndex] = newProject;
  } else {
    projects.unshift(newProject);
  }

  closeProjectModal();
  renderProjects();
});

// Edit Project
function editProject(index) {
  const project = projects[index];
  document.getElementById("modalTitle").textContent = "Edit Project";
  document.getElementById("projectTitle").value = project.title;
  document.getElementById("projectDesc").value = project.description;
  document.getElementById("projectTech").value = project.tech.join(", ");
  document.getElementById("projectGitHub").value = project.github;
  document.getElementById("projectDemo").value = project.demo || "";

  editIndex = index;
  document.getElementById("projectModal").classList.remove("hidden");
}

// Delete Project
function deleteProject(index) {
  if (confirm("Are you sure you want to delete this project?")) {
    projects.splice(index, 1);
    renderProjects();
  }
}

// Filter Projects
document.getElementById("filterProjects").addEventListener("input", function (e) {
  renderProjects(e.target.value);
});

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});
