cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "nl.x-services.plugins.videocaptureplus.VideoCapturePlus",
      "file": "plugins/nl.x-services.plugins.videocaptureplus/www/VideoCapturePlus.js",
      "pluginId": "nl.x-services.plugins.videocaptureplus",
      "clobbers": [
        "window.plugins.videocaptureplus"
      ]
    },
    {
      "id": "cordova.plugin.zoom.Zoom",
      "file": "plugins/cordova.plugin.zoom/www/Zoom.js",
      "pluginId": "cordova.plugin.zoom",
      "clobbers": [
        "cordova.plugins.Zoom"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-compat": "1.2.0",
    "nl.x-services.plugins.videocaptureplus": "1.0.0",
    "cordova.plugin.zoom": "4.6.21666.0603"
  };
});