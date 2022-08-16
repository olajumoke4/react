import react from "react"
function Drink(){
    return(
        <div>
            <h1>Beer</h1>
        </div>
    );
}
function Nodrink(){
    return(
        <div>
            <h1>water</h1>
        </div>
    );
}
function Totake(Props){
    const party =Props-party;
    if(party){
        return<Drink/>
      return<Nodrink/>

    }
}
function Conditional(){
    return<Totake party={false}/>
}
export default Conditional;