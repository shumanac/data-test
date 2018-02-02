// IndexView.js

define(["jquery", "backbone", "models/HomeModel", "text!templates/Home.html"],

    function($, Backbone, Model, template, opts){
       var DataCollection = Backbone.Collection.extend({
           Model
       });


        var HomeView = Backbone.View.extend({
            el: '#container',
                initialize: function(opts) {
                    this.data = opts.data;
                    console.log(this.data);
                },
                render: function () {
                    this.$el.highcharts({
                        title: {
                            text: 'Volume vs Latency',
                            x: -20
                        }
                    })
                }
            
            });
            
            var items = new DataCollection([{Model}]);
        
            var view = new HomeView({ data: items });
        
            view.render();
        //     var HomeView = new HomeView({
        //         model: Model, 
        //         el: '.magic',
              
        //        // template: Handlebars.compile($("#sticky-template").html())
        //     });
        
        //  return HomeView;

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