function Tunji(props){
    return(
        <h1>welcome to my page.{props.job}</h1>

    )
}
function Dev(){
    // const person={name:"ola",job,div,role,backed}
    
    return(
        <div>
        <h1>my name is Tunji</h1><Tunji job="developer" />
        </div>
        
    );
}
export default Dev;