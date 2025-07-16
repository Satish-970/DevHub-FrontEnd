
const commentBaseUrl = "http://localhost:8080/api/comments";

async function getAllComments() {
  const res = await fetch(commentBaseUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  console.log(data);
}

async function addCommentToBlog(blogPostId, comment) {
  const res = await fetch(`${commentBaseUrl}/blog/${blogPostId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  });
  const data = await res.json();
  console.log("Blog Comment Added:", data);
}

async function addCommentToProject(projectId, comment) {
  const res = await fetch(`${commentBaseUrl}/project/${projectId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  });
  const data = await res.json();
  console.log("Project Comment Added:", data);
}
