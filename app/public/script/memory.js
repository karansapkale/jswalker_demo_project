function memory(){

  this.rss_arr=[];
  this.heap_total_arr=[];
  this.heap_used_arr=[];

}var memory_obj = new memory();

$(document).ready(function(){


	 $('#container').highcharts({
        chart: {
            type: 'column',
            zoomType: 'x'
        },
        title: {
            text: 'Memory usage last 1000 hit'
        },
        // legend: {
        //     layout: 'vertical',
        //     align: 'left',
        //     verticalAlign: 'top',
        //     x: 150,
        //     y: 100,
        //     floating: true,
        //     borderWidth: 1,
        //     backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        // },
        xAxis: {
      
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Memory in MB'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' MB'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'RSS',
            data: memory_obj.rss_arr
        }, {
            name: 'HEAP-TOTAL',
            data: memory_obj.heap_total_arr
        },{
          name: 'HEAP-USED',
            data: memory_obj.heap_used_arr
        }]
    });

	  // $('#container').highcharts({
   //      chart: {
   //          type: 'area'
   //      },
   //      title: {
   //          text: 'Historic and Estimated Worldwide Population Growth by Region'
   //      },
   //      subtitle: {
   //          text: 'Source: Wikipedia.org'
   //      },
   //      xAxis: {
   //          categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
   //          tickmarkPlacement: 'on',
   //          title: {
   //              enabled: false
   //          }
   //      },
   //      yAxis: {
   //          title: {
   //              text: 'Billions'
   //          },
   //          labels: {
   //              formatter: function () {
   //                  return this.value / 1000;
   //              }
   //          }
   //      },
   //      tooltip: {
   //          shared: true,
   //          valueSuffix: ' millions'
   //      },
   //      plotOptions: {
   //          area: {
   //              stacking: 'normal',
   //              lineColor: '#666666',
   //              lineWidth: 1,
   //              marker: {
   //                  lineWidth: 1,
   //                  lineColor: '#666666'
   //              }
   //          }
   //      },
   //      series: [ {
   //          name: 'America',
   //          data: [18, 31, 54, 156, 339, 818, 1201,1,2,5,6,9,9,9,89,98,98,98,98,98,9,565,65,65,65,65,656,56,56,5,656,56,56]
   //      }, {
   //          name: 'Oceania',
   //          data: [2, 2, 2, 6, 13, 30, 46,89,89,898,98,9,689,9,59,89,99,89,89,88,95,8,956,59,8,99,89,8,65]
   //      }]
   //  });

});
