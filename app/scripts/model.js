"use strict";

var Data = Backbone.Model.extend({

	idAttribute: "_id"

});

var DataCollectionOne = Backbone.Collection.extend({

	model: Data,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/lukes-data1'

});

var DataCollectionTwo = Backbone.Collection.extend({

	model: Data,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/lukes-data2'

});

var DataCollectionThree = Backbone.Collection.extend({

	model: Data,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/lukes-data3'

});




