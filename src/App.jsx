import { useState } from 'react'
import Sidebar from './components/Sidebar'
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import Thanks from './components/Thanks'
import './App.css'
import './responsive.css'
import './assets/css/StepperControl.css'

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const steps = [
    "YOUR INFO",
    "SELECT PLAN",
    "ADD-ONS",
    "SUMMARY",
  ]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'Arcade',
    duration: 'Monthly',
    yearly: false,
    addons: {
      onlineService: { price: 1, selected: false },
      largerStorage: { price: 2, selected: false },
      customizableProfile: { price: 2, selected: false }
    },
  });

  const calculateTotalCost = () => {
    let totalCost = 0;
    let priceOfPlan = 0;
    const durationPlan = formData.yearly ? 'Yearly' : 'Monthly';
    const planPrice = {
      Arcade: 9,
      Advanced: 12,
      Pro: 15
    };

    totalCost = planPrice[formData.plan];
    totalCost *= formData.yearly ? 10 : 1;
    priceOfPlan = planPrice[formData.plan];
    priceOfPlan *= formData.yearly ? 10 : 1;

    for (const addon in formData.addons) {
      if (formData.addons[addon].selected) {
        totalCost += formData.addons[addon].price * (formData.yearly ? 10 : 1);
      }
    }

    return { totalCost, durationPlan, priceOfPlan };
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    if (name.startsWith("addons.")) {
      const addonName = name.split(".")[1];
      setFormData(prevFormData => ({
        ...prevFormData,
        addons: {
          ...prevFormData.addons,
          [addonName]: {
            ...prevFormData.addons[addonName],
            selected: newValue
          }
        }
      }));
    }
    else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: newValue
      }));
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'This field is required';
    }
    if (!formData.email) {
      newErrors.email ='This field is required';
    }
    if (!formData.phone || !/\d/.test(formData.phone)) {
      newErrors.phone = 'This field is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  }

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const skip = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep = 2);
  };

  const displayStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        );
      case 2:
        return (
          <SelectPlan
            formData={formData}
            handleChange={handleChange}
            calculateTotalCost={calculateTotalCost}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <AddOns
            formData={formData}
            handleChange={handleChange}
            calculateTotalCost={calculateTotalCost}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <Summary
            formData={formData}
            handleChange={handleChange}
            calculateTotalCost={calculateTotalCost}
            prevStep={prevStep}
            nextStep={nextStep}
            skip={skip}
          />
        );
      case 5:
        return <Thanks />;
      default:
        return null
    }
  };

  return (
    <div className='containerA'>
      <Sidebar
        steps={steps}
        currentStep={currentStep}
      />
      <div className='containerB'>
        {displayStep(currentStep)}
      </div>
    </div>
  )

};

export default App
