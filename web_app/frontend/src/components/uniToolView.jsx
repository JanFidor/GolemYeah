import '../assets/styles/unitool.css'
import Footer from "./footer";
import {useState} from "react";
// import {postAPI} from "../utils/helpers";
import SingleChoiceInput from "./singleChoiceInput";
import TextInput from "./textInput";
import {useNavigate} from "react-router-dom";
// import QuestionForm from './questionForm';


const UniToolView = ({setter}) => {

    const [text1, setText1] = useState('');
    // const [text2, setText2] = useState('');
    // const [option1, setOption1] = useState('');
    // const [option2, setOption2] = useState('');
    // const [option3, setOption3] = useState('');
    // const [option4, setOption4] = useState('');
    // const [option5, setOption5] = useState('');
    // const [option6, setOption6] = useState('');
    // const [option7, setOption7] = useState('');
    // const [option8, setOption8] = useState('');
    // const [option9, setOption9] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text1: text1,
            }),
        };

// Use the fetch API to make the POST request
        fetch("/api/upload_form_data", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Incorrect form data!");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                navigate("/results", { state: data });
            })
            .catch((error) => {
                console.error("Request error:", error);
            });
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
                <h1 className={"question-title"}>Ankieta</h1>
                <form className="post-form">
                    <TextInput question={'Opisz swoje hobby i zainteresowania, które chcesz rozwijać podczas studiów'}
                               state={text1} setState={setText1} />
                    {/*<TextInput question={'Co planujesz po ukończeniu studiów? Możesz opisać swój wymarzony zawód'}*/}
                    {/*           state={text2} setState={setText2} />*/}
                    {/*<SingleChoiceInput question={'Czy interesuje cię matematyka lub fizyka?'}*/}
                    {/*                   choices={['Tak', 'Nie', 'Nie wiem']}*/}
                    {/*                   state={option1} setState={setOption1} />*/}
                    {/*<SingleChoiceInput question={'Czy po ukończeniu studiów będzie interesować cię podjęcie studiów kolejnego stopnia?'}*/}
                    {/*                   choices={['Tak', 'Nie', 'Nie wiem']}*/}
                    {/*                   state={option2} setState={setOption2} />*/}
                    {/*<SingleChoiceInput question={'Czy lubisz brać udział w licznych warsztatach i projektach?'}*/}
                    {/*                   choices={['Tak', 'Nie', 'Nie wiem']}*/}
                    {/*                   state={option3} setState={setOption3} />*/}
                    {/*<SingleChoiceInput question={'Czy ważne jest dla ciebie znalezienie pracy w trakcie studiów albo bezpośrednio po ich ukończeniu?'}*/}
                    {/*                   choices={['Tak', 'Nie', 'Nie wiem']}*/}
                    {/*                   state={option4} setState={setOption4} />*/}
                    {/*<SingleChoiceInput question={'Czy wśród natury czujesz się w swoim żywiole?'}*/}
                    {/*                   choices={['Tak', 'Nie', 'Nie wiem']}*/}
                    {/*                   state={option5} setState={setOption5} />*/}
                    {/*<SingleChoiceInput question={'Czy wśród natury czujesz się w swoim żywiole?'}*/}
                    {/*                   choices={['Tak', 'Nie', 'Nie wiem']}*/}
                    {/*                   state={option6} setState={setOption6} />*/}
                    {/*<SingleChoiceInput question={'Czy wśród natury czujesz się w swoim żywiole?'}*/}
                    {/*                   choices={['Tak', 'Nie', 'Nie wiem']}*/}
                    {/*                   state={option7} setState={setOption7} />*/}
                    {/*<SingleChoiceInput question={'Czy wśród natury czujesz się w swoim żywiole?'}*/}
                    {/*                   choices={['Tak', 'Nie', 'Nie wiem']}*/}
                    {/*                   state={option8} setState={setOption8} />*/}
                    {/*<SingleChoiceInput question={'Czy wśród natury czujesz się w swoim żywiole?'}*/}
                    {/*                   choices={['Tak', 'Nie', 'Nie wiem']}*/}
                    {/*                   state={option9} setState={setOption9} />*/}
                </form>
                <button className={"button-tool"} onClick={handleClick}>Wyślij</button>
            </div>
            {/* <Footer/> */}
        </>
    )
}

export default UniToolView;