export const columns = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 90 
    },
    {
        field: 'ativo',
        headerName: 'Ativo',
        width: 110,
        editable: true,
    
    },
    {
        field: 'data_fim',
        headerName: 'Data de Término',
        width: 190,
        editable: true,

    },
    {
        field: 'data_inicio',
        headerName: 'Data de Início',
        width: 170,
        editable: true,

    },
    {
        field: 'sistema',
        headerName: 'Sistema',
        width: 130,
        editable: true,
    },
    {
        field: 'valor',
        headerName: 'Valor',
        type: 'number',
        width: 110,
        editable: true,
    },
];

