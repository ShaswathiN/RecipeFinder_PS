import React, { useState } from "react";
import "./App.css";
import img1 from "./images/img1.jpg";

const recipesData = [
  {
    id: 1,
    name: "Vegetarian Pasta",
    image: img1,
    description: "A delicious vegetarian pasta dish.",
    tags: ["Vegetarian", "Quick Meal"],
    ingredients: ["Pasta", "Tomato Sauce", "Vegetables"],
    steps: ["Boil pasta", "Add sauce", "Mix vegetables"],
    prepTime: "20 minutes",
  },
  {
    id: 2,
    name: "Chocolate Cake",
    image: "https://via.placeholder.com/200?text=Chocolate+Cake",
    description: "A rich chocolate cake for dessert.",
    tags: ["Dessert", "Vegan"],
    ingredients: ["Flour", "Cocoa Powder", "Sugar"],
    steps: ["Mix ingredients", "Bake for 30 minutes"],
    prepTime: "1 hour",
  },
  {
    id: 3,
    name: "Chicken Salad",
    image: "https://via.placeholder.com/200?text=Chicken+Salad",
    description: "A healthy chicken salad with fresh veggies.",
    tags: ["Healthy", "Quick Meal"],
    ingredients: ["Chicken", "Lettuce", "Tomatoes", "Cucumbers"],
    steps: ["Cook chicken", "Chop vegetables", "Mix together"],
    prepTime: "30 minutes",
  },
  {
    id: 4,
    name: "Beef Tacos",
    image: "https://via.placeholder.com/200?text=Beef+Tacos",
    description: "Spicy beef tacos with fresh toppings.",
    tags: ["Spicy", "Main Course"],
    ingredients: ["Ground Beef", "Taco Shells", "Lettuce", "Cheese"],
    steps: ["Cook beef", "Assemble tacos", "Serve with toppings"],
    prepTime: "25 minutes",
  },
  // Add more recipes as needed
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = recipesData.filter((recipe) =>
      recipe.name.toLowerCase().includes(term)
    );
    setFilteredRecipes(filtered);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <header>
        <h1>Recipe Finder</h1>
      </header>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => handleRecipeClick(recipe)}
          >
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <p>{recipe.tags.join(", ")}</p>
          </div>
        ))}
      </div>
      {selectedRecipe && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{selectedRecipe.name}</h2>
            <p>
              <strong>Ingredients:</strong>{" "}
              {selectedRecipe.ingredients.join(", ")}
            </p>
            <p>
              <strong>Steps:</strong> {selectedRecipe.steps.join(", ")}
            </p>
            <p>
              <strong>Preparation Time:</strong> {selectedRecipe.prepTime}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
