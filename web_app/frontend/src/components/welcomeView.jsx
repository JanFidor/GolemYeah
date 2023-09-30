import '../assets/styles/welcome.css'
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

const WelcomeView = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/uni-tool");
    }
    return (
        <>
        <div className="welcome-title">
            Jak widzisz swoją przyszłość?
        </div>
            <div className={"button-div"}>
            <button className={"button-tool"} onClick={handleClick}>Przejdź do narzędzia</button>
            </div>
        <Footer/>
        </>
    )
}

export default WelcomeView;