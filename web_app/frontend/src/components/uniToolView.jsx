import '../assets/styles/unitool.css'
import Footer from "./footer";
import {useState} from "react";
// import {postAPI} from "../utils/helpers";
import SingleChoiceInput from "./singleChoiceInput";
import TextInput from "./textInput";
import {useNavigate} from "react-router-dom";
// import QuestionForm from './questionForm';
import MultiChoiceInput from "./multiChoiceInput";


const UniToolView = ({setter}) => {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [selectedOptions1, setSelectedOptions1] = useState([]);
    const [selectedOptions2, setSelectedOptions2] = useState([]);
    // const [option5, setOption5] = useState('');
    // const [option6, setOption6] = useState('');
    // const [option7, setOption7] = useState('');
    // const [option8, setOption8] = useState('');
    // const [option9, setOption9] = useState('');
    const navigate = useNavigate();

    function handleNav() {
        navigate("/");
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'text1': text1,
                'text2': text2,
                'text3': text3,
                'text4': text4,
                'text5': option1,
                'text6': option2,
                'text7': selectedOptions1,
                'text8': selectedOptions2,
            }),
        };

// Use the fetch API to make the POST request

        try {
            const response = await fetch(`/api/upload_form_data/`,
                requestOptions
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            navigate("/results", { state: data });

        } catch (error) {
            console.error('An error occurred:', error);
        }
        // fetch("/api/upload_form_data", requestOptions)
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error("Incorrect form data!");
        //         }
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //         navigate("/results", { state: data });
        //     })
        //     .catch((error) => {
        //         console.error("Request error:", error);
        //     });
    }

    // const handleSubmit = async (e) => {
    //     let formData = new FormData();
    //
    //     formData.append("field1", text1);
    //     // formData.append("field2", text2);
    //     // formData.append("field3", option1);
    //     // formData.append("field4", option2);
    //     // formData.append("field5", option3);
    //     // formData.append("field6", option4);
    //     // formData.append("field7", option5);
    //     // formData.append("field8", option6);
    //     // formData.append("field9", option7);
    //     // formData.append("field10", option8);
    //     // formData.append("field11", option9);
    //
    //
    //     e.preventDefault();
    //     try {
    //         const response = await fetch(`/api/upload_form_data/`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formData)
    //         });
    //
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //
    //         const data = await response.json();
    //         setter(data);
    //         console.log(data);
    //     } catch (error) {
    //         console.error('An error occurred:', error);
    //     }
    // };

    return (
        <>
            <div className="questions-container">
                <h1 className={"question-title"}>Powiedz nam coś o sobie</h1>
                <button onClick={handleNav}>Wróć do Strony głównej</button>
                <h2 className={"question-subtitle"}>1. Pytania otwarte</h2>
                <form className="post-form">
                    <TextInput question={'Opisz swoje hobby i zainteresowania, które chcesz rozwijać podczas studiów:'}
                               state={text1} setState={setText1} />
                    <TextInput question={'Co chciał_byś robić po studiach? Możesz opisać swój wymarzony zawód'}
                               state={text2} setState={setText2} />
                    <TextInput question={'Jaki przedmiot/temat w szkole lubił_ś? Opisz.'}
                               state={text3} setState={setText3} />
                    <TextInput question={'Czy brał_ś udział w wolontariacie/kole zainteresowań? Czy któreś lubił_ś? Jeśli tak, opisz je.'}
                               state={text4} setState={setText4} />
                    <h2 className={"question-subtitle"}>2. Pytania jednokrotnego wyboru</h2>
                    <SingleChoiceInput question={'Jestem osobą'}
                                       choices={['kreatywną', 'artystyczną', 'przedsiębiorczą', 'myślącą logicznie', 'komunikatywną']} state={option1} setState={setOption1} />
                    <SingleChoiceInput question={'Interesują mnie...'}
                                       choices={['ludzie i ich motywacje', 'biznes', 'media', 'nowinki technologiczne', 'design', 'muzyka', 'sport', 'taniec', 'literatura']} state={option2} setState={setOption2} />
                    <MultiChoiceInput
                        question={'Zaznacz, które dziedziny Cię interesują:'}
                        choices={['przyroda', 'literatura', 'nauki medyczne', 'nauki ścisłe', 'nauki społeczne', 'technika', 'religia']}
                        selectedOptions={selectedOptions1}
                        setSelectedOptions={setSelectedOptions1}
                    />
                    <MultiChoiceInput
                        question={'Osoba z którą najbardziej się identyfikuję to:'}
                        choices={['Steve Jobs', 'Elon Musk', 'Sherlock Holmes', 'Quentin Tarantino', 'Frida Kahlo', 'Robb Stark', 'Geralt z Rivii', 'Barack Obama', 'Albert Einstein']}
                        selectedOptions={selectedOptions2}
                        setSelectedOptions={setSelectedOptions2}
                    />
                </form>
                <button className={"button-tool button-bottom"} onClick={handleClick}>Wyślij</button>
            </div>
             <Footer/>
        </>
    )
}

export default UniToolView;