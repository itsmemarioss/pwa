
class App{
    constructor(){
        this.isLoading = true;
        this.visibleCards= {};
        this.selectedSystems = [];
        this.spinner = document.querySelector('.loader');
        this.cardTemplate = document.querySelector('.cardTemplate');
        this.container = document.querySelector('.main');
        this.addDialog = document.querySelector('.dialog-container');

        this.setupEvents();
    }

    setupEvents(){
      console.log("setting up events...");
      // Refresh all of the status
      document.getElementById('butRefresh').addEventListener('click', () => this.updateStatus() );

      // Open/show the add new endpoint dialog
      document.getElementById('butAdd').addEventListener('click', () => this.toggleAddDialog(true) );

      document.getElementById('butAddEndpoint').addEventListener('click', () => {
          // Add the newly endpoint
          let input = document.getElementById('endpointToAdd');
          console.log(input.textContent);

          // TODO init the app.selectedCities array here
          //getForecast(key, label);
          // TODO push the selected city to the array and save here

          this.toggleAddDialog(false);
      });

      // Close the add new city dialog
      document.getElementById('butAddCancel').addEventListener('click', () => this.toggleAddDialog(false) );
    }

    toggleAddDialog(visible) {
        if (visible) {
            this.addDialog.classList.add('dialog-container--visible');
        } else {
            this.addDialog.classList.remove('dialog-container--visible');
        }
    }

    updateStatus(){
        console.log("Updating endinpoints...");
    }
}

let myApp = new App();
