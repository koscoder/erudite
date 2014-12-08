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
    //this._initDropdowns();
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
    $('select.ui.dropdown').dropdown();
  },
  _initRegions: function () {
console.log('regions');
                var map;
                var selectedRegions;
                AmCharts.ready(function() {
                    map = new AmCharts.AmMap();
                    map.pathToImages = "http://www.amcharts.com/lib/3/images/";
                    map.panEventsEnabled = true;
                    map.backgroundColor = "#666666";
                    map.backgroundAlpha = 1;

                    map.zoomControl.panControlEnabled = true;
                    map.zoomControl.zoomControlEnabled = true;

                    var dataProvider = {
                    map: "worldLow",
                        getAreasFromMap: true
                    };

                    map.dataProvider = dataProvider;

                    map.areasSettings = {
                        autoZoom: false,
                        color: "#CDCDCD",
                        colorSolid: "#5EB7DE",
                        selectedColor: "#5EB7DE",
                        outlineColor: "#666666",
                        rollOverColor: "#88CAE7",
                        rollOverOutlineColor: "#FFFFFF",
                        selectable: true
                    };

                    map.addListener('clickMapObject', function (event) {
                        // deselect the area by assigning all of the dataProvider as selected object
                        map.selectedObject = map.dataProvider;

                        // toggle showAsSelected
                        event.mapObject.showAsSelected = !event.mapObject.showAsSelected;

                        // bring it to an appropriate color
                        map.returnInitialColor(event.mapObject);

                        // let's build a list of currently selected states
                        var states = [];
                        for (var i in map.dataProvider.areas) {
                            var area = map.dataProvider.areas[i];
                            if (area.showAsSelected) {
                                states.push(area.title);
                            }
                        }
                        console.log(states);
                    });
                    

                    map.write($('div.worldmap'));
                    
                    for (var i in map.dataProvider.areas) {
                        var area = map.dataProvider.areas[i];
                        
                        if (area.title == 'United States') {
                            map.dataProvider.areas[i].showAsSelected = true;
                            map.returnInitialColor(map.dataProvider.areas[i]);
                            console.log(area.title);
                        }
                    }
                });

  }
});

module.exports = Create;
