import "../styles/FeaturedCollections.css"
import featuredcollection1 from '../images/featuredcollection1.jpg'
import featuredcollection2 from '../images/featuredcollection2.jpg'
import arrow from '../images/uparrow.png'

export const FeaturedCollections = () => {
    return (
        <div class="featuredcollections">
            <div class="featuredcollectionsheader">
                <div class="sectionheader secondaryfont">
                    <div>
                        <span class="purpletext">Featured </span> 
                    Collections
                    </div>
                    
                </div>
            </div>
            <div class="featuredcollectionssection">
                <div class="left">
                    <div class="photo">
                            <img src={featuredcollection1} width="449" height="299" alt="gymshark collab"/>
                    </div>
                    <div class="collectionname primaryfont">
                        ultra<span class="purpletext">violet </span>x <span class="secondaryfont">gymshark</span>
                    </div>
                    <div class="price secondaryfont">
                        <div class="secondaryfont">activewear | accessories </div>
                        <div class='featuredbutton small'>
                            view all collections
                            <img src={arrow} width="15" height="15" alt="up arrow"/>
                        </div>
                    </div>
                </div>
                <div class="verticalline">
                    <hr width="1" size="372"/>
                </div>
                <div class="right">
                    <div class="photo">
                            <img src={featuredcollection2} width="449" height="299" alt="gymshark collab"/>
                    </div>
                    <div class="collectionname primaryfont">
                        ultra<span class="purpletext">violet </span>x <span class="secondaryfont">aerie</span>
                    </div>
                    <div class="price secondaryfont">
                        <div class="secondaryfont">bras | undies | activewear</div>
                        <div class='featuredbutton small'>
                            view all collections
                            <img src={arrow} width="15" height="15" alt="up arrow"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}