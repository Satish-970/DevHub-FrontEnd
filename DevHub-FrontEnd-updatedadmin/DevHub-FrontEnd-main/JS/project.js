const projectBaseUrl = "http://localhost:8080/api/projects";
const token = localStorage.getItem("token");

async function getAllProjects() {
  const res = await fetch(projectBaseUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  console.log(data);
}

async function createProject(project) {
  const res = await fetch(projectBaseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  });
  const data = await res.json();
  console.log("Created Project:", data);
}
