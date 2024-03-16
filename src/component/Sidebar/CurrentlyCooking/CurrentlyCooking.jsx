const CurrentlyCooking = () => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold text-center mx-auto pb-2 border-b-2">Currently cooking: 02</h2>
            <div className="overflow-x-auto">
                <table className="table text-[#878787]">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#28282808]">
                        <tr>
                            <th>1</th>
                            <td>Chicken Caesar Salad</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CurrentlyCooking;