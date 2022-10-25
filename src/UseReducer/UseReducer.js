import { useReducer} from "react";

function UseReducer({ change }) {
    const InitialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case "add":
                return state + 1;
            case "sub":
                return state - 1;
            case "reset":
                return 0
            default:
                throw new Error("Unexpected action");
        }
    }
    const [count, dispatch] = useReducer(reducer, InitialState);
    
    return (
        <div>
            <h1 id="color">useReducer</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch("add")}>
                add
            </button>
            <button onClick={() => dispatch("sub")}>
                subtract
            </button>
            <button onClick={() => dispatch("reset")}>
                reset
            </button>
            <div>
            <br/>
                <button onClick={change}>Home</button>
            </div>
        </div>
    )
}
export default UseReducer;