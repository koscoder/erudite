var React = require('react');
var page = require('page');
var $ = require('jQuery');
var Storage = require('storage');
var template = require('./create.view.jsx');

var Create = React.createClass({
  getInitialState: function () {
    var self = this;
    Storage.on('load:game-config', function (data) {
      self.setState(data);
    });
    return {
      topics: [],
      gameTypes: []
    }
  },
  render: template,
  handleCreate: function () {
    page('/game');
  },
  componentDidMount: function () {
    this._initCheckboxes();
    this._initDropdowns();
    this._initRegions();
  },
  componentDidUpdate: function () {
    this._initCheckboxes();
    this._initDropdowns();
    this._initRegions();
  },
  _initCheckboxes: function () {
    var topics = this.refs.topics.getDOMNode();
    $('.checkbox', topics).checkbox();
  },
  _initDropdowns: function () {
    var mainInfo = this.refs.mainInfo.getDOMNode();
    $('.dropdown', mainInfo).dropdown();
  },
  _initRegions: function () {
    var regions = this.refs.regions.getDOMNode();
    var script = document.createElement('script');

    script.onload = function () {
      script.remove();

      var drawRegionsMap = function () {
        var data = google.visualization.arrayToDataTable([
            ['Country', 'Clickable'],
            ['Germany', 1],
            ['United States', 1],
            ['Brazil', 1],
            ['Canada', 1],
            ['France', 1],
            ['RU', 1]
        ]);

        var options = {};
        var chart = new google.visualization.GeoChart(regions);
        chart.draw(data, options);
      };

      // TODO: google.load removes document.body element/.
      return;
      google.load('visualization', '1', {packages: ['geochart']});
      google.setOnLoadCallback(drawRegionsMap);
    };

    script.src = "https://www.google.com/jsapi";
    document.body.appendChild(script);
  }
});

module.exports = Create;
