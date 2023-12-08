import React from 'react';

import {
  DataGrid,
  GridColDef,
  GridRowsProp,
} from '@mui/x-data-grid';

export const TableCard = ({data}:{data:GridRowsProp}) => {     
      
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'desc', headerName: 'Description', width: 150 },
        { field: 'family', headerName: 'Family', width: 150 },
        { field: 'affinity', headerName: 'Affinity', width: 150 },
        { field: 'energy', headerName: 'Energy', width: 150 },
        { field: 'hp', headerName: 'Health Point', width: 150 },
        { field: 'price', headerName: 'Price', width: 150 },
      ];

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={data} columns={columns} />
        </div>
    )
};
