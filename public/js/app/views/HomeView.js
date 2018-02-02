// IndexView.js
require.config({
    paths: {
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min'
     }
});
require.config({
    paths: {
      require: "libs/require",
      jquery: "libs/jquery",
      highcharts: "libs/highcharts"
    },
    shim: {
      highcharts: {
        exports: "Highcharts",
        deps: ["jquery"]
      }
    } // end Shim Configuration
  });

define(["jquery", "backbone", "models/HomeModel", "text!templates/Home.html"],

    function($, Backbone, Model, template, opts){
  
        var DataCollection = Backbone.Collection.extend({
             Model
        });

        var HomeView = Backbone.View.extend({
            el: '#container',
                initialize: function(opts) {
                    this.data = opts.data;
                },
               render: function () {
            this.$el.highcharts({
                title: {
                    text: 'Monthly Average Temperature',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Source: WorldClimate.com',
                    x: -20
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: this.data.toJSON()
            });
        }
            
            });

   
            var items = new DataCollection({
                Model

            })
            var HomeView = new HomeView({data: items
              
               // template: Handlebars.compile($("#sticky-template").html())
            });
        
            HomeView.render();
            return window.Highcharts;

        // var HomeView = Backbone.View.extend({

        //     // The DOM Element associated with this view
        //     el: ".magic",

        //     // View constructor
        //     initialize: function() {

        //         // Calls the view's render method
        //         this.render();

        //     },

        //     // View Event Handlers
        //     events: {

        //     },

        //     // Renders the view's template to the UI
        //     render: function() {
        //         var data = this.HomeModel;
        //         this.$el.html(data);

        //         // Setting the view's template property using the Underscore template method
        //         // this.template = _.template(template, {});

        //         // // Dynamically updates the UI with the view's template
        //         // this.$el.html(this.template);

        //         // // Maintains chainability
        //         // return this;

        //     }

        // });

        // // Returns the View class
        // return HomeView;





    }

);