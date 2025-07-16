
const userBaseUrl = "http://localhost:8080/api/users";

async function getUserById(userId) {
  const res = await fetch(`${userBaseUrl}/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  const user = await res.json();
  console.log(user);
}