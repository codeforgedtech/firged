import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px; /* Justera efter behov */
`;

const SearchBar = ({ onSearch }) => {
    const handleSearch = (event) => {
        onSearch(event.target.value);
    };

    return (
        <SearchContainer>
            <Input 
                type="text" 
                placeholder="Search apps..." 
                onChange={handleSearch} 
            />
        </SearchContainer>
    );
};

export default SearchBar;