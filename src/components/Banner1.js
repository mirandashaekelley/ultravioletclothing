import "../styles/Banner1.css";
import arrow from '../images/uparrow.png'
import butterfly from '../images/butterfly.png';
import moonandstars from '../images/moonandstars.png'

export const Banner1 = () => {
    return(
        <div class="banner1">
            <div class='banner1left'>
                <div class="top-image">
                    <img src={butterfly} width="70" height="70" alt="butterfly"/>
                </div>
                <div class="bottom-image">
                    <img src={moonandstars} width="70" height="70" alt="moon and stars"/>
                    {/* <img src={arrow} width="20" height="20" alt="up arrow"/> */}
                </div>
            </div>
            <div class="banner1text primaryfont">
              Feel <span class="purpletext">confident</span> and <span class="purpletext">empowered </span> 
               wherever you go. Find something that resonates with your <span class="purpletext">soul</span>.  
               <div class='featuredbutton'>
                    explore collections
                    <img src={arrow} width="20" height="20" alt="up arrow"/>
                </div>
            </div>
            <div class='banner1right'>
                <div class="top-image">
                    <img src={butterfly} width="70" height="70" alt="butterfly"/>
                </div>
                <div class="bottom-image">
                    <img src={moonandstars} width="70" height="70" alt="moon and stars"/>
                    {/* <img src={arrow} width="20" height="20" alt="up arrow"/> */}
                </div>
            </div>

            
        </div>
    )
}