"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.isLoading = true;
    this.visibleCards = {};
    this.selectedSystems = [];
    this.spinner = document.querySelector('.loader');
    this.cardTemplate = document.querySelector('.cardTemplate');
    this.container = document.querySelector('.main');
    this.addDialog = document.querySelector('.dialog-container');
    this.setupEvents();
  }

  _createClass(App, [{
    key: "setupEvents",
    value: function setupEvents() {
      var _this = this;

      console.log("setting up events..."); // Refresh all of the status

      document.getElementById('butRefresh').addEventListener('click', function () {
        return _this.updateStatus();
      }); // Open/show the add new endpoint dialog

      document.getElementById('butAdd').addEventListener('click', function () {
        return _this.toggleAddDialog(true);
      });
      document.getElementById('butAddEndpoint').addEventListener('click', function () {
        // Add the newly endpoint
        var input = document.getElementById('endpointToAdd');
        console.log(input.textContent); // TODO init the app.selectedCities array here
        //getForecast(key, label);
        // TODO push the selected city to the array and save here

        _this.toggleAddDialog(false);
      }); // Close the add new city dialog

      document.getElementById('butAddCancel').addEventListener('click', function () {
        return _this.toggleAddDialog(false);
      });
    }
  }, {
    key: "toggleAddDialog",
    value: function toggleAddDialog(visible) {
      if (visible) {
        this.addDialog.classList.add('dialog-container--visible');
      } else {
        this.addDialog.classList.remove('dialog-container--visible');
      }
    }
  }, {
    key: "updateStatus",
    value: function updateStatus() {
      console.log("Updating endinpoints...");
    }
  }]);

  return App;
}();

var myApp = new App();
