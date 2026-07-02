export function loadContact() {
    const container = document.createElement('div');
    container.classList.add('tab-content');

    const titleBlock = document.createElement('div');
    titleBlock.classList.add('title-block');
    titleBlock.innerHTML = `<h1>Contact Us</h1>`;
    container.appendChild(titleBlock);

    const contact1 = document.createElement('div');
    contact1.classList.add('card');
    contact1.innerHTML = `
        <h3>Mama Bear</h3>
        <p>Chef</p>
        <p>555-555-5554</p>
        <p>totallyRealEmail@notFake.com</p>
    `;
    container.appendChild(contact1);

    return container;
}