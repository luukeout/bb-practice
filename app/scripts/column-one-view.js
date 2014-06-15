"use strict";

var ColumnView = Backbone.View.extend({

	className: 'dataView',

	template: _.template($('.data-template').text()),

	events: {
		"click .move-button" : "",
		"click .copy-button" : ""
	},

	initialize: function(){

		// $('.column-one').append(this.el);
		// this.render()

	},

	render: function(){

		var renderedTemplate = this.template(this.model.attributes)
		// here the el is getting the html of renderedTemplate added to it.
		this.$el.html(renderedTemplate)
	

	},

});