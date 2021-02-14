var colorTheme = 'light';

export function setTheme(theme) {
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

export function toggleTheme() {
    if (colorTheme === 'light') {
        document.body.classList.add('theme-transition');
        setTheme('dark');
        setTimeout(() => document.body.classList.remove('theme-transition'), 500);
    } else {
        document.body.classList.add('theme-transition');
        setTheme('light');
        setTimeout(() => document.body.classList.remove('theme-transition'), 500);
    }
}

export function initializeThemeDetection() {
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
}

document.getElementById('theme-control').addEventListener('click', event => {
    toggleTheme();
});


