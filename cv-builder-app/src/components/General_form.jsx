

export function GeneralForm ({currentValue,inputHandle, onSubmit}) {
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="personal-form-div">
        <label htmlFor="full-name">Full name</label>
        <input type="text" id="full-name" value={currentValue.fullName} onChange={(e) => inputHandle("fullName", e.target.value)} placeholder="enter full name"></input>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" value={currentValue.email} onChange={(e) => inputHandle("email",e.target.value)} placeholder="email"></input>
        <label htmlFor="phone">Phone number</label>
        <input type="tel" id="phone" value={currentValue.phone} onChange={(e) => inputHandle("phone",e.target.value)} placeholder="phone number"></input>
        <button type="submit">Add</button>
      </div>
    </form>
  )
   

  }

  
   



