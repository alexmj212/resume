'use strict';

import * as Pages from "./pages.js";
import * as DarkMode from "./dark-mode.js";
import "./sass/main.scss";

Pages.initializePages();
DarkMode.initializeThemeDetection();

document.getElementById('menu-toggle').addEventListener('click', () => {
    if (document.getElementsByTagName('aside')[0].classList.contains('is-open')) {
        document.getElementsByTagName('aside')[0].classList.remove('is-open');
    } else {
        document.getElementsByTagName('aside')[0].classList.add('is-open');
    }
});
