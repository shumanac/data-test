// IndexModel.js

define(["jquery", "backbone", "text!templates/Home.html"],

  function($, Backbone) {
     

        // Creates a new Backbone Model class object
        var HomeModel = Backbone.Model.extend({
           
            url: 'http://localhost:1337/api/getData',
        
       
            initialize: function () {
             


            },

            // Default values for all of the Model attributes
            defaults: {

            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });


        var HomeModel = new HomeModel();
			var params;
        HomeModel.fetch({
            success: function(response,xhr) {
                 //console.log("Inside success");
                 var params = JSON.stringify(response);
               //  var data2 = response.toJSON();
               console.log (params);
               return params;
             
            },
            error: function (errorResponse) {
                   console.log(errorResponse)
            }
        });
     return HomeModel;
    




 

//   var collection = new Backbone.Collection([
//             HomeModel
//   ]);
  
//   alert(collection);


    }

    

);
