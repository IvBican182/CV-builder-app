
//passing current skill value and displaying it
export function SkillsDisplay ({currentValue}) {
    return (
         <>
           <h3>Skills info:</h3>
           <ul className="general-list">
             <li>{currentValue.skills}</li>
           </ul>
         </>
         
    ) 
 }