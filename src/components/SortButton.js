import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    

    @media (min-width: 768px) {
        justify-content: flex-start;
        margin-bottom: 0;
        align-items: flex-end; /* Justera så knapparna är på samma höjd som sökrutan */
    }
`;

const Select = styled.select`
    padding: 10px;
    margin: 10px 0 ;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    width: 100%;

    @media (min-width: 768px) {
        width: auto;
        margin: 0 10px 0 0; /* Lägger till margin-right för att separera från sökrutan */
    }
`;

const SortOptions = ({ onSort }) => {
    const handleSortChange = (event) => {
        onSort(event.target.value);
    };

    return (
        <SelectContainer>
            <Select onChange={handleSortChange}>
                <option value="">Select sort option</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="category">Category</option>
            </Select>
        </SelectContainer>
    );
};

export default SortOptions;

