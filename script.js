// ----------------------------
// Functions Section
// ----------------------------

// Calculate project cost (with parameters + return value)
function calculateCost(hours, rate) {
  return hours * rate;
}

// Function to toggle modal visibility
function toggleModal(show) {
  const modal = document.getElementById("modal");
  if (show) {
    modal.classList.add("show");
  } else {
    modal.classList.remove("show");
  }
}

// ----------------------------
// Event Listeners
// ----------------------------

// Quote calculator
document.getElementById("quote-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const hours = parseFloat(document.getElementById("hours").value);
  const rate = parseFloat(document.getElementById("rate").value);

  const total = calculateCost(hours, rate);
  document.getElementById("quote-result").textContent =
    `Estimated cost: $${total}`;
});

// Modal open/close
document.getElementById("open-modal").addEventListener("click", () => {
  toggleModal(true);
});

document.getElementById("close-modal").addEventListener("click", () => {
  toggleModal(false);
});

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") toggleModal(false); // close when clicking outside
});
