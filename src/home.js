export function loadHome() {
    const container = document.createElement('div');
    container.classList.add('tab-content');

    // Title Block
    const titleBlock = document.createElement('div');
    titleBlock.classList.add('title-block');
    titleBlock.innerHTML = `<h1>🐝 Beary's Breakfast Bar 🐝</h1>`;
    container.appendChild(titleBlock);

    // Review Block
    const reviewBlock = document.createElement('div');
    reviewBlock.classList.add('card');
    reviewBlock.innerHTML = `
        <p class="review-text">"Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."</p>
        <p class="reviewer">- Goldilocks</p>
    `;
    container.appendChild(reviewBlock);

    // Hours Block
    const hoursBlock = document.createElement('div');
    hoursBlock.classList.add('card');
    hoursBlock.innerHTML = `
        <h3>Hours</h3>
        <p>Sunday: 8am - 8pm</p>
        <p>Monday: 6am - 6pm</p>
        <p>Tuesday: 6am - 6pm</p>
        <p>Wednesday: 6am - 6pm</p>
        <p>Thursday: 6am - 10pm</p>
        <p>Friday: 6am - 10pm</p>
        <p>Saturday: 8am - 10pm</p>
    `;
    container.appendChild(hoursBlock);

    return container;
}