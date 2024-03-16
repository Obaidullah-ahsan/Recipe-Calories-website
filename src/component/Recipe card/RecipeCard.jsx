import Ingredient from "./Ingredient/Ingredient";
import { CiClock1 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const RecipeCard = ({ card }) => {
    const { recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = card;
    console.log(recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories)
    return (
        <div>
            <img src={recipe_image} className="w-56 h-32 rounded-xl" alt="" />
            <h2 className="text-[20px] font-semibold">{recipe_name}</h2>
            <p className="text-[#878787]">{short_description}</p>
            <hr />
            <h2>Ingredients: {ingredients.length}</h2>
            {
                ingredients.map((ingredient, idx) => <Ingredient key={idx} ingredient={ingredient}></Ingredient>)
            }
            <div className="flex gap-14 text-[#878787]">
                <div className="flex gap-1 items-center">
                    <p><CiClock1></CiClock1></p>
                    <p>{preparing_time}</p>
                </div>
                <div className="flex gap-1 items-center">
                    <FaFire></FaFire>
                    <p>{calories}</p>
                </div>
            </div>
            <button className="btn rounded-full font-bold bg-[#0BE58A]">Want to Cook</button>
        </div>
    );
};

export default RecipeCard;