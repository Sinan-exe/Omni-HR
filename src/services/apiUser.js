export async function checkUser(user) {
  try {
    const res = await fetch(
      "Https://31b0-83-110-153-22.ngrok-free.app/login/login.php",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) throw Error("Network response was not ok");
    const data = await res.json();
    if (!data.status) {
      throw new Error(data.message);
    }
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
