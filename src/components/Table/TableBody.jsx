import {Btn}  from "../Button";
import { Input } from "../Input";

export function TableBody({userData, removeUser, check}) {
    return (
        <tbody>
            {userData.map((user, index) => {
                return (
                    <tr key={index}>
                        <td><input type="checkbox" onClick={() => check(user.id)} checked={user.isCompleted}/></td>
                        <td>{user.company}</td>
                        <td>{user.name}</td>
                        <td>{user.address}</td>
                        <td><Btn index={index} removeUser={removeUser} children={"Delete"}/></td>
                    </tr>
                );
            })
            }
        </tbody>
    );
}