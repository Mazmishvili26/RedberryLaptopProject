// import assets

import downArrow from "../../assets/downArrow.png";

function Select({
  selectValue,
  showDropdownState,
  showDropdownFunction,
  data,
  handleChosenItem,
  selectDefaultValue,
  errors,
  selectError,
}) {
  return (
    <div className="select-relative">
      <div className={selectError ? "select select-error" : "select"}>
        <p className="select-value">
          {selectValue ? selectValue : selectDefaultValue}
        </p>
        <p>{errors.selectValue && errors.selectValue.message}</p>
        <img
          src={downArrow}
          className="down-arrow-png"
          onClick={showDropdownFunction}
        />
      </div>

      <div
        className={
          showDropdownState
            ? "team-select-dropdown show-dropdown"
            : "team-select-dropdown"
        }
      >
        {data.map((team) => {
          const { id, name } = team;
          return (
            <ul key={id} className="dropdown-ul">
              <li onClick={(e) => handleChosenItem(e, id)}>{name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Select;
