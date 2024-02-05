import { useState } from "react";
import General from "./components/General_info";
import Educational from "./components/Education_info";
import Practical from "./components/Practical_info";
import "./App.css";


function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    studyTitle: "",
    studyDate: "",
    companyName: "",
    positionTitle: "",
    jobResponsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  const updateName = (name) => {
    setInfo((prevInfo) => ({ ...prevInfo, name }));
  };
  const updateEmail = (email) => {
    setInfo((prevInfo) => ({ ...prevInfo, email }));
  };
  const updatePhone = (phone) => {
    setInfo((prevInfo) => ({ ...prevInfo, phone }));
  };
  const updateSchoolName = (schoolName) => {
    setInfo((prevInfo) => ({ ...prevInfo, schoolName }));
  };
  const updateStudyTitle = (studyTitle) => {
    setInfo((prevInfo) => ({ ...prevInfo, studyTitle }));
  };
  const updateStudyDate = (studyDate) => {
    setInfo((prevInfo) => ({ ...prevInfo, studyDate }));
  };
  const updateCompanyName = (companyName) => {
    setInfo((prevInfo) => ({ ...prevInfo, companyName }));
  };
  const updatePositionTitle = (positionTitle) => {
    setInfo((prevInfo) => ({ ...prevInfo, positionTitle }));
  };
  const updateJobResponsibilities = (jobResponsibilities) => {
    setInfo((prevInfo) => ({ ...prevInfo, jobResponsibilities }));
  };
  const updateDateFrom = (dateFrom) => {
    setInfo((prevInfo) => ({ ...prevInfo, dateFrom }));
  };
  const updateDateUntil = (dateUntil) => {
    setInfo((prevInfo) => ({ ...prevInfo, dateUntil }));
  };

  return (
    <>
      <h1>CV Application</h1>
      <div id="container">
        <div>
          <General
            updateName={updateName}
            updateEmail={updateEmail}
            updatePhone={updatePhone}
          />
          <Educational
            updateSchoolName={updateSchoolName}
            updateStudyTitle={updateStudyTitle}
            updateStudyDate={updateStudyDate}
          />
          <Practical
            updateCompanyName={updateCompanyName}
            updatePositionTitle={updatePositionTitle}
            updateJobResponsibilities={updateJobResponsibilities}
            updateDateFrom={updateDateFrom}
            updateDateUntil={updateDateUntil}
          />
        </div>
        <div>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <p>School Name: {info.schoolName}</p>
          <p>Study Title: {info.studyTitle}</p>
          <p>Study Date: {info.studyDate}</p>
          <p>Company Name: {info.companyName}</p>
          <p>Position Title: {info.positionTitle}</p>
          <p>Job Responsibilities: {info.jobResponsibilities}</p>
          <p>From: {info.dateFrom}</p>
          <p>Until: {info.dateUntil}</p>
        </div>
      </div>
    </>
  );
}
export default App;