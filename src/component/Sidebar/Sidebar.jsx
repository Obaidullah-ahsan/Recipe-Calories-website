import CurrentlyCooking from "./CurrentlyCooking/CurrentlyCooking";
import WantToCook from "./WantToCook/WantToCook";

const Sidebar = ({ wantToCook, handlepreparing, preparing }) => {
    return (
        <div className="w-[40%] p-4 border rounded-xl">
            <div>
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
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-center mx-auto pb-2 border-b-2">Currently cooking: {preparing.length}</h2>
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
                        {
                            preparing.map((prepared,idx) => <CurrentlyCooking key={idx} prepared={prepared}></CurrentlyCooking>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;