'use strict';

var app = app || {};

(module => {

  const errorView = {};

  errorView.initErrorView = function(err) {

    $('.page').hide();
    
    $('.error-view').show();
    
    $('#error-message').empty();
    
    let template = Handlebars.compile($('#error-template').text());
    
    $('#error-message').append(template(err));
  };

  module.errorView = errorView;

})(app)