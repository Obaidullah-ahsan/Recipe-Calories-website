const Ingredient = ({ingredient}) => {
    console.log(ingredient)
    return (
        <div>
            <ul className="list-disc">
                <li className="text-[#878787]">{ingredient}</li>
            </ul>
        </div>
    );
};

export default Ingredient;