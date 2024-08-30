import ProfilPic from './assets/profile.png'
import PropType from 'prop-types'
import Button from './Button'
function Card(prop){
    const CardStyle = {
        margin: "20px",
        border: "1px white solid",
        padding: "10px",
        boxShadow: "1px 1px 10px rgb(23, 156, 156)",
        width: "250px",
        height: "250px",
        display: "inline-block",
        textAlign: "center",
    
    }
    const ImageStyle = {
        borderRadius:"50%" ,
        marginBottom: "10px",
        height: "100px",
        width: "auto",
    
    }
    const TitleStyle = {
        margin: "0",
        padding: "0",
        fontFamily: "'Courier New', Courier, monospace",
        color: "rgb(243, 162, 162)",
    }
    const Paragraph ={
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        color: "rgb(6, 33, 243)",
        width : "200px",
        textAlign: "center",
        marginLeft:"10%",
    }

    /*adding new code here*/
    const cardlist = prop.items;

    /*adding new code here*/
    return(
        <>
            {/* <div style={CardStyle}>
                <img src={ProfilPic} alt="Profile" style={ImageStyle}/>
                <h2 style={TitleStyle}>{prop.name}</h2>
                <p style={Paragraph}>{prop.bio}</p>
            </div> */}
            {cardlist.map(list =>
            <div style={CardStyle}>
                <img src={ProfilPic} alt="Profile" style={ImageStyle}/>
                <h2 style={TitleStyle}>{list.nom}</h2>
                <p style={Paragraph}>{list.bio}</p>
                <Button/>
            </div>)}
        </>
    );
}
// hna radi ndiro dok les prop li kayverifiw wach inputs dyalna shah wlala
Card.propTypes = {
    name : PropType.string,
    bio : PropType.string,
}
// hna kanzido dok les valeurs li bghinahom ykono par default
Card.defaultProps = {
    name : "Guest",
    bio : "Hello world i don't have any bio"
}
export default Card