import React, { useState, useEffect } from "react";
import './Home.css';
import Navbar from "../Common/Navbar";
import Dropdown from "../Common/Dropdown";
import Sections from "../Common/Sections";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    // Fetch product data from backend
    fetch('http://localhost:5000/api/items')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        // Extract unique sections from product data
        const uniqueSections = [...new Set(data.map(product => product.section))];
        setSections(uniqueSections.map((section, index) => ({ text: section, value: section })));
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const getTypesData = () => {
    if (!selectedSection) return [];
    const filteredProducts = products.filter(product => product.section === selectedSection);
    const uniqueCategories = [...new Set(filteredProducts.map(product => product.category))];
    return uniqueCategories.map(category => ({ text: category }));
  };

  const handleEditClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  // Filter products based on selectedSection and selectedType
  const filteredProducts = products.filter(product => {
    return (selectedSection ? product.section === selectedSection : true) &&
           (selectedType ? product.category === selectedType : true);
  });

  // Get the first product for display purposes
  const selectedProduct = filteredProducts.length > 0 ? filteredProducts[0] : null;

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
        {sections.map((sub, index) => (
          <div 
            className={`main-contents ${expandedRow === index ? "expanded" : ""}`} 
            key={index}
          >
            <div className="top-content">
              <span className="serial">{index + 1}</span>
              <Dropdown 
                label="Select Section" 
                options={sections} 
                onSelect={(value) => {
                  setSelectedSection(value);
                  setSelectedType(null); // Reset type when section changes
                }}
                selected={selectedSection}
              />
              <Dropdown 
                label="Select Type" 
                options={getTypesData()} 
                onSelect={(value) => setSelectedType(value)}
                selected={selectedType}
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
                <Sections product={selectedProduct} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
