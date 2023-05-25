import '../styles/Featured.css'
import featuredimg from '../images/featuredbackground.png'
import newarrival1 from '../images/newarrival1.png'
import newarrival2 from '../images/newarrival2.png'
import newarrival3 from '../images/newarrival3.png'
import arrow from '../images/uparrow.png'
import featuredimage from '../images/featuredimage.png'
export const Featured = () => {
    return (
        <div class="featured">
            <div class="featuredcontainer">
                <div class='featuredtitle primaryfont'>
                    <div class='featuredname purpletext'>
                        lilac
                    </div>
                    <div class='featuredcollection'>collection</div>
                </div>
                <div class='featuredsubtitle secondaryfont'>Fashion is the essence of our magic. <br></br>Turn your outfit into the full experience.</div>
                <div class='featuredlinks secondaryfont'>
                    <div class='featuredbutton'>
                        explore collections
                        <img src={arrow} width="20" height="20" alt="up arrow"/>
                    </div>
                    <div class='bestsellerbutton'>
                        <span>2023<br></br> trending <br></br>collections</span>
                    </div>
                </div>
                <div class='newarrivals'>
                    <div class='newarrivalstitle primaryfont'>
                        <span class='purpletext'>New</span>
                        <span>Arrivals</span> 
                        <span class='newarrivalborder'></span>
                        <span>Spring</span>
                        <span class='purpletext'>'23</span>
                    </div>
                    <div class='newarrivallinks'>
                        <div class="newarrivalcircle" style={{backgroundImage: `url(${newarrival1})`}}></div>
                        <div class="newarrivalcircle" style={{backgroundImage: `url(${newarrival2})`}}></div>
                        <div class="newarrivalcircle" style={{backgroundImage: `url(${newarrival3})`}}></div>
                        <div class="circlearrow">
                            <img src={arrow} width="30" height="30" alt="up arrow"/>
                        </div>
                    </div>
                
                </div>
                
            </div>

            <div class="featuredimage">
                <img src={featuredimage}  alt="up arrow"/>
            </div>
        </div>
    )
}
// width="382" height="544"