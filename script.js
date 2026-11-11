fetch("events.json")
  .then((r) => r.json())
  .then((events) => {
    const list = document.getElementById("starred");
    events.forEach((e) => {
      const li = document.createElement("li");
      li.textContent = `${e.repo} – starred on ${e.starred_at}`;
      list.appendChild(li);
    });
  });
