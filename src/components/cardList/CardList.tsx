import React from 'react';

import Header from '../header/Header';
import { TableCard } from './table/TableCard';

export const CardList = ({}) => {

    return (
        <>
            <Header />
            <TableCard data={[]}/>
        </>
    )
}

export default CardList;