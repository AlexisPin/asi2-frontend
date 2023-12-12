import React from 'react';

import { DataGrid, GridColDef, GridEventListener, GridRowsProp } from '@mui/x-data-grid';

interface TableCardProps {
  data: GridRowsProp;
  setSelectedCard: React.Dispatch<React.SetStateAction<number>>;
}

export const TableCard = ({ data, setSelectedCard }: TableCardProps) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: '#', width: 50 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'family', headerName: 'Family', width: 150 },
    { field: 'affinity', headerName: 'Affinity', width: 150 },
    { field: 'energy', headerName: 'Energy', width: 150 },
    { field: 'hp', headerName: 'Health Point', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
  ];

  const handleEvent: GridEventListener<'rowClick'> = (params) => {
    setSelectedCard(params.row.id);
  };

  return (
    <div style={{ margin: '24px' }}>
      <DataGrid
        rows={data}
        columns={columns}
        onRowClick={handleEvent}
        sx={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};
