import '../styles/BestSeller.css'
import arrow from '../images/uparrow.png'
import bestseller1 from '../images/bestseller1.png';
import bestseller2 from '../images/bestseller2.png';
import bestseller3 from '../images/bestseller3.png';

export const BestSeller = () => {
    return(
        <div class="bestseller">
            <div class="sectionheader secondaryfont">
                <div>
                    <span class="purpletext">Current </span> 
                Trends
                </div>
                <div>
                    <div class='featuredbutton'>
                        view all collections
                        <img src={arrow} width="20" height="20" alt="up arrow"/>
                    </div>
                </div>
                
            </div>
            <div class="bestsellersection">
                <div>
                    <div class="photo">
                        <img src={bestseller1} width="210" height="299" alt="velour hoodie"/>
                    </div>
                    <div class="collectionname primaryfont">Cancer Velour Hoodie</div>
                    <div class="price secondaryfont">
                        <div class="secondaryfont purpletext">$30.00</div>
                        <div class="plus">+</div>
                    </div>
                </div>
                <div class="verticalline">
                    <hr width="1" size="372"/>
                </div>
                <div>
                    <div class="photo">
                        <img src={bestseller2} width="210" height="299" alt="velour hoodie"/>
                    </div>
                    <div class="collectionname primaryfont">Plum Shortcut Midi Dress</div>
                    <div class="price secondaryfont">
                        <div class="secondaryfont purpletext">$40.00</div>
                        <div class="plus">+</div>
                    </div>
                </div>
                <div class="verticalline">
                    <hr width="1" size="372"/>
                </div>
                <div>
                    <div class="photo">
                        <img src={bestseller3} width="210" height="299" alt="velour hoodie"/>
                    </div>
                    <div class="collectionname primaryfont">Lilac Confessions Set</div>
                    <div class="price secondaryfont">
                        <div class="secondaryfont purpletext">$50.00</div>
                        <div class="plus">+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}