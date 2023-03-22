const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(items => {
    const title = items.querySelector('h2').textContent;
    const element = items.querySelectorAll('li').length;

    console.log(`Category: ${title}
    Elements: ${element}`);
});