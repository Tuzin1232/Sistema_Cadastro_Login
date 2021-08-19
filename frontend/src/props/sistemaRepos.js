export async function getSistemas(url) {

    let data = {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(url, data).then(async (r) => {
        console.log(await r.json())
    })
}

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90
    },
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
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
    {
        field: 'data_inicio',
        headerName: 'Data de Início',
        type: 'date',
        width: 170,
        editable: true,

    },
    {
        field: 'data_fim',
        headerName: 'Data de Término',
        type: 'date',
        width: 190,
        editable: true,

    },
    {
        field: 'ativo',
        headerName: 'Ativo',
        type: 'number',
        width: 110,
        editable: true,

    },
];

export const rows = [];
