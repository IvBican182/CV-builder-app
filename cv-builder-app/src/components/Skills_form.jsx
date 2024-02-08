

export function SkillsForm ({currentValue,inputHandle, onSubmit}) {
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="personal-form-div">
        <label htmlFor="skills">Talk About your skills: </label>
        <input type="text" id="skills" rows="4" cols="50" value={currentValue.skills} onChange={(e) => inputHandle("skills", e.target.value)} ></input>
        <button type="submit">Add</button>
      </div>
    </form>
  )
   

  }


