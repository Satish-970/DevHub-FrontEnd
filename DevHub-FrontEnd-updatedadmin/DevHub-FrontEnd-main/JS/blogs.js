async function createBlog() {
  const title = document.getElementById("blogTitle").value.trim();
  const tagsInput = document.getElementById("blogTags").value.trim();
  const date = document.getElementById("blogDate").value;

  const token = localStorage.getItem("token");
  if (!token) return alert("You're not logged in.");

  if (!title || !tagsInput || !date) return alert("Please fill in all fields.");

  const tags = tagsInput.split(",").map(t => t.trim());

  const blog = {
    title,
    tags,
    createdAt: date
  };

  try {
    const res = await fetch("http://localhost:8080/api/blog-posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(blog)
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to create blog: ${errorText}`);
    }

    const data = await res.json();
    alert("Blog created successfully!");
    closeModal();
    // optionally refresh blog list
  } catch (err) {
    console.error(err);
    alert("Error: " + err.message);
  }
}
