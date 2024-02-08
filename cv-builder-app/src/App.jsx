import { Header } from "./components/Header"
import { GeneralForm } from "./components/General_form"
import { GeneralDisplay } from "./components/General_display"; 
import { EducationForm } from "./components/Education_form"
import { EducationDisplay } from "./components/Education_display"
import { SkillsForm } from "./components/Skills_form"; 
import { SkillsDisplay } from "./components/Skills_display"; 
import { useState } from "react";
import "./App.css";

//our main component, here we will refrence other components in return
export default function App () {
  const [currentValue, setCurrentValue] = useState({
    fullName: "",
    email: "",
    phone: "",
    school: "",
    college: "",
    lastJob: "",
    skills: ""
  })
  
  
  function handleSubmit (e) {
    //preventing page reload when clicked
    e.preventDefault();
    console.log(currentValue);
  } 
  
  //handles the changes when user tipes something (trigers setCurrentValue function that will re-render changes for us)
  function handleInputchange (identifier, value) {
    setCurrentValue(prevValue => ({
      ...prevValue,
      [identifier] : value
    }))
  }
 
  //passing our Display and Form components
  return (
    <>
    <div className = "content">
      <div className="header-container">
        <Header />
      </div>

      <div className="main-forms">
        <div className="general-form">
          <GeneralForm onSubmit = {(e) => handleSubmit(e)} inputHandle = {handleInputchange} //passing functions as props
          currentValue = {currentValue}/>
        </div>
        <div className="education-form">
          <EducationForm onSubmit = {(e) => handleSubmit(e)} inputHandle = {handleInputchange} 
          currentValue = {currentValue}/>
        </div>
        <div className="skills-form">
          <SkillsForm onSubmit = {(e) => handleSubmit(e)} inputHandle = {handleInputchange}
          currentValue = {currentValue}/>
        </div>
      </div>
      
      <div className="cv-container">
        <div className="general-display">
          <GeneralDisplay
          currentValue = {currentValue}/>
        </div>
         

        <div className="education-display">
          <EducationDisplay
          currentValue = {currentValue}/>
        </div>

        <div className="skills">
          <SkillsDisplay
          currentValue = {currentValue}/>
        </div>

      </div>
    </div>
    </>
    
  )


}
  
