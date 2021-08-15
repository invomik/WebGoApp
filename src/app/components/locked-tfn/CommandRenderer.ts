export class CommandRenderer {

  eGui: any;
  eButton: any;
  eventListener: any;

  // gets called once before the renderer is used

  init(params: any) {
    // create the cell
    console.log(params);
    this.eGui = document.createElement('div');
    this.eGui.className += ' ag-column-flex-right'
    //(HTMLDivElement)this.eGui.
    this.eGui.innerHTML = `
          <div class="ag-col-btn-icon">
              <button class="btn-edit">
                  <i class="material-icons">edit</i>
              </button>
          </div>
`;

    // привязка событий кнопок
    this.eButton = this.eGui.querySelector('.btn-edit');
    this.eventListener = (event: any) => params.column.colDef.commandListener("edit");
    this.eButton.addEventListener('click', this.eventListener);

  }

  getGui() {
    return this.eGui;
  }

  // gets called whenever the cell refreshes
  refresh(params: any) {
    // set value into cell again
    // this.cellValue = this.getValueToDisplay(params);
    // this.eValue.innerHTML = this.cellValue;

    // return true to tell the grid we refreshed successfully
    return true;
  }

  // gets called when the cell is removed from the grid
  destroy() {
    // do cleanup, remove event listener from button
    if (this.eButton) {
      // check that the button element exists as destroy() can be called before getGui()
      this.eButton.removeEventListener('click', this.eventListener);
    }
  }

  getValueToDisplay(params: any) {
    return ""
  }
  }
