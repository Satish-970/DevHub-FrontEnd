async function getAllUsers() {
  const res = await fetch("http://localhost:8080/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const users = await res.json();
 
}
