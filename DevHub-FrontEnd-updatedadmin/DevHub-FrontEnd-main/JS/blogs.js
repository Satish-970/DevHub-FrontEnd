// Unique ID generator
let blogIdCounter = 3;

// Sample user blogs
let blogs = [
  {
    id: 1,
    title: "Building a Spring Boot App",
    tags: ["Spring", "Java"],
    date: "2025-07-01",
    comments: 5
  },
  {
    id: 2,
    title: "RESTful APIs with Spring",
    tags: ["API", "Spring Boot"],
    date: "2025-07-05",
    comments: 3
  }
];

// Render all blogs
function renderBlogs(filter = "") {
  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "";

  const filtered = blogs.filter(blog =>
    blog.title.toLowerCase().includes(filter.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  if (filtered.length === 0) {
    blogList.innerHTML = "<p>No blogs found.</p>";
    return;
  }

  filtered.forEach(blog => {
    const card = document.createElement("div");
    card.className = "blog-card";

    card.innerHTML = `
      <div class="blog-header">
        <div>
          <div class="blog-title">${blog.title}</div>
          <div class="blog-meta">${blog.tags.join(", ")} | ${blog.date} | ${blog.comments} Comments</div>
        </div>
        <div class="blog-actions">
          <button class="view" onclick="viewBlog(${blog.id})">View</button>
          <button class="edit" onclick="editBlog(${blog.id})">Edit</button>
          <button class="delete" onclick="deleteBlog(${blog.id})">Delete</button>
        </div>
      </div>
    `;

    blogList.appendChild(card);
  });
}

// Show blog creation modal
function createBlog() {
  resetForm();
  editingBlogId = null;
  openModal("Create New Blog");
}

// Handle form cancel
function closeModal() {
  document.getElementById("createBlogModal").classList.add("hidden");
  document.getElementById("blogForm").reset();
}

// Submit blog (create or edit)
let editingBlogId = null;

document.getElementById("blogForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("blogTitle").value.trim();
  const tags = document.getElementById("blogTags").value.split(",").map(t => t.trim());
  const date = document.getElementById("blogDate").value;

  if (!title || !tags.length || !date) {
    alert("All fields are required.");
    return;
  }

  if (editingBlogId !== null) {
    // Edit existing blog
    const blog = blogs.find(b => b.id === editingBlogId);
    blog.title = title;
    blog.tags = tags;
    blog.date = date;
    alert("Blog updated!");
  } else {
    // Create new blog
    blogs.unshift({
      id: blogIdCounter++,
      title,
      tags,
      date,
      comments: 0
    });
    alert("Blog created!");
  }

  closeModal();
  renderBlogs();
});

// View blog details
function viewBlog(id) {
  const blog = blogs.find(b => b.id === id);
  if (blog) {
    alert(`📄 ${blog.title}\n🗓️ ${blog.date}\n🏷️ ${blog.tags.join(", ")}\n💬 ${blog.comments} comments`);
  }
}

// Edit blog
function editBlog(id) {
  const blog = blogs.find(b => b.id === id);
  if (!blog) return;

  editingBlogId = id;
  document.getElementById("blogTitle").value = blog.title;
  document.getElementById("blogTags").value = blog.tags.join(", ");
  document.getElementById("blogDate").value = blog.date;
  openModal("Edit Blog");
}

// Delete blog
function deleteBlog(id) {
  const blog = blogs.find(b => b.id === id);
  if (confirm(`Are you sure you want to delete "${blog.title}"?`)) {
    blogs = blogs.filter(b => b.id !== id);
    renderBlogs();
  }
}

// Set modal title and open
function openModal(title) {
  document.querySelector("#createBlogModal h3").textContent = title;
  document.getElementById("createBlogModal").classList.remove("hidden");
}

// Reset blog form
function resetForm() {
  document.getElementById("blogForm").reset();
  editingBlogId = null;
}

// Filter search
document.getElementById("filterInput").addEventListener("input", (e) => {
  renderBlogs(e.target.value);
});

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderBlogs();
});
