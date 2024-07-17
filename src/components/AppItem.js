import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background: #3c5566;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 200px;
    margin: 10px;
    padding: 20px;
    color: #f4f9f1;
    text-align: center;
`;

const AppIcon = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const AppName = styled.h2`
    font-size: 1.5em;
    margin-bottom: 10px;
`;

const AppDescription = styled.p`
    font-size: 0.9em;
    margin-bottom: 15px;
`;

const DownloadButton = styled.a`
    display: inline-block;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
   
    color: #f4f9f1;
    text-decoration: none;
    font-weight: bold;
    

   
`;

const PlatformButton = styled.a`
    display: inline-block;
    padding: 8px 12px;
    margin: 5px; /* Lägger till mellanrum runt knappen */
    border: none;
    border-radius: 5px;
    background-color: #84a6b2; /* Ljusblå */
    color: #031b33; /* Mörkblå */
    text-decoration: none;
    font-size: 0.8em;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #6a8f9d; /* Mörkare ljusblå */
    }
`;

const AppItem = ({ app }) => {
    return (
        <Card>
            <AppIcon src={`${app.icon}`} alt={`${app.name} icon`} />
            <AppName>{app.name}</AppName>
            <AppDescription>{app.description}</AppDescription>
            <DownloadButton href={app.downloadLink} target="_blank" rel="noopener noreferrer">
                Download
            </DownloadButton>
            <div>
                {app.platforms.map(platform => (
                    <PlatformButton key={platform.platform} href={platform.downloadLink} target="_blank" rel="noopener noreferrer">
                        {platform.platform.toUpperCase()}
                    </PlatformButton>
                ))}
            </div>
        </Card>
    );
};

export default AppItem;
