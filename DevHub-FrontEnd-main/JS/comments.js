// Sample comments
let comments = [
  {
    author: "Alice",
    date: "2025-07-10",
    body: "Great explanation on Spring Boot projects!",
    context: "Blog: Building a Spring Boot App"
  },
  {
    author: "Bob",
    date: "2025-07-09",
    body: "I liked your portfolio layout. It's clean and responsive.",
    context: "Project: Personal Portfolio"
  },
  {
    author: "Charlie",
    date: "2025-07-08",
    body: "Can you add more examples in your blog?",
    context: "Blog: RESTful APIs with Spring"
  }
];

// Render all comments
function renderComments(filter = "") {
  const commentList = document.getElementById("commentList");
  commentList.innerHTML = "";

  const filtered = comments.filter(c =>
    c.author.toLowerCase().includes(filter.toLowerCase()) ||
    c.body.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    commentList.innerHTML = "<p>No comments found.</p>";
    return;
  }

  filtered.forEach(comment => {
    const card = document.createElement("div");
    card.className = "comment-card";

    card.innerHTML = `
      <div class="comment-meta">
        <span class="comment-author">${comment.author}</span> • ${comment.date} • <em>${comment.context}</em>
      </div>
      <div class="comment-body">
        ${comment.body}
      </div>
    `;

    commentList.appendChild(card);
  });
}

// Filter input
document.getElementById("filterComments").addEventListener("input", (e) => {
  renderComments(e.target.value);
});

// On page load
document.addEventListener("DOMContentLoaded", () => {
  renderComments();
});
