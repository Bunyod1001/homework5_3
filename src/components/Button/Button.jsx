export function Btn({children, removeUser, index, type="button"}) {
    return ( 
    <button type={type}  onClick={() => (removeUser ? removeUser(index) : null)}>{children}
    </button>
    );
}