import PropTypes from "prop-types";
import style from "./FindContacts.module.css";

export const FindContacts = ({ value, onChange }) => (
  <>
    <h1>Contacts</h1>
    <label>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);

FindContacts.propsTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
