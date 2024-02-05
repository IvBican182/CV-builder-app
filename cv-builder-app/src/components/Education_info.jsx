

function Educational({ updateSchoolName, updateStudyTitle, updateStudyDate }) {
    return (
      <div>
        <input
          type="text"
          placeholder="School Name"
          onChange={(event) => {
            updateSchoolName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Study Title"
          onChange={(event) => {
            updateStudyTitle(event.target.value);
          }}
        />
        <input
          type="date"
          placeholder="Study Date"
          onChange={(event) => {
            updateStudyDate(event.target.value);
          }}
        />
      </div>
    );
  }
  export default Educational;