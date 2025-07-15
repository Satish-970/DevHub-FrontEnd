document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
  if (!isLoggedIn || isLoggedIn !== "true") {
    alert("Access denied. Please login as Admin.");
    window.location.href = "admin-login.html";
    return;
  }

  // ... rest of your admin panel logic here
});
function adminLogout() {
  localStorage.removeItem("isAdminLoggedIn");
  window.location.href = "admin-login.html";
}



document.addEventListener("DOMContentLoaded", () => {
  const users = [
    {
      name: "Priya Malladi",
      email: "priya@devhub.com",
      activity: "5 Blogs | 8 Comments",
    },
    {
      name: "Arjun Rao",
      email: "arjun@devhub.com",
      activity: "2 Blogs | 1 Comment",
    },
    {
      name: "Neha Mehta",
      email: "neha@devhub.com",
      activity: "7 Blogs | 12 Comments",
    },
  ];

  const userList = document.getElementById("user-list");

  users.forEach((user, index) => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    const comments = [
  {
    user: "Priya Malladi",
    text: "This project helped me understand JWT Authentication!",
    time: "2 hours ago"
  },
  {
    user: "Arjun Rao",
    text: "Can you add dark mode support?",
    time: "5 hours ago"
  },
  {
    user: "Neha Mehta",
    text: "Great explanation on Spring Boot!",
    time: "1 day ago"
  }
];

const commentList = document.getElementById("comment-list");

comments.forEach((comment, index) => {
  const card = document.createElement("div");
  card.classList.add("comment-card");

  card.innerHTML = `
    <div class="comment-meta">
      <span>${comment.user}</span>
      <span>${comment.time}</span>
    </div>
    <p>${comment.text}</p>
    <button onclick="deleteComment(${index})">Delete</button>
  `;

  commentList.appendChild(card);
});

function deleteComment(index) {
  const confirmDel = confirm("Are you sure you want to delete this comment?");
  if (confirmDel) {
    alert(`Comment ${index + 1} deleted (simulated).`);
    // Later: remove from backend or DOM
  }
}


    card.innerHTML = `
      <div class="user-info">
        <h4>${user.name}</h4>
        <p>${user.email}</p>
        <p>${user.activity}</p>
      </div>
      <div class="user-actions">
        <button class="edit-btn" onclick="editUser(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteUser(${index})">Remove</button>
      </div>
    `;

    userList.appendChild(card);
  });
});

function editUser(index) {
  alert(`Edit functionality for user ${index + 1} goes here.`);
}

function deleteUser(index) {
  const confirmDelete = confirm("Are you sure you want to remove this user?");
  if (confirmDelete) {
    alert(`User ${index + 1} removed (simulated).`);
    // Add real deletion logic here (e.g., backend API)
  }

}
