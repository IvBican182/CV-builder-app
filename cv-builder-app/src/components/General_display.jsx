//passing current general values and displaying them
export function GeneralDisplay ({currentValue}) {
   return (
        <>
          <h3>General info:</h3>
          <ul className="general-list">
            <li>{currentValue.fullName}</li>
            <li>{currentValue.email}</li>
            <li>{currentValue.phone}</li>
          </ul>
        </>
        
   ) 
}
