import { Input } from "../Input";
import {Btn} from "../Button";
import "./style.css"

export function Form({userData, setData}){
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let {userComp, userName, userAddress} = evt.target.elements;

        let newObj = {
            id: userData.length + 1,
            company:userComp.value,
            name: userName.value,
            address: userAddress.value,
            isCompleted: false
        };
        setData([newObj, ...userData]);
        userComp.value = null;
        userName.value = null;
        userAddress.value = null;

        // console.log( userName.value, userAddress.value);
    };
    localStorage.setItem("todos", JSON.stringify(userData));
    return( 
    <form className="formStyle" onSubmit={handleSubmit}>
        <Input placeholder={"Qiladigan Ishlarim..."} name={"userComp"} required={true}/> 
        <Input placeholder={"Maqsad..."} name={"userName"} required={true} /> 
        <Input placeholder={"Kamchilik..."} name={"userAddress"} />
        <Btn type="submit">Submit</Btn> 
    </form>
    );
}