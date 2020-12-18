// import * as actionTypes from "./actionTypes"

const initialState = {
    questions : [
        {
            id : 1,
            question : "Inside which HTML element do we put the JavaScript? " ,
            answers: [
                {
                    id: 1,
                    content : "<javascript>",
                    isCorrect : true
                },
                {
                    id: 2,
                    content : "<script>",
                    isCorrect : true
                },
                {
                    id: 3,
                    content : "<scripting>",
                    isCorrect : false
                },
                {
                    id: 4,
                    content : "<js>",
                    isCorrect : false
                }
            ]
        },
        {
            id : 2,
            question : "What does HTML stand for?" ,
            answers: [
                {
                    id: 1,
                    content : " Home Tool Markup Language",
                    isCorrect : false
                },
                {
                    id: 2,
                    content : " Hyper Text Markup Language",
                    isCorrect : true
                },
                {
                    id: 3,
                    content : " Hyperlinks and Text Markup Language",
                    isCorrect : false
                },
                {
                    id: 4,
                    content : "null",
                    isCorrect : false
                }
            ]
        },
        {
            id : 3,
            question : `What is the correct JavaScript syntax to change the content of the HTML element below ? 
                        <p id='demo'>This is a demonstration.</p>` ,
            answers: [
                {
                    id: 1,
                    content : "document.getElementByName('p').innerHTML = \"Hello World!\";",
                    isCorrect : true
                },
                {
                    id: 2,
                    content : "#demo.innerHTML = \"Hello World!\";",
                    isCorrect : true
                },
                {
                    id: 3,
                    content : "document.getElement(\"p\").innerHTML = \"Hello World!\";",
                    isCorrect : false
                },
                {
                    id: 4,
                    content : "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
                    isCorrect : false
                }
            ]
        },
        {
            id : 4,
            question : "How do you write \"Hello World\" in an alert box?" ,
            answers: [
                {
                    id: 1,
                    content : "alert(\"Hello World\");",
                    isCorrect : true
                },
                {
                    id: 2,
                    content : "msg(\"Hello World\");",
                    isCorrect : false
                },
                {
                    id: 3,
                    content : "msgBox(\"Hello World\");",
                    isCorrect : false
                },
                {
                    id: 4,
                    content : "alertBox(\"Hello World\");",
                    isCorrect : false
                }
            ]
        },
        {
            id : 5,
            question :
             `
            const object1 = {  
                a: 1,  
                b: 2,  
                c: 3  
            };  
            const object3= {  
                g: 1,  
                h: 2,  
                i: 3  
            };    
            const object2 = Object.assign({c: 4, d: 5}, object1);  
            const object4 = Object.assign({g: 34, h: 25}, object3);  
            console.log(object2.c, object2.d , object4.g, object4.h);  
            ` ,
            answers: [
                {
                    id: 1,
                    content : "3 5 1 2",
                    isCorrect : true
                },
                {
                    id: 2,
                    content : "3 5 34 25",
                    isCorrect : false
                },
                {
                    id: 3,
                    content : "4 5 1 25",
                    isCorrect : false
                },
                {
                    id: 4,
                    content : "4 5 3 2",
                    isCorrect : false
                }
            ]
        }
    ]
}

const myReducer = (state = initialState, action:any) =>{
    switch(action.type) {
        default:
            return {
                ...state
            } 
    }
}

export default myReducer