const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $8', 'Oatmeal - $9', 'Frittata - $13'];
const mainCourseMenu = ['Steak - $17', 'Pasta - $10', 'Burger - $10', 'Salmon - $13'];
const dessertMenu = ['Cake - $5', 'Ice Cream - $4', 'Pudding - $3', 'Fruit Salad - $7'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;