var colorTheme = 'light';

function setTheme(theme) {
    switch (theme) {
        case 'dark':
            document.documentElement.setAttribute('data-theme', theme);
            colorTheme = theme;
            document.getElementById('theme-toggle').classList.remove('fa-moon');
            document.getElementById('theme-toggle').classList.add('fa-sun');
            break;
        default:
            document.documentElement.setAttribute('data-theme', 'light');
            colorTheme = 'light';
            document.getElementById('theme-toggle').classList.remove('fa-sun');
            document.getElementById('theme-toggle').classList.add('fa-moon');
            break;
    }
}

function toggleTheme() {
    if (colorTheme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// Initial theme mode
if (window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
    setTheme('dark');
} else {
    setTheme('light');
}

// Listen to OS theme settings
window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    if (e.matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});
