import React from "react";
import Header from "../../components/user/header/header";
import BannerHeader from "../../components/user/header/bannerHeader";

import BodyHeader from "../../components/user/body/body";

import FooterTop from "../../components/user/footer/footertop";
import FooterBottom from "../../components/user/footer/footerB";



const HomePage = ()=>{
    return(
        <div>
            <Header/>
            <BannerHeader/>
         <BodyHeader/>
         <FooterTop/>
         <FooterBottom/>

          
          
        </div>
    )
}
export default HomePage;