const recipes = [
    {
        title: "Pasta Carbonara",
        category: "Non-Veg",
        image: "https://via.placeholder.com/300",
        ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan Cheese", "Black Pepper", "Salt"],
        instructions: "Cook spaghetti. Fry bacon until crispy. Mix eggs, cheese, and pepper. Combine with cooked spaghetti. Serve hot."
    },
    {
        title: "Caprese Salad",
        category: "Veg",
        image: "https://via.placeholder.com/300",
        ingredients: ["Tomatoes", "Fresh Mozzarella Cheese", "Basil Leaves", "Balsamic Vinegar", "Olive Oil", "Salt", "Black Pepper"],
        instructions: "Slice tomatoes and cheese. Arrange on a plate. Drizzle with olive oil and balsamic vinegar. Season with salt and pepper. Garnish with basil leaves."
    },
    {
        title: "Vegetable Stir-Fry",
        category: "Veg",
        image: "https://via.placeholder.com/300",
        ingredients: ["Mixed Vegetables (e.g., bell peppers, broccoli, carrots)", "Tofu or Chicken", "Soy Sauce", "Garlic", "Ginger", "Sesame Oil"],
        instructions: "Chop vegetables and protein. Stir-fry garlic and ginger in sesame oil. Add vegetables and protein. Cook until tender. Add soy sauce. Serve hot."
    },
    {
        title: "Orange Juice",
        category: "Juices",
        image: "https://via.placeholder.com/300",
        ingredients: ["Oranges"],
        instructions: "Peel oranges. Extract juice using a juicer. Serve chilled."
    },
    {
        title: "French Fries",
        category: "Fast Food",
        image: "https://via.placeholder.com/300",
        ingredients: ["Potatoes", "Salt", "Oil"],
        instructions: "Peel and cut potatoes into strips. Fry in hot oil until golden brown. Sprinkle with salt. Serve hot."
    },
    {
        title: "Popcorn",
        category: "Snacks",
        image: "https://via.placeholder.com/300",
        ingredients: ["Popcorn Kernels", "Butter", "Salt"],
        instructions: "Heat oil in a pan. Add popcorn kernels and cover. Shake the pan occasionally until popping stops. Remove from heat. Drizzle with melted butter and sprinkle with salt. Serve immediately."
    }
];

function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchInput));
    displayRecipes(filteredRecipes);
}

function displayRecipes(recipes) {
    const recipeResults = document.getElementById('recipeResults');
    recipeResults.innerHTML = '';

    recipes.forEach(recipe => {
        const { title, category, image, ingredients, instructions } = recipe;

        const recipeCard = `
            <div class="recipe">
                <h2>${title}</h2>
                <p class="category">${category}</p>
                <img src="${image}" alt="${title}">
                <h3>Ingredients:</h3>
                <ul>
                    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h3>Instructions:</h3>
                <p>${instructions}</p>
            </div>
        `;

        recipeResults.innerHTML += recipeCard;
    });
}
