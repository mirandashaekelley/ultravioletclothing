import "../styles/Categories.css"
import arrow from '../images/uparrow.png'
import bestseller1 from '../images/bestseller1.png';
import bestseller2 from '../images/bestseller2.png';
import bestseller3 from '../images/bestseller3.png';
import newarrival1 from '../images/newarrival1.png'
import newarrival2 from '../images/newarrival2.png'
import newarrival3 from '../images/newarrival3.png'
import featuredimage from '../images/featuredimage.png'

export const Categories = () => {
    return (
        <div class="categories">
              <div class="sectionheader secondaryfont">
                <div>
                    Categories
                </div>
                <div>
                    <div class='featuredbutton'>
                        view all collections
                        <img src={arrow} width="20" height="20" alt="up arrow"/>
                    </div>
                </div>
            </div> 
            <div class="categoriessection">
                <div class="categoryfilters secondaryfont">
                    <div class="category">
                        <div>tops</div>
                    </div>
                    <div class="category">
                        <div>bottoms</div>
                    </div>
                    <div class="category">
                        <div>dresses</div>
                    </div>
                    <div class="category">
                        <div>activewear</div>
                    </div>
                    <div class="category">
                        <div>accessories</div>
                    </div>
                </div>
                <div>
                    <div class="categoryphotos">
                        <div>
                            <div class="photo">
                                <img src={bestseller1} width="147" height="210" alt="velour hoodie"/>
                            </div>
                            <div class="collectionname primaryfont">Cancer Velour Hoodie</div>
                            <div class="price secondaryfont">
                                <div class="secondaryfont purpletext">$30.00</div>
                                <div class="plus">+</div>
                            </div>
                        </div>
                        <div class="verticalline">
                            <hr width="1" size="277"/>
                        </div>
                        <div>
                            <div class="photo">
                                <img src={bestseller2} width="147" height="210" alt="velour hoodie"/>
                            </div>
                            <div class="collectionname primaryfont">Cancer Velour Hoodie</div>
                            <div class="price secondaryfont">
                                <div class="secondaryfont purpletext">$30.00</div>
                                <div class="plus">+</div>
                            </div>
                        </div>
                        <div class="verticalline">
                            <hr width="1" size="277"/>
                        </div>
                        <div>
                            <div class="photo">
                                <img src={bestseller3} width="147" height="210" alt="velour hoodie"/>
                            </div>
                            <div class="collectionname primaryfont">Cancer Velour Hoodie</div>
                            <div class="price secondaryfont">
                                <div class="secondaryfont purpletext">$30.00</div>
                                <div class="plus">+</div>
                            </div>
                        </div>
                        <div class="verticalline">
                            <hr width="1" size="277"/>
                        </div>
                        <div>
                            <div class="photo">
                                <img src={newarrival1} width="147" height="210" alt="velour hoodie"/>
                            </div>
                            <div class="collectionname primaryfont">Cancer Velour Hoodie</div>
                            <div class="price secondaryfont">
                                <div class="secondaryfont purpletext">$30.00</div>
                                <div class="plus">+</div>
                            </div>
                        </div>
                        <div>
                            <div class="photo">
                                <img src={newarrival2} width="147" height="210" alt="velour hoodie"/>
                            </div>
                            <div class="collectionname primaryfont">Cancer Velour Hoodie</div>
                            <div class="price secondaryfont">
                                <div class="secondaryfont purpletext">$30.00</div>
                                <div class="plus">+</div>
                            </div>
                        </div>
                        <div class="verticalline">
                            <hr width="1" size="277"/>
                        </div>
                        <div>
                            <div class="photo">
                                <img src={newarrival3} width="147" height="210" alt="velour hoodie"/>
                            </div>
                            <div class="collectionname primaryfont">Cancer Velour Hoodie</div>
                            <div class="price secondaryfont">
                                <div class="secondaryfont purpletext">$30.00</div>
                                <div class="plus">+</div>
                            </div>
                        </div>
                        <div class="verticalline">
                            <hr width="1" size="277"/>
                        </div>
                        <div>
                            <div class="photo">
                                <img src={bestseller1} width="147" height="210" alt="velour hoodie"/>
                            </div>
                            <div class="collectionname primaryfont">Cancer Velour Hoodie</div>
                            <div class="price secondaryfont">
                                <div class="secondaryfont purpletext">$30.00</div>
                                <div class="plus">+</div>
                            </div>
                        </div>
                        <div class="verticalline">
                            <hr width="1" size="277"/>
                        </div>
                        <div>
                            <div class="photo">
                                <img src={featuredimage} width="147" height="210" alt="velour hoodie"/>
                            </div>
                            <div class="collectionname primaryfont">Cancer Velour Hoodie</div>
                            <div class="price secondaryfont">
                                <div class="secondaryfont purpletext">$30.00</div>
                                <div class="plus">+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}