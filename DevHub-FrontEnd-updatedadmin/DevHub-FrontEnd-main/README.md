# 🚀 DevHub - Frontend

Welcome to the **DevHub FrontEnd** repository! This project provides the user interface for DevHub – a developer collaboration and portfolio platform. It allows developers to showcase their work, write blogs, receive feedback, and connect with fellow developers.

---

## 📌 Project Overview

DevHub is a web application for developers to:

- ✍️ Write and manage blog posts
- 💼 Showcase portfolio projects
- 💬 Comment and collaborate with other developers
- 👤 Maintain personal profiles
- 🔐 Secure login with GitHub and JWT support

This repository includes the complete **HTML, CSS, and JavaScript (Vanilla)** frontend built for DevHub.

---

## 🧩 Features

- ✅ Responsive Dashboard UI
- ✅ GitHub OAuth Sign-In
- ✅ Dynamic Project & Blog display
- ✅ User profile section
- ✅ Commenting system
- ✅ Toggle Sign In / Sign Up logic
- ✅ Tailwind CSS styled components

---

## 🛠️ Tech Stack

| Layer       | Tech Used                  |
|------------|----------------------------|
| Frontend   | HTML5, CSS3, JavaScript    |
| Styling    | Tailwind CSS               |
| OAuth      | GitHub Login               |
| Auth Flow  | Simple form-based login    |
| Backend    | [DevHub Spring Boot API](https://github.com/Satish-970/DevHub-BackEnd) *(separate repo)*

---

## 📂 Folder Structure

<pre>
DevHub-FrontEnd/
│
├── Css/
│ └── LoginStyle.css
│ └── account.css
│ └── comments.css 
│ └── blogs.css
│ └── index.css
│ └── navbar.css
│ └── project.css # Custom styles
│
├── JS/
│ └── Loginjs.js # JS for auth toggle, form handling
│ └──account.js
│ └── blogs.js
│ └── comments.js
│ └── index.js
│ └── project.js
│ 
│
├── index.html # Dashboard/Home page
├── login.html # Login/Signup UI
├── projects.html # Project listings
├── blogs.html # Blog page
├── comments.html # Comment view
└── profile.html # Account details

</pre>

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Satish-970/DevHub-FrontEnd.git
cd DevHub-FrontEnd
2. Open in Browser
You can open login.html or index.html directly in the browser:

bash

start login.html
3. Connect with Backend
Make sure your Spring Boot backend (DevHub-BackEnd) is running on http://localhost:8080.

GitHub OAuth callback URL:

bash

http://localhost:8080/oauth/github
Frontend redirect:

bash

http://localhost:5500/index.html
You may need to serve it with a local server (like Live Server in VSCode) to avoid CORS issues.

✍️ Author
Satish Pakalapati

GitHub: @Satish-970

🙌 Contributions
Pull requests and feature improvements are welcome!
If you encounter bugs or want to request a feature, feel free to open an issue.

📜 License
This project is not under License.

