import React, {useState, MouseEvent, FC, SetStateAction} from "react";
import clsx from "clsx";

import {DropDownProps, ListItem} from "./types";
import clsn from "./style.module.scss";

const DropDown: FC<DropDownProps> = ({
  className,
  selectionText = "Select",
  size = "large",
  defaultSelected = [],
  multiSelect = false,
  idKey = "id",
  nameKey = "name",
  options,
  onOptionChange,
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<ListItem[]>(defaultSelected);

  const dropDownClassName = clsx(
    className && className,
    clsn["drop-down"],
    size && clsn[`drop-down--${size}`]
  );
  const selectClassName = clsx(
    clsn["drop-down__select"],
    size && clsn[`drop-down__select--${size}`]
  );

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const isOptionAlreadySelected = (item: ListItem) => {
    const index = selected.findIndex((selection) => {
      return selection[idKey] === item[idKey];
    });

    return index !== -1;
  };

  const handleOptionSelect = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, option: ListItem) => {
    if (multiSelect) {
      setSelected((prevKeys: ListItem[]): ListItem[] => {
        const newKeys = isOptionAlreadySelected(option)
          ? prevKeys.filter((selection) => selection[idKey] !== option[idKey])
          : [...selected, option];
        onOptionChange({
          currentSelectedOption: option,
          allSelectedOption: newKeys,
        });
        return newKeys;
      });
    } else {
      setSelected([option]);
      onOptionChange({
        currentSelectedOption: option,
        allSelectedOption: [option],
      });
    }
  };

  const renderNamePill = () => {
    return (
      <div className={clsn[`drop-down__name-pills`]}>
        {selected.map((selection) => {
          return <span className={clsn[`drop-down__name-pill`]}>{selection[nameKey]}</span>;
        })}
      </div>
    );
  };

  return (
    <div className={dropDownClassName}>
      <div className={selectClassName} onClick={handleToggleOptions}>
        {!!selected.length ? renderNamePill() : selectionText}
        <span>{showOptions ? "⬆️" : "⬇️"}</span>
      </div>
      {showOptions && (
        <div className={clsn["drop-down__options"]}>
          {!!options.length &&
            options.map((option) => {
              const isSelected = isOptionAlreadySelected(option);
              return (
                <div
                  key={option[idKey]}
                  className={clsx(
                    clsn["drop-down__option"],
                    isSelected && clsn[`drop-down__option--selected`]
                  )}
                  onClick={(e) => handleOptionSelect(e, option)}
                >
                  {option[nameKey]}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
