import DisplayVideo from "../component/displayVideo/displayVideo"

export default function Home(){
    
    const homeStyle = {
        fontSize : "100px",
        textAlign: "center"
    }

    return (
        <>
            <h1 style={homeStyle}>Home</h1>
            <DisplayVideo />
        </>
    )
}
