const WantToCook = ({ cook, idx, handlepreparing }) => {
    const {recipe_id, recipe_name, preparing_time, calories } = cook;
    return (
        <tbody className="bg-[#28282808]">
            <tr>
                <td>{idx + 1}</td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td><button onClick={()=>handlepreparing(recipe_id)} className="btn text-[18px] rounded-full px-3 mr-2 bg-[#0BE58A]">Preparing</button></td>
            </tr>
        </tbody>
    );
};

export default WantToCook;