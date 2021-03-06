// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['gh-ah', 0],
    ['gh-ep', 1],
    ['gh-wp', 2],
    ['gh-aa', 3],
    ['gh-tv', 4],
    ['gh-np', 5],
    ['gh-ue', 6],
    ['gh-uw', 7],
    ['gh-ba', 8],
    ['gh-cp', 9]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/gh/gh-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/gh/gh-all.js">Ghana</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
