import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/hobbies.css';
import '../styles/components/favorites.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/sticky.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav.js';
import darkMode from './utils/dark-mode.js';
import lazyLoading from './utils/lazy-loading.js';

mobileNav();
darkMode();
lazyLoading();
