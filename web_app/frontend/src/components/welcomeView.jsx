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
            <button className={"button-tool"} onClick={handleClick}>Przejdź do narzędzia</button>
            <div className={"button-div"}>

            </div>
            <div className={"app-descr"}>
                Skorzystaj z naszego narzędzia pomagającego w wybraniu kierunku studiów. Pytania będą mieć charakter otwarty i zamknięty, na im więcej z nich odpowiesz – tym dokładniejszy otrzymasz wynik.
            </div>

            <div className={"app-descr"}>
                Po odpowiedzeniu na pytania zostanie dla ciebie przygotowana lista proponowanych kierunków studiów i uczelnie, które mają je w swojej ofercie. Im wyżej ulokowany na liście jest kierunek studiów – tym więcej wspólnego ma z twoimi preferencjami. Po kliknięciu w nazwę kierunku wyświetli się jego skrócony opis i uczelnie oferujące ten kierunek.
            </div>
        <Footer/>
        </>
    )
}

export default WelcomeView;