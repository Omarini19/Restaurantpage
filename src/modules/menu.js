function creteFood(src,text, price, alt) {

    const food = document.createElement('div');
    food.classList.add('food');
    const img = document.createElement('img');
    img.setAttribute('src',src);
    img.setAttribute('alt',alt);

    const description = document.createElement('div');
    description.classList.add('description')

    const foodName = document.createElement('h3');
    foodName.textContent = text;

    const foodPrice = document.createElement('h2');
    foodPrice.textContent = price;

    description.appendChild(foodName)
    description.appendChild(foodPrice)

    food.appendChild(img)
    food.appendChild(description)

    return food;
}

function loadMenu() {

    const content = document.getElementById('contentTab')

    content.textContent = "";

    const foods =[ 
        creteFood(
        'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        'Sushi make',
        '15 Euros',
        'Sushi philadelphia'

    ),

       creteFood(
        'https://images.unsplash.com/photo-1555126634-323283e090fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'Soupe Miso',
        '4 euros',
        'Soupe Miso'
    )];

    foods.forEach((food) => {
        content.appendChild(food)
    })
}

export default loadMenu;