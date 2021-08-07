import React, {useContext} from 'react';
import { AppContext } from "../../AppContext";

const Pantry = () => {
    const [loggedIn, setLoggedIn] = useContext(AppContext);
    return (
        <div>This is the loggedIn value: {loggedIn.toString()}</div>
    )
}

export default Pantry;