import React from 'react';
import '../assets/css/SelectPlan.css'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

function SelectPlan({ formData, handleChange, prevStep, nextStep }) {
    
    return (
        <>
            <div className='selectPlan'>
                <h1>Select Plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
                <div className='container-plan'>
                    <div className='plan-box'>
                        <img src={arcade}/>
                        <input
                            type="radio"
                            name="plan"
                            value="Arcade"
                            checked={formData.plan === 'Arcade'}
                            onChange={handleChange}
                        />
                        <label>
                            <h4>
                                Arcade
                            </h4>
                            <p>
                                ${formData.yearly ? 9 * 10 : 9}/{formData.yearly ? 'yr' : 'mo'}
                            </p>
                            {formData.yearly && <p className="free-promotion">2 months free</p>}
                        </label>
                    </div>
                    <div className='plan-box'>
                        <img src={advanced} alt="" />
                        <label>
                            <input
                                type="radio"
                                name="plan"
                                value="Advanced"
                                checked={formData.plan === 'Advanced'}
                                onChange={handleChange}
                            />
                            <h4>Advanced</h4>
                            <p>
                                ${formData.yearly ? 12 * 10 : 12}/{formData.yearly ? 'yr' : 'mo'}
                            </p>
                            {formData.yearly && <p className="free-promotion">2 months free</p>}
                        </label>
                    </div>
                    <div className='plan-box'>
                        <img src={pro} alt="" />
                        <label>
                            <input
                                type="radio"
                                name="plan"
                                value="Pro"
                                checked={formData.plan === 'Pro'}
                                onChange={handleChange}
                            />
                            <h4>Pro</h4>
                            <p>
                                ${formData.yearly ? 15 * 10 : 15}/{formData.yearly ? 'yr' : 'mo'}
                            </p>
                            {formData.yearly && <p className="free-promotion">2 months free</p>}
                        </label>
                    </div>
                </div>
                <div className='container-switch'>

                    <p className={formData.yearly ? '' : 'selecte-yearly'}>Monthly</p>
                    <label class="switch">
                        <input
                            type="checkbox"
                            name="yearly"
                            checked={formData.yearly}
                            onChange={handleChange}
                        />
                        <span class="slider round"></span>
                    </label>
                    <p className={formData.yearly ? 'selecte-yearly' : ''}>Yearly</p>
                </div>

            </div><div className="navigations">
                <button
                    onClick={prevStep}
                    className="goBack" >
                    Go Back
                </button>
                <button
                    onClick={nextStep}
                    className="nextStep" >
                    Next Step
                </button>
            </div>
        </>
    );
}

export default SelectPlan;

