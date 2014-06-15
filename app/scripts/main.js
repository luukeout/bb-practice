"use strict";

// ///// Instantiate new collections. 
// /(These are instances of the constructor "DataConstructor
	// in model.js.")
var collectionsArray = [

	new DataCollection({url: 'http://tiny-pizza-server.herokuapp.com/collections/lukes-data1'}),
	new DataCollection({url: 'http://tiny-pizza-server.herokuapp.com/collections/lukes-data2'}),
	new DataCollection({url: 'http://tiny-pizza-server.herokuapp.com/collections/lukes-data3'}),

]

// forEach through the collections, declare "newDiv" equal to an empty div.
// Add the class of 
collectionsArray.forEach(function(collection){
	var newDiv = $('<div></div>')
	// newDiv.addClass(collection.id + ' container')
	$('.column-one').append(newDiv);



})





// DataCollection.fetch().done(function(){
// 	DataCollection.each(function(data){
// 		new ColumnView({model: data});
// 	})

// });