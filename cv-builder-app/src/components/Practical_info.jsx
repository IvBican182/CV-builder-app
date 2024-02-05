

function Practical({
    updateCompanyName,
    updatePositionTitle,
    updateJobResponsibilities,
    updateDateFrom,
    updateDateUntil,
  }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Company Name"
          onChange={(event) => {
            updateCompanyName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Position Title"
          onChange={(event) => {
            updatePositionTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Job Responsibilities"
          onChange={(event) => {
            updateJobResponsibilities(event.target.value);
          }}
        />
        <input
          type="date"
          placeholder="Date From"
          onChange={(event) => {
            updateDateFrom(event.target.value);
          }}
        />
        <input
          type="date"
          placeholder="Date Until"
          onChange={(event) => {
            updateDateUntil(event.target.value);
          }}
        />
      </div>
    );
  }
  export default Practical;