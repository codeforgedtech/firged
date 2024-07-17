import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faJs, faReacteurope } from '@fortawesome/free-brands-svg-icons'; // Imports för ikonerna
import { SiDart, SiFlutter, SiTypescript } from "react-icons/si";
import AppList from './components/AppList';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import logo from './assets/forgedHublogo.png';
import { initialApps } from './help/data';
import { categories } from './help/categories';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #031b33; /* Mörkblå */
    color: #f4f9f1; /* Vit */
    min-height: 100vh;
`;

const Title = styled.h1`
    font-size: 2.5em;
    color: #84a6b2; /* Ljusblå */
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    text-align: center;

    img {
        width: 80px; /* Justera storleken på logotypen efter behov */
        margin-right: 10px;
    }

    @media (min-width: 768px) {
        font-size: 3.5em;

        img {
            width: 100px;
        }
    }
`;

const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
    max-width: 500px;

    @media (min-width: 768px) {
        flex-direction: row;
        width: auto;
    }
`;

const TechnologyIcons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;

    svg {
        font-size: 2em;
        margin: 10px;
        color: #84a6b2; /* Ljusblå */
        cursor: pointer;
    }
`;

const Pagination = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    button {
        margin: 5px;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        background-color: #3c5566; /* Mörkare blå */
        color: #f4f9f1; /* Vit */
        cursor: pointer;
        &:disabled {
            background-color: #3d93a2; /* Turkos */
            cursor: not-allowed;
        }
    }
`;

const App = () => {
    const [apps, setApps] = useState(initialApps);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const appsPerPage = 6;

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleCategoryChange = (category) => {
        if (categories.some(cat => cat.name === category)) {
            setSelectedCategory(category);
            setSelectedSubcategory('');
        } else {
            setSelectedSubcategory(category);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const filteredApps = apps.filter(app => 
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory ? app.category === selectedCategory : true) &&
        (selectedSubcategory ? app.subcategory === selectedSubcategory : true)
    );

    const indexOfLastApp = currentPage * appsPerPage;
    const indexOfFirstApp = indexOfLastApp - appsPerPage;
    const currentApps = filteredApps.slice(indexOfFirstApp, indexOfLastApp);

    const totalPages = Math.ceil(filteredApps.length / appsPerPage);

    return (
        <Container>
            <Title>
                <img src={logo} alt="Forged Code Logo" /> ForgedHub
            </Title>
            <FiltersContainer>
                <SearchBar onSearch={handleSearch} />
                <CategoryFilter 
                    categories={categories} 
                    onCategoryChange={handleCategoryChange}
                    selectedCategory={selectedCategory}
                />
            </FiltersContainer>
            <AppList apps={currentApps} />
            <TechnologyIcons>
                <FontAwesomeIcon icon={faJava} title="Java" />
                <FontAwesomeIcon icon={faReact} title="React" />
                <FontAwesomeIcon icon={faJs} title="JavaScript" />
                <FontAwesomeIcon icon={faReacteurope} title="React Native" />
                <SiDart title="Dart" />
                <SiFlutter title="Flutter" />
                <SiTypescript title="TypeScript" />
            </TechnologyIcons>
            <Pagination>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
            </Pagination>
        </Container>
    );
};

export default App;


