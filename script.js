const countryStateMap = {
  India: ["Select state", "Jammu & Kashmir", "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Other"],
  USA: ["Select state", "California", "New York", "Texas", "Florida", "Other"],
  UK: ["Select state", "England", "Scotland", "Wales", "Northern Ireland"],
  Other: ["N/A"],
};

const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

function updateStates() {
  const country = countrySelect.value;
  const states = countryStateMap[country];
  stateSelect.innerHTML = "";
  states.forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    stateSelect.appendChild(opt);
  });
}
updateStates();
countrySelect.addEventListener("change", updateStates);

document.getElementById("payreverseForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(this);
  const entries = Object.fromEntries(data.entries());
  console.log("Form submitted:", entries);
  alert("Request submitted (demo). We'll contact you soon!");
  this.reset();
});