import style from "./style.module.css";


export function Counter({userData}){
    let allCount = userData.length
    let doneCount = userData.filter(todo => todo.isComplate).length;
    let mustDoneCount = userData.filter(todo => !todo.isComplate).length;
    return(
        <div>
            <ul className="d-flex ">
                <li >
                    <p>All:{allCount}</p>
                </li>
                <li className="mx-5">
                    <p>Done:{doneCount}</p>
                </li>
                <li>
                    <p>MustDone:{mustDoneCount}</p>
                </li>
            </ul>
        </div>
    )
}