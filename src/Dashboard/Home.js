import React, { useState } from "react";
import './Home.css';
import Navbar from "../Common/Navbar";
import Dropdown from "../Common/Dropdown";
import Sections from "../Common/Sections";

const Home = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);

  const sectionData = [
    { text: 'Boys', value: 1 },
    { text: 'Girls', value: 2 },
    { text: 'Men', value: 3 },
    { text: 'Women', value: 4 },
  ];

  const getTypesData = () => {
    switch (selectedSection) {
      case 'Boys':
        return [
          { text: 'Stitched', value: 1 },
          { text: 'Un-Stitched', value: 2 },
          { text: 'Kurta', value: 3 },
          { text: 'Specials', value: 4 },
        ];
      case 'Girls':
        return [
          { text: 'Stitched', value: 1 },
          { text: 'Un-Stitched', value: 2 },
          { text: 'Kurti', value: 3 },
          { text: 'Specials', value: 4 },
        ];
      case 'Men':
        return [
          { text: 'Stitched', value: 1 },
          { text: 'Un-Stitched', value: 2 },
          { text: 'Kurta', value: 3 },
          { text: 'Specials', value: 4 },
        ];
      case 'Women':
        return [
          { text: 'Stitched', value: 1 },
          { text: 'Un-Stitched', value: 2 },
          { text: 'Kurti', value: 3 },
          { text: 'Specials', value: 4 },
        ];
      default:
        return [];
    }
  };

  const handleEditClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="Home">
      <Navbar />
      <div className="home-content">
        <div className="contents-head">
          <span className="s-number">Serial</span>
          <span className="section-home">Sections</span>
          <span className="contents">Contents</span>
          <span className="home-date-added">Date Added</span>
          <span className="home-edit">Add/Edit</span>
        </div>
        {sectionData.map((sub, index) => (
          <div 
            className={`main-contents ${expandedRow === index ? "expanded" : ""}`} 
            key={index}
          >
            <div className="top-content">
              <span className="serial">{index + 1}</span>
              <Dropdown 
                label="Select Section" 
                options={sectionData} 
                onSelect={(value) => setSelectedSection(value)}
              />
              <Dropdown 
                label="Select Type" 
                options={getTypesData()} 
              />
              <span className="date-home">29 July</span>
              <a 
                className="edit-add" 
                onClick={() => handleEditClick(index)}
              >
                Edit
              </a>
            </div>
            {expandedRow === index && (
              <div className="expanded-content">
                <Sections />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
