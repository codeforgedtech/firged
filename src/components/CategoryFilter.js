import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column; /* Visa element i kolumn på mobilen */
    align-items: center; /* Centrera elementen horisontellt */
    margin-bottom: 10px;
`;

const Select = styled.select`
    padding: 10px;
    margin: 5px 0; /* Lite mellanrum över och under select */
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    width: 100%;

    @media (min-width: 768px) {
        width: auto;
       
    }
`;

const CategoryFilter = ({ categories, onCategoryChange, selectedCategory }) => {
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [showSubcategorySelect, setShowSubcategorySelect] = useState(false);
    const [filteredCategories, setFilteredCategories] = useState([]);

    useEffect(() => {
        if (selectedCategory) {
            const category = categories.find(cat => cat.name === selectedCategory);
            setFilteredCategories(category.subcategories);
            setShowSubcategorySelect(true);
        } else {
            setFilteredCategories([]);
            setShowSubcategorySelect(false);
        }
    }, [selectedCategory, categories]);

    const handleCategoryChange = (e) => {
        const { value } = e.target;
        setSelectedSubcategory('');
        onCategoryChange(value);
        if (value === '') {
            setShowSubcategorySelect(false);
        }
    };

    const handleSubcategoryChange = (e) => {
        const { value } = e.target;
        setSelectedSubcategory(value);
    };

    return (
        <FilterContainer>
            <Select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Select category</option>
                {categories.map(category => (
                    <option key={category.name} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </Select>
            {showSubcategorySelect && (
                <Select value={selectedSubcategory} onChange={handleSubcategoryChange}>
                    <option value="">Select subcategory</option>
                    {filteredCategories.map(subcategory => (
                        <option key={subcategory} value={subcategory}>
                            {subcategory}
                        </option>
                    ))}
                </Select>
            )}
        </FilterContainer>
    );
};

export default CategoryFilter;




