import '../assets/styles/unitool.css';
import Footer from "./footer";
import {useState} from "react";

const ResultTable = () => {

    const [desc, setDesc] = useState('Opis opis opis');
    const [course, setCourse] = useState('Nazwa kierunku');
    const[btnClass0, setBtnClass0] = useState("button-tb-on");
    const [btnClass1, setBtnClass1] = useState("button-tb");
    const [btnClass2, setBtnClass2] = useState("button-tb");
    const [btnClass3, setBtnClass3] = useState("button-tb");
    const[btnClass4, setBtnClass4] = useState("button-tb");


    const changeDesc = (index) => { // tutaj dodatkowo powinien sie zmieniac opis po klinieciu
        setBtnClass0("button-tb");
        setBtnClass1("button-tb");
        setBtnClass2("button-tb");
        setBtnClass3("button-tb");
        setBtnClass4("button-tb");
        switch(index) {
            case 0:
                setBtnClass0("button-tb-on")
                break;
            case 1:
                setBtnClass1("button-tb-on")
                break;
            case 2:
                setBtnClass2("button-tb-on")
                break;
            case 3:
                setBtnClass3("button-tb-on")
                break;
            case 4:
                setBtnClass4("button-tb-on")
                break;
        }
        setDesc("Inny opis opis opis");
    }

    return (
        <div className={"result-div"}>
            <ul>
                <li><button onClick={() => changeDesc(0)} className={btnClass0}>Inżynieria materiałowa</button></li>
                <li><button onClick={() => changeDesc(1)} className={btnClass1}>Kulturoznawstwo</button></li>
                <li><button onClick={() => changeDesc(2)} className={btnClass2}>Język niemiecki i komunikacja w biznesie</button></li>
                <li><button onClick={() => changeDesc(3)} className={btnClass3}>Czwarta odp</button></li>
                <li><button onClick={() => changeDesc(4)} className={btnClass4}>Piąta odp</button></li>
            </ul>
            <div className={"desc-div"}>
            <ul>
                <li className={"desc-title"}>Opis kierunku</li>
                <li>
                    <div className={"result-desc"}>{desc}</div>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default ResultTable;