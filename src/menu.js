export function loadMenu() {
    const container = document.createElement('div');
    container.classList.add('tab-content');

    const titleBlock = document.createElement('div');
    titleBlock.classList.add('title-block');
    titleBlock.innerHTML = `<h1>Menu</h1>`;
    container.appendChild(titleBlock);

    const sectionTitle = document.createElement('h2');
    sectionTitle.innerText = "Beverages";
    container.appendChild(sectionTitle);

    const menuItem = document.createElement('div');
    menuItem.classList.add('card');
    menuItem.innerHTML = `
        <h3>Honey Tea</h3>
        <p>A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!</p>
        <p class="price">$2</p>
    `;
    container.appendChild(menuItem);

    return container;
}