var Backbone = require('backbone');
var _ = require('underscore');

var siteUrl = '/v0/site';

var SiteModel = Backbone.Model.extend({
  defaults: {
    'builds': [],
    'users': [],
    'repository': 'Repo goes here',
    'engine': 'jekyll',
    'branch': 'master'
  },
  urlRoot: siteUrl
});

var SiteCollection = Backbone.Collection.extend({
  model: SiteModel,
  url: siteUrl,

  initialize: function() {
    var collection = this;
    collection.fetch({ data: $.param({ limit: 50 }) });
  }
});

module.exports.model = SiteModel;
module.exports.collection = SiteCollection;
