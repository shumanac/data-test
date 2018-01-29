// IndexModel.js

define(["jquery", "backbone"],

    function($, Backbone) {
        var models = {};
        // Creates a new Backbone Model class object
        var HomeModel = Backbone.Model.extend({

            url: 'http://localhost:1337/api/getData',

            initialize: function () {
                this.bind("reset", function (model, options) {
                    console.log("Inside event");
                    console.log(model);
                    
                });


            },

            // Default values for all of the Model attributes
            defaults: {

            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the Model class
        //return HomeModel;

        var homeModel = new HomeModel();
			
        homeModel.fetch({
            success: function(response,xhr) {
                 console.log("Inside success");
                 console.log(response);
            },
            error: function (errorResponse) {
                   console.log(errorResponse)
            }
        });
       // console.log(homeModel);



 models.HomeModel = Backbone.Collection.extend({
    model: models.homeModel
  });

    }

    

);
