import React from "react";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png";
import devops from "../../assets/devops.png";
import security from "../../assets/security.png";
function SecondComponent() {
  return (
    <>
      <div className="second-section">
        <div className="second-section-container">
          <div className="second-section-summary">
            <div className="second-section-title">MY WORK'S FEATURES</div>
            <div className="second-section-contents">
              I think life is a series of choices. There is no right or wrong in
              those choices. If it suits your taste, that is all that matters. I
              will help you with your taste to be become reality.
            </div>
          </div>
          <div className="second-section-items">
            <div className="second-section-item">
              <div className="second-item-header">
                <img src={frontend} alt="NoFrontend" />
                <span>Frontend Development</span>
              </div>
              <div className="second-item-body">
                <p className="second-item-contents">
                  1. Building User Interfaces (UI)
                </p>
                <p className="second-item-contents">
                  2. User Experience (UX) Focus
                </p>
              </div>
            </div>
            <div className="second-section-item">
              <div className="second-item-header">
                <img src={backend} alt="Noavatar" />
                <span>Backend Development</span>
              </div>
              <div className="second-item-body">
                <p className="second-item-contents">
                  1. Server, Database Management
                </p>
                <p className="second-item-contents">2. API Development</p>
              </div>
            </div>
            <div className="second-section-item">
              <div className="second-item-header">
                <img src={devops} alt="Noavatar" />
                <span>DevOps and Deployment</span>
              </div>
              <div className="second-item-body">
                <p className="second-item-contents">1. CI/CD Pipelines</p>
                <p className="second-item-contents">
                  2. Cloud Services and Hosting
                </p>
              </div>
            </div>
            <div className="second-section-item">
              <div className="second-item-header">
                <img src={security} alt="Noavatar" />
                <span>Security and Optimization</span>
              </div>
              <div className="second-item-body">
                <p className="second-item-contents">1. Application Security</p>
                <p className="second-item-contents">
                  2. Performance Optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SecondComponent;
