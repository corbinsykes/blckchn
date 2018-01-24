export class Chart {
    title: string;
    type: string;
    xValues: Array<any> = [];
    yValues: Array<any> = [];
    colors: Array<any>;
    options: Object;

    constructor(title, type, dataset, detail = false) {
        this.title = title;
        this.type = type;

        this.colors = [{
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgb(0, 78, 146)',
        }];

        if (!!detail) {
            this.options = {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        display: true
                    }],
                    xAxes: [{
                        display: true,
                    }]
                }
            };
        } else {
            this.options = {
                responsive: true,
                scales: {
                    yAxes: [{
                        display: false
                    }],
                    xAxes: [{
                        display: false
                    }]
                },
                tooltips: {
                    enabled: false
                },
            };
        }

        this.xValues = dataset.xValues;
        this.yValues = dataset.yValues;
    }
}