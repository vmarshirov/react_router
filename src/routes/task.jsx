import React from 'react';
import {useState} from 'react';


const Task = () => {

    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    const [c, setC] = useState(25);

    let low, high
    if (a < b) {
        low = a;
        high = b;
    } else {
        low = b;
        high = a;
    }

    let task = "Определить принадлежность C интервалу A-B"
    let check = false;
    let result = ''
    if (c >= low && c <= high) {
        check = true;
        result = " С принадлежит заданному диапазону"
    } else {
        check = false;
        result = " С не принадлежит заданному диапазону"
    }

    function send() {
        if (check) {
            document.getElementById("UserEnter").submit();
        } else {
            alert("есть недостатки, повторите ввод")
        }
    }

    return (
        <div>
            <h3>Алгоритмическая задача</h3>
            <form action={"http://185.182.111.214:7628/cgi-bin/form_action.py"} method={"get"} target={"blank"} id={"UserEnter"} name={"UserEnter"}>
                <fieldset id={"fields"}>
                    <label id={"label"}>Формулировка: <input style={{width: '80%'}} name="task" type="text"  value={task}/></label>
                    <label id={"label"}>a: <input name="a" size="4" type="number" onChange={(e) => setA(e.target.value)} value={a}/></label>
                    <label id={"label"}>b: <input name="b" size="4" type="number" onChange={(e) => setB(e.target.value)} value={b}/></label>
                    <label id={"label"}>c: <input name="c" size="4" type="number" onChange={(e) => setC(e.target.value)} value={c}/></label>
                    <label id={"label"}>Результаты: <input style={{width: '80%'}} name="result" type="text" value={result}/></label>
                </fieldset>
                <label><input id={"send"} type={"button"} value={"Отправить формулировку, данные  и результаты на сервер"} onClick={send}/></label>
            </form>
        </div>
    );
}
export default Task;

