const searchInput = document.getElementById('searchInput');
const regionSelect = document.getElementById('regionSelect');
const noResults = document.getElementById('noResults');
const modeBtn = document.querySelector('.mode-btn');
const modeBtnText = modeBtn.querySelector('.mode-btn-text');
const modeIcon = modeBtn.querySelector('i');

function filterCountries() {
  const query = searchInput.value.toLowerCase().trim();
  const selectedRegion = regionSelect.value;
  const cards = document.querySelectorAll('.country');
  let visibleCount = 0;

  cards.forEach((card) => {
    const name = card.querySelector('h2').textContent.toLowerCase();
    const region = card.getAttribute('data-region');

    const matchesSearch = !query || name.includes(query);
    const matchesRegion = !selectedRegion || region === selectedRegion;

    if (matchesSearch && matchesRegion) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  noResults.style.display = visibleCount === 0 ? 'block' : 'none';
}

searchInput.addEventListener('input', filterCountries);
regionSelect.addEventListener('change', filterCountries);

modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  modeBtnText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  modeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
});