import PropTypes from "prop-types";
import style from "./ContactList.module.css";
export const ContactList = ({ contactsList, onClick }) => {
  return (
    <>
      <ul className={style.list}>
        {contactsList.map((item) => (
          <li key={item.id} className={style.item}>
            <span>
              {item.name}: {item.number}
            </span>
            <button
              className={style.list__button}
              onClick={() => onClick(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired
};
