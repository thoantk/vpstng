$(function() {
    "use strict";

   // notification popup
    // toastr.options.closeButton = true;
    // toastr.options.positionClass = 'toast-bottom-right';
    // toastr.options.showDuration = 1000;
    // toastr['info']('Hello, welcome to Iconic, a unique admin Template.');
    const Iconic = {
        colors: {
            "theme-cyan1": "#00bcd4",
            "theme-cyan2": "#0097a7",
            "theme-purple1": "#9c27b0",
            "theme-purple2": "#7b1fa2",
        }
    };
    // Google Analytics Dashboard
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#Google-Analytics-Dashboard', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 11, 8, 22, 18, 19, 6, 17, 11, 17, 32, 9, 12],
                    ['data2', 7, 7, 5, 7, 9, 12, 8, 22, 18, 19, 6, 17]
                ],
                type: 'bar', // default type of chart
                colors: {
               //     'data1': Iconic.colors["theme-cyan1"],
                //    'data2': Iconic.colors["theme-cyan2"]
                },
                names: {
                    // name of each serie
                    'data1': '2019',
                    'data2': '2020'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
                },
            },
            bar: {
                width: 20
            },
            legend: {
                show: false, //hide legend
            },
            padding: {
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            },
        });
    });

    //  Use by Device
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#Use-by-Device', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 20],
                    ['data2', 35],
                    ['data3', 15],
                    ['data4', 15],
                    ['data5', 15],
                ],
                type: 'donut', // default type of chart
                colors: {
                    'data1': Iconic.colors["theme-cyan1"],
                    'data2': '#ffc107',
                    'data3': Iconic.colors["theme-purple2"],
                    'data4': Iconic.colors["theme-cyan2"],
                    'data5': Iconic.colors["theme-purple1"],
                },
                names: {
                    // name of each serie
                    'data1': 'Đúng hạn',
                    'data2': 'Hoàn thành muộn',
                    'data3': 'Quá hạn',
                    'data4': 'Đang làm',
                    'data5': 'Chờ đánh giá',
                }
            },
            axis: {
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });

    // Use by Audience
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#Use-by-Audience', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', 45],
                    ['data2', 30],
                    ['data3', 20],
                    ['data4', 10],
                ],
                type: 'donut', // default type of chart
                colors: {
                    'data1': Iconic.colors["theme-cyan1"],
                    'data2': '#ffc107',
                    'data3': Iconic.colors["theme-purple2"],
                    'data4': Iconic.colors["theme-cyan2"],
                },
                names: {
                    // name of each serie
                    'data1': 'Đúng hạn',
                    'data2': 'Hoàn thành muộn',
                    'data3': 'Quá hạn',
                    'data4': 'Đang làm',
                }
            },
            axis: {
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
        });
    });
});