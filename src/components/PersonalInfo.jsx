import React from "react";
// import './StepperControl.css'
import '../assets/css/PersonalInfo.css'

function PersolnalInfo({ formData, errors, handleChange, handleSubmit }) {

    return (
        <>
            <div className="personalInfo">
                <div className="container-info">
                    <h1>Personal info</h1>
                    <p> Please provide your name, email address, and phone number.</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="label-container">
                                <label>Name:</label>
                                {errors.name && <p className="errorstxt">{errors.name}</p>}
                            </div>
                            <input
                                className={errors.name ? 'error' : ''}
                                type="text"
                                name="name"
                                placeholder="e.g. Stephen King"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <div className="label-container">
                                <label>Email:</label>
                                {errors.email && <p className="errorstxt">{errors.email}</p>}
                            </div>
                            <input
                                className={errors.email ? 'error' : ''}
                                type="email"
                                name="email"
                                placeholder="e.g. stephenking@lorem.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <div className="label-container">
                                <label>Phone:</label>
                                {errors.phone && <p className="errorstxt">{errors.phone}</p>}
                            </div>
                            <input
                                className={`${errors.phone ? 'error' : ''} ${errors.phoneFormat ? 'error' : ''}`}
                                type="tel"
                                name="phone"
                                placeholder="e.g. +1 234 567 890"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        {/* <div className="navigations">
                        <button
                            type="submit"
                            className="nextStep" >
                            Next Step
                        </button>
                    </div> */}
                    </form>
                </div>

                <div className="navigations">
                    <button
                        type="submit"
                        className="nextStep"
                        onClick={handleSubmit} >
                        Next Step
                    </button>
                </div>
            </div>

        </>

        // </div>
    )
}
export default PersolnalInfo