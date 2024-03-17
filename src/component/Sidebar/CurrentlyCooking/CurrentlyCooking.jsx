const CurrentlyCooking = ({ prepared }) => {
    const [preparedObject] = prepared;
    const { recipe_name, preparing_time, calories } = preparedObject;
    return (
        <tbody className="bg-[#28282808]">
            <tr>
                <th>1</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>
        </tbody>
    );
};

export default CurrentlyCooking;