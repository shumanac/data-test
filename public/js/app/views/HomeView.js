// IndexView.js

define(["jquery", "backbone", "models/HomeModel", "text!templates/Home.html"],

    function($, Backbone, Model, template, opts){

        var HomeView = Backbone.View.extend({

            initialize: function(opts) {
                this.template = opts.template;
                this.render();
                console.log("stickyView created!");
            },
        
            render: function() {
                var data = this.HomeModel;
                console.log(data);
        
                this.$el.html("Wanted to create a graph to show data that I have fetched in model. However, I need some more time to learn about how View works in Backbone.JS");
        
                return this;
            }
        
        });
        
        var HomeView = new HomeView({
            model: Model, 
            el: '.magic',
           // template: Handlebars.compile($("#sticky-template").html())
        });

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