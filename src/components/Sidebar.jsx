import React from "react";
import '../assets/css/Sidebar.css'

function Sidebar({ steps, currentStep }) {

    const sidebar = (
        <>
            <div className="container-grid">
                <div className={`step-rounded ${currentStep === 1 ? 'selected' : ''}`}>1</div>
                <div className="description">
                    <span>STEP 1</span>
                    <h3>{steps[0]}</h3>
                </div>
            </div>
            <div className="container-grid">
                <div className={`step-rounded ${currentStep === 2 ? 'selected' : ''}`}>2</div>
                <div className="description">
                    <span>STEP 2</span>
                    <h3>{steps[1]}</h3>
                </div>
            </div>
            <div className="container-grid">
                <div className={`step-rounded ${currentStep === 3 ? 'selected' : ''}`}>3</div>
                <div className="description">
                    <span>STEP 3</span>
                    <h3>{steps[2]}</h3>
                </div>
            </div>
            <div className="container-grid">
                <div className={`step-rounded ${currentStep === 4 || currentStep === 5 ? 'selected' : ''}`}>4</div>
                <div className="description">
                    <span>STEP 4</span>
                    <h3>{steps[3]}</h3>
                </div>
            </div>
        </>
    )
    return (
        <div className="containerC">
            {sidebar}
        </div >
    )
}

export default Sidebar