import React from "react";
import '../assets/css/AddOns.css'

function AddOns({ formData, handleChange, prevStep, nextStep, calculateTotalCost }) {

    return (
        <>
            <div className="addOns">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
                <br />
                <div className="card-add-on">
                    <input
                        className="box-check"
                        type="checkbox"
                        name="addons.onlineService"
                        checked={formData.addons.onlineService.selected}
                        onChange={handleChange}
                    />
                    <label>
                        <h4>Online Service</h4>
                        <p>Access to multiplayer games</p>
                    </label>
                    <span>
                        ${formData.yearly ? 1 * 10 : 1}/{formData.yearly ? 'yr' : 'mo'}
                    </span>
                </div>
                <div className="card-add-on">
                    <input
                        className="box-check"
                        type="checkbox"
                        name="addons.largerStorage"
                        checked={formData.addons.largerStorage.selected}
                        onChange={handleChange}
                    />
                    <label>
                        <h4>Larger Storage</h4>
                        <p>Access to multiplayer games</p>
                    </label>
                    <span>
                        ${formData.yearly ? 2 * 10 : 2}/{formData.yearly ? 'yr' : 'mo'}
                    </span>
                </div>
                <div className="card-add-on">
                    <input
                        className="box-check"
                        type="checkbox"
                        name="addons.customizableProfile"
                        checked={formData.addons.customizableProfile.selected}
                        onChange={handleChange}
                    />
                    <label>
                        <h4>Customizable Profile</h4>
                        <p>Custom theme on your profile</p>
                    </label>
                    <span>
                        ${formData.yearly ? 2 * 10 : 2}/{formData.yearly ? 'yr' : 'mo'}
                    </span>
                </div>

            </div> <div className="navigations">
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

    )
}
export default AddOns