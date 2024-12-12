function updateCountdown() {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 20); // 20 days from now

  function calculate() {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference <= 0) {
          // If countdown reaches zero, reset to another 20 days
          launchDate.setDate(launchDate.getDate() + 20);
      }

      const total = (launchDate.getTime() - now.getTime()) / 1000;
      const days = Math.floor(total / (60 * 60 * 24));
      const hours = Math.floor((total / (60 * 60)) % 24);
      const minutes = Math.floor((total / 60) % 60);
      const seconds = Math.floor(total % 60);

      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }

  calculate(); // Initial call
  setInterval(calculate, 1000); // Update every second
}

// Start the countdown
updateCountdown();