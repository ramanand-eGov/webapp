import React from "react";
import PropTypes from "prop-types";
import Checkbox from "material-ui/Checkbox";
import "./index.css";

const defaultLabelStyle = {
  fontFamily: "Roboto, sans-serif",
};

const defaultStyle = {
  marginBottom: "10px",
};
const CheckboxUi = ({ options, defaultValue, labelStyle, onCheck, style = {}, checkedIcon, iconStyle, containerClassName }) => {
  const renderCheckboxOptions = () => {
    return options.map((option, index) => {
      return (
        <Checkbox
          key={index}
          value={option.value}
          label={option.label}
          onCheck={onCheck}
          style={{ ...defaultStyle, ...style }}
          iconStyle={iconStyle}
          checkedIcon={checkedIcon}
          labelStyle={{ ...defaultLabelStyle, ...labelStyle }}
        />
      );
    });
  };

  return <div className={`${containerClassName} checkbox-container`}>{renderCheckboxOptions()}</div>;
};

CheckboxUi.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired
  ),
  defaultValue: PropTypes.string,
  onCheck: PropTypes.func,
  style: PropTypes.object,
};

export default CheckboxUi;
