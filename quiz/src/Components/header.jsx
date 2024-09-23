import logo from "../Picture/Logo.png";
import "../index.css";
export default function header() {
    return (
        <header id="App-header">
            <img src={logo} alt="logo" width={100} height={100}></img>
        </header>
        )
}