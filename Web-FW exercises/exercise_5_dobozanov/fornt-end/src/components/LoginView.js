import React, {useState} from "react";

export default function LoginView (props){
    const [userName, setNewUserName] = useState("");
    const [userPassword, setNewUserPassword] = useState("");
    const [userFirstname, setNewUserFirstname] = useState("");
    const [userLastname, setNewUserLastname] = useState("");
    const [userAdress, setNewUserAdress] = useState("");
    const [userTown, setNewUserTown] = useState("");
    const [userAge, setNewUserAge] = useState("");
    const [userLoginUsername, getUserLoginUsername] = useState("");
    const [userLoginPassword, getUserLoginPassword] = useState("");
    

    const addUser = () => {
        props.addUser(userName, userPassword, userFirstname, userLastname, userAdress, userTown, userAge)
    }

    const login = () => {
        props.login(userLoginUsername, userLoginPassword)
    }

    return(
        <div>
            <div>
                <h2>Sign Up</h2>
                <div>
                    Username <input type="text" onChange={(event) => setNewUserName(event.target.value)}></input>
                </div>
                <div>
                    Password <input type="text" onChange={(event) => setNewUserPassword(event.target.value)}></input>
                </div>
                <div>
                    Firstname <input type="text" onChange={(event) => setNewUserFirstname(event.target.value)}></input>
                </div> 
                <div>
                    Lastname <input type="text" onChange={(event) => setNewUserLastname(event.target.value)}></input>
                </div> 
                <div>
                    Adress <input type="text" onChange={(event) => setNewUserAdress(event.target.value)}></input>
                </div> 
                <div>
                    Town <input type="text" onChange={(event) => setNewUserTown(event.target.value)}></input>
                </div> 
                <div>
                    Age <input type="text" onChange={(event) => setNewUserAge(event.target.value)}></input>
                </div>
                <button onClick={addUser}>Register</button>
            </div>
            <h2>or</h2>
            <div>
                <h2>Log-In</h2>
                <div>
                    Username <input type="text" onChange={(event) => getUserLoginUsername(event.target.value)}></input>
                </div>
                <div>
                    Password <input type="text" onChange={(event) => getUserLoginPassword(event.target.value)}></input>
                </div>
                <button onClick={login}>Go</button>
            </div>
        </div>
    )
}