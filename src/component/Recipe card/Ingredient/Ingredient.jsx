const Ingredient = ({ingredient}) => {
    return (
        <div>
            <ul className="list-disc pl-7">
                <li className="text-[#878787]">{ingredient}</li>
            </ul>
        </div>
    );
};

export default Ingredient;