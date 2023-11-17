import React from "react";
class Class extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0}
    }
     increment=()=> {
        this.setState((prevState)=>({
            count:prevState.count+1,
        }))
        
    }
    render()
    {
        return(
            <div>CLass component
            <button onClick={this.increment}>Increment</button>
            <span>{this.state.count}</span>
            <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
export default Class