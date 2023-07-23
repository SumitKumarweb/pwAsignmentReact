function button(){
    console.log("clicked");
}

function Asginmentwo(props){
    return (
        <>
            <button onClick={button}>{props.text}</button>
        </>
    )
}

export default Asginmentwo;