const refs = {
  darkmodeToggle: document.querySelector('.darkmode-toggle-input'),
  body: document.body,
};

const THEME_KEY = 'selectedTheme';

function applyTheme(theme) {
  if (theme === 'dark') {
    refs.body.classList.remove('theme-light');
    refs.body.classList.add('theme-dark');
    refs.darkmodeToggle.checked = true;
  } else {
    refs.body.classList.remove('theme-dark');
    refs.body.classList.add('theme-light');
    refs.darkmodeToggle.checked = false;
  }
}

function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme('light');
    saveTheme('light');
  }
}

function toggleTheme() {
  const newTheme = refs.darkmodeToggle.checked ? 'dark' : 'light';
  applyTheme(newTheme);
  saveTheme(newTheme);
}

loadTheme();

refs.darkmodeToggle.addEventListener('change', toggleTheme);
