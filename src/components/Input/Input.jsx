export function Input({type = "text", placeholder, name , value, required=false,}) {
    return (
    <input type={type} placeholder={placeholder} name={name} value={value} required={required}/>
    );
}