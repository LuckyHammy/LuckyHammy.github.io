import React from "react";
import fifthAvatar from "../../assets/mainbg.png";
import flower from "../../assets/flowers.webp";
import ABC from "../../assets/abc.png";
import IPB from "../../assets/IPB.png";
import Lizard from "../../assets/Lizard.png";
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

function FifthComponent() {
  return (
    <div className="fifth-section">
      <div className="fifth-section-container">
        <div className="fifth-section-summary">
          <div className="fifth-section-title">ABOUT ME</div>
          <div className="fifth-section-content">
            Web, Mobile, and Software Developer
          </div>
        </div>
        <div className="fifth-section-body">
          <div className="fifth-section-avatar">
            <img src={fifthAvatar} alt="" />
          </div>
          <div className="fifth-section-items">
            <CCarousel controls indicators dark transition="crossfade">
              <CCarouselItem>
                <CImage className="d-block w-100" src={IPB} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block">
                  <h5 className="fifth-carousel-title">IPB Univeristy</h5>
                  <p className="fifth-carousel-contents">
                    Graduation of master's degree
                  </p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={Lizard} alt="slide 2" />
                <CCarouselCaption className="d-none d-md-block">
                  <h5 className="fifth-carousel-title">ABC Technologies</h5>
                  <p className="fifth-carousel-contents">
                    Junior Full Stack Developer
                  </p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={ABC} alt="slide 3" />
                <CCarouselCaption className="d-none d-md-block">
                  <h5 className="fifth-carousel-title">LizardGlobal Company</h5>
                  <p className="fifth-carousel-contents">
                    Senior Full Stack Developer
                  </p>
                </CCarouselCaption>
              </CCarouselItem>
            </CCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FifthComponent;
