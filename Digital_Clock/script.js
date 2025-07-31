function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const isAM = hours < 12;

  // Theme switch based on AM/PM
  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(isAM ? "light-theme" : "dark-theme");

  // Convert to 12-hour format
  const ampm = isAM ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12

  // Add leading zero
  const formatTime = (num) => (num < 10 ? "0" + num : num);

  const timeStr = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm}`;
  document.getElementById("clock").textContent = timeStr;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // initial call
