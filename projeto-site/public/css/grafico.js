verificar_autenticacao();


// só mexer se quiser alterar o tempo de atualização
// ou se souber o que está fazendo!
function atualizarGraficoLinha() {
    obterDadosGrafico2();
    setTimeout(atualizarGraficoLinha, 6000);
}

// altere aqui as configurações do gráfico
// (tamanhos, cores, textos, etc)
function configurarGrafico2() {
    var configuracoes = {
        responsive: true,
        animation: exibiu_grafico ? false : {duration: 1500},
        hoverMode: 'index',
        stacked: false,
        title: {
            display: true,
            text: 'Histórico recente de temperatura e umidade',
        
            
        },
        legend: {
            fontColor: "white"
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: "white"
                }
            }],
            yAxes: [{
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: 'left',
                id: 'y-temperatura',
                gridLines: {
                    color: "white",
                },
                ticks: {
                    fontColor: "white",
                    beginAtZero: true
                }
            }, {
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                ticks: {
                    fontColor: "white",
                    beginAtZero: true,
                    BackgroundColor: "white"

                    
                },
                position: 'right',
                id: 'y-umidade',

                // grid line settings
                gridLines: {
                    color: "white",
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            }],
        }
    };

    exibiu_grafico = true;

    return configuracoes;
}

// altere aqui como os dados serão exibidos
// e como são recuperados do BackEnd
function obterDadosGrafico2() {

    // neste JSON tem que ser 'labels', 'datasets' etc, 
    // porque é o padrão do Chart.js
    var dados2 = {
        labels: [],
        datasets: [
            {
                yAxisID: 'y-temperatura',
                label: 'Temperatura',
                borderColor: window.chartColors.red,
                backgroundColor: window.chartColors.red,
                fill: false,
                data: []
            },
            {
                yAxisID: 'y-umidade',
                label: 'Umidade',
                borderColor: window.chartColors.blue,
                backgroundColor: window.chartColors.blue,
                fill: false,
                data: []
            }
        ]
    };

    fetch('/leituras/ultimas', { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {

                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                resposta.reverse();

                for (i = 0; i < resposta.length; i++) {
                    var registro = resposta[i];
                
                    // aqui, após 'registro.' use os nomes 
                    // dos atributos que vem no JSON 
                    // que gerou na consulta ao banco de dados

                    dados2.labels.push(registro.dataHora);

                    dados2.datasets[0].data.push(registro.temperatura);
                    dados2.datasets[1].data.push(registro.umidade);
                }
                console.log(JSON.stringify(dados2));

                div_aguarde.style.display = 'none';

                plotarGrafico2(dados2);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}

// só altere aqui se souber o que está fazendo!
function plotarGrafico2(dados2) {
    console.log('iniciando plotagem do gráfico...');

    var ctx = canvas_grafico.getContext('2d');
    window.grafico_linha = Chart.Line(ctx, {
        data: dados2,
        options: configurarGrafico2()
    });
}
