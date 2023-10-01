import '../assets/styles/unitool.css';
import Footer from "./footer";
import {useState} from "react";
import { useLocation } from 'react-router-dom';

const ResultTable = () => {

    const [desc, setDesc] = useState('Opis opis opis');
    const [course, setCourse] = useState('Nazwa kierunku');
    const[btnClass0, setBtnClass0] = useState("button-tb-on");
    const [btnClass1, setBtnClass1] = useState("button-tb");
    const [btnClass2, setBtnClass2] = useState("button-tb");
    const [btnClass3, setBtnClass3] = useState("button-tb");
    const[btnClass4, setBtnClass4] = useState("button-tb");

    const location = useLocation();


    const changeDesc = (index) => {
        setBtnClass0("button-tb");
        setBtnClass1("button-tb");
        setBtnClass2("button-tb");
        setBtnClass3("button-tb");
        setBtnClass4("button-tb");
        switch(index) {
            case 0:
                setBtnClass0("button-tb-on");
                setBtnClass1("button-tb");
                setBtnClass2("button-tb");
                setBtnClass3("button-tb");
                setBtnClass4("button-tb");
                setDesc(location.state[0].description);
                break;
            case 1:
                setBtnClass0("button-tb");
                setBtnClass1("button-tb-on");
                setBtnClass2("button-tb");
                setBtnClass3("button-tb");
                setBtnClass4("button-tb");
                setDesc(location.state[1].description);
                break;
            case 2:
                setBtnClass0("button-tb");
                setBtnClass1("button-tb");
                setBtnClass2("button-tb-on");
                setBtnClass3("button-tb");
                setBtnClass4("button-tb");
                setDesc(location.state[2].description);
                break;
            case 3:
                setBtnClass0("button-tb");
                setBtnClass1("button-tb");
                setBtnClass2("button-tb");
                setBtnClass3("button-tb-on");
                setBtnClass4("button-tb");
                setDesc(location.state[3].description);
                break;
            case 4:
                setBtnClass0("button-tb");
                setBtnClass1("button-tb");
                setBtnClass2("button-tb");
                setBtnClass3("button-tb");
                setBtnClass4("button-tb-on");
                setDesc(location.state[4].description);
                break;
        }
    }

    return (
        <div className={"result-div"}>
            <ul>
                <li><button onClick={() => changeDesc(0)} className={btnClass0}>{location.state[0].major}</button></li>
                <li><button onClick={() => changeDesc(1)} className={btnClass1}>{location.state[1].major}</button></li>
                <li><button onClick={() => changeDesc(2)} className={btnClass2}>{location.state[2].major}</button></li>
                <li><button onClick={() => changeDesc(3)} className={btnClass3}>{location.state[3].major}</button></li>
                <li><button onClick={() => changeDesc(4)} className={btnClass4}>{location.state[4].major}</button></li>
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