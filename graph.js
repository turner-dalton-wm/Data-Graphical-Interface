google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['State', '2013 Bank Failures'],
        ['IL', 6],
        ['GA', 2],
        ['CA', 2],
        ['MD', 2],
        ['FL', 2],
        ['WA', 1],
        ['CO', 1],
        ['MN', 1],
        ['OK', 1],
        ['OH', 1],
        ['SC', 1]
    ]);

    var options = {
        title: 'Number of Banks Failed',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Banks Failed',
            minValue: 0
        },
        vAxis: {
            title: 'State'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}