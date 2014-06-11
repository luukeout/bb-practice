"use strict";

var newData = new DataCollectionOne();


newData.fetch().done(function(){
	newData.each(function(data){
		new ColumnOneView({model: data});
	})

});