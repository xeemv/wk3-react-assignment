import React, {Component} from "react";
import HousesList from "./components/HousesList";
import NavBar from "./components/Navbar";
import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <div>
                {/* <NavBar /> */}
                <HousesList/>            
            </div>
        )
    }
}


export default App;