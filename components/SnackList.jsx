import React from "react";
import { v4 as uuidv4 } from "uuid";
import SnackCard from "./SnackCard";

/*
	List of snacks
*/

const snackList = [
    "test","test","test","test",
    "test","test","test","test"
];

const SnackList = () => {
    const mappedSnacks = snackList.map(() => (
        <li key={ uuidv4() }>
            <SnackCard />
        </li>
    ));

    return (
        <div className="snack-list pd-t-40 pd-b-40">
            <div className="container">
                <h2 className="fs-300 pd-b-20">Nos snacks</h2>
                <ul className="snack-list__array w-100">
                    { mappedSnacks }
                </ul>
            </div>
        </div>
    );
};

export default SnackList;