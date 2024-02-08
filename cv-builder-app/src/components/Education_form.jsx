
//displaying the form and receiving props from App.jsx
export function EducationForm ({currentValue,inputHandle, onSubmit}) {
    return (
      <form className="form-container" onSubmit={onSubmit}>
        <div className="personal-form-div">
          <label htmlFor="school">School name:</label>
          <input type="text" id="school" value={currentValue.school} onChange={(e) => inputHandle("school", e.target.value)} placeholder="finished high school"></input>
          <label htmlFor="college">College name: </label>
          <input type="text" id="college" value={currentValue.college} onChange={(e) => inputHandle("college",e.target.value)} placeholder="finished college"></input>
          <label htmlFor="last-job">Your last position: </label>
          <input type="text" id="last-job" value={currentValue.lastJob} onChange={(e) => inputHandle("lastJob",e.target.value)} placeholder="your last job"></input>
          <button type="submit">Add</button>
        </div>
      </form>
    )
     
  
    }