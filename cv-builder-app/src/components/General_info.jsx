

function General({ updateName, updateEmail, updatePhone }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            updateName(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            updateEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={(event) => {
            updatePhone(event.target.value);
          }}
        />
      </div>
    );
  }
  export default General;