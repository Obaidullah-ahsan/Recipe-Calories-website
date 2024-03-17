import CurrentlyCooking from "./CurrentlyCooking/CurrentlyCooking";
import WantToCook from "./WantToCook/WantToCook";

const Sidebar = ({ wantToCook,handlepreparing}) => {
    return (
        <div className="w-[40%] p-4 border rounded-xl">
            <h2 className="text-xl font-semibold text-center mx-auto pb-2 border-b-2">Want to cook: {wantToCook.length}</h2>
            <div>
                <div>
                    <table className="table text-[#878787]">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            wantToCook.map((cook, idx) => <WantToCook key={idx} idx={idx} handlepreparing={handlepreparing} cook={cook}></WantToCook>)
                        }
                    </table>
                </div>
            </div>
            <CurrentlyCooking></CurrentlyCooking>
        </div>
    );
};

export default Sidebar;