import { useEffect, useState } from "react";
import RecipeCard from "../Recipe card/RecipeCard";

const RecipeCards = ({handleWantToCook}) => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('../../../recipe.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="grid grid-cols-2 gap-6 w-[60%]">
            {
                cards.map(card => <RecipeCard 
                    key={card.recipe_id}
                    card={card}
                    handleWantToCook={handleWantToCook}
                    ></RecipeCard>)
            }
        </div>
    );
};

export default RecipeCards;