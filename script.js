document.getElementById("fetchStats").addEventListener("click", async () => {
  const username = document.getElementById("username").value.trim();
  const messageEl = document.getElementById("message");
  const statsEl = document.getElementById("stats");

  // Clear previous messages and stats
  messageEl.textContent = "";
  statsEl.classList.add("hidden");

  if (!username) {
    messageEl.textContent = "Please enter a username!";
    return;
  }

  try {
    // Fetch user data from API
    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`
    );
    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();

    // Update stats section
    document.getElementById("user").textContent = username;
    document.getElementById("total").textContent = data.totalSolved || 0;
    document.getElementById("easy").textContent = data.easySolved || 0;
    document.getElementById("medium").textContent = data.mediumSolved || 0;
    document.getElementById("hard").textContent = data.hardSolved || 0;
    statsEl.classList.remove("hidden");
  } catch (error) {
    messageEl.textContent = error.message;
  }
});
