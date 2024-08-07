import React, { useState } from 'react';
import './Dropdown.css';
import { 
  MDBDropdown, 
  MDBDropdownToggle, 
  MDBDropdownMenu, 
  MDBDropdownItem, 
  MDBCheckbox 
} from 'mdb-react-ui-kit';

const Dropdown = ({ label, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (value) => {
    setSelectedOption(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className="custom-select">
      <div className='label-head'>
        <label>{label}</label>
      </div>
      <MDBDropdown className='dropdown-parent'>
        <MDBDropdownToggle tag="button" className="btn btn-primary custom">
          {selectedOption || label}
          <i className="bi bi-chevron-down down"></i>
        </MDBDropdownToggle>
        <MDBDropdownMenu className='dropdown-menu'>
          {options.map((option, index) => (
            <MDBDropdownItem 
              key={index} 
              className="dropdown-item"
              onClick={() => handleSelect(option.text)}
            >
              <MDBCheckbox 
                label={option.text} 
                checked={selectedOption === option.text}
                onChange={() => handleSelect(option.text)}
                className='checkbox'
              />
            </MDBDropdownItem>
          ))}
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
};

export default Dropdown;
