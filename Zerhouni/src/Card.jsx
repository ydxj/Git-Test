import ProfilPic from './assets/profile.png'
import './App.css'
export default function Card(){
    return(
        <div className='card'>
            <img src={ProfilPic} alt="Profile"/>
            <h2>Zerhouni Omar</h2>
            <p>Hello my name is Omar Zerhouni and i'm a Full Stuck Devloper</p>
        </div>
    );
}