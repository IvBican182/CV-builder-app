
//passing current education values and displaying them
export function EducationDisplay ({currentValue}) {
  return (
        <>
          <h3>Education info:</h3>
          <ul className="general-list">
            <li>{currentValue.school}</li>
            <li>{currentValue.college}</li>
            <li>{currentValue.lastJob}</li>
          </ul>
        </>


    
  )
}
