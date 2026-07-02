import './styles.css';
import { loadHome } from './home.ls';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

function switchTab(tabLoadingFunction) {
    // Clear out current contents
    contentDiv.innerHTML = '';
    // Append the newly generated content
    contentDiv.appendChild(tabLoadingFunction());
}

// Add event listeners
homeBtn.addEventListener('click', () => switchTab(loadHome));
menuBtn.addEventListener('click', () => switchTab(loadMenu));
contactBtn.addEventListener('click', () => switchTab(loadContact));

// Initial load default
switchTab(loadHome);