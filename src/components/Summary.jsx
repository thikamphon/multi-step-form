import React from 'react';
import '../assets/css/Summary.css'

function Summary({ formData, calculateTotalCost, prevStep, nextStep, skip }) {
    const selectedAddOns = Object.keys(formData.addons).filter(addon => formData.addons[addon].selected);
    return (
        <>
            <div className="summary">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
                <div className='container-summary'>
                    <div className='container-detail'>
                        <div className="detail-plan">
                            <div>
                                <h4>{formData.plan} ({calculateTotalCost().durationPlan})</h4>
                                <a href='' onClick={skip}>Change</a>
                            </div>
                            <h4 className='plan-price'>${calculateTotalCost().priceOfPlan} / {formData.yearly ? 'yr' : 'mo'}</h4>
                        </div>
                        <br />
                        <hr />
                        {selectedAddOns.map(addon => (
                            <>
                                <div className='details' key={addon}>
                                    <p>{addon === 'onlineService'
                                        ? 'Online service' : addon === 'largerStorage'
                                            ? 'Larger Storage' : 'Customizable profile'}</p>
                                    <p className='details-price add-on'>${formData.yearly ? formData.addons[addon].price * 10 : formData.addons[addon].price}/{formData.yearly ? 'yr' : 'mo'}</p>
                                </div>
                            </>
                        ))}
                    </div>

                    <div className='details total'>
                        <p>Total (per {formData.yearly ? 'year' : 'month'})</p>
                        <h3>${calculateTotalCost().totalCost}/{formData.yearly ? 'yr' : 'mo'}</h3>
                    </div>
                </div>

            </div>
            <div className="navigations">
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

export default Summary;
