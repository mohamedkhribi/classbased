import React from 'react'

class Profile extends React.Component{
state={name:"khribi",age:37}


    render(){
        
    
        return(
            <div>
                <h1>hello {this.state.name}</h1>
                <button onClick={()=>{this.setState({age:this.state.age+1})}}>ciliki</button>
                {this.state.age>=40?<h1 style={{color:"red"}}>gomycode</h1>:<h1 style={{color:"green"}}>gomycode</h1>}
{this.state.age==40?alert("wsolet"):null}

            </div>
        )



    }
}
export default Profile