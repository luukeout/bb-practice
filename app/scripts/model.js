"use strict";

// //////// Model Constructor.
var Data = Backbone.Model.extend({

// /// Gives each new model _id idAttribute. 
	idAttribute: "_id",

///// Each new model will come in a string as a url property by default.  
	defaults: {
		
		url: ""
	}
});

// //////// Collection Constructor.
var DataCollection = Backbone.Collection.extend({

	model: Data,

// ///"this.url" is a property of this DataCollection constructor when it
// ///gets instantiated in main.js.
// ///Here I'm setting it's value equal to the property value "url" of 
// ///my instance of DataCollection in main.js. 
	initialize: function(collectionProperty){
		this.url = collectionProperty.url;

// ///"this.id" is equal to the _.uniqueId method which
// ///has 'collection-' passed in as an argument. 
		this.id = _.uniqueId('collection-');

 // ///".on" is a callback event in backbone. It takes two 
 // ///parameters: a string and a function. In this function we're 
 // ///creating a new instance of the ColumnView constructor and giving
 // ///it the properties: model, and container. These have the values of
 // ///data and $('.' + this.id).
		this.on('add', function(data){
			new ColumnView({ 
				model: data,
				container: $('.' + this.id)
			});
		})
	}
});







