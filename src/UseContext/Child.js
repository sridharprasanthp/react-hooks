import { useContext } from "react";
import { Context } from "../App";
function Child({ del }) {
    const data = useContext(Context)

    return (
        <div>
            {data.map((dat, index) =>
                <div key={index} id='flex'>
                    <h1>{dat.name}</h1>
                    <h1>{dat.email}</h1>
                    <button onClick={() => del(dat.id)}>Delete</button>
                </div>)}
        </div>
    )
}
export default Child;