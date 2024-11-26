// Dados para o gráfico de pessoas que gostam de trabalhar globalmente
const dataGlobal = [
    {
        x: ['Trabalho Criativo', 'Trabalho Analítico', 'Atividade Prática'],
        y: [45, 35, 20], // Percentagens globais
        type: 'bar',
        marker: {
            color: ['#3498db', '#2ecc71', '#f39c12']
        }
    }
];

const layoutGlobal = {
    title: {
        text: 'Preferências de Trabalho Globais (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Trabalho',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f3f4f6',
    paper_bgcolor: '#f3f4f6'
};

// Exibe o gráfico na seção com id 'grafico'
Plotly.newPlot('grafico', dataGlobal, layoutGlobal);

// Dados para o gráfico de pessoas que gostam de trabalhar no Colégio Morelli
const dataMorelli = [
    {
        x: ['Trabalho Criativo', 'Trabalho Analítico', 'Atividade Prática'],
        y: [40, 40, 20], // Percentagens específicas do Colégio Morelli
        type: 'bar',
        marker: {
            color: ['#3498db', '#2ecc71', '#f39c12']
        }
    }
];

const layoutMorelli = {
    title: {
        text: 'Preferências de Trabalho no Colégio Morelli (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Trabalho',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f3f4f6',
    paper_bgcolor: '#f3f4f6'
};

// Exibe o gráfico na seção com id 'grafico-morelli'
Plotly.newPlot('grafico-morelli', dataMorelli, layoutMorelli);

