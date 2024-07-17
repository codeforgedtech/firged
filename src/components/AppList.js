import React from 'react';
import styled from 'styled-components';
import AppItem from './AppItem';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const AppList = ({ apps }) => {
    return (
        <Grid>
            {apps.map(app => (
                <AppItem key={app.id} app={app} />
            ))}
        </Grid>
    );
};

export default AppList;