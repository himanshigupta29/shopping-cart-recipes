import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {

  @Output() NavigationChanged = new EventEmitter<string>();

  navigateTo(clickedItem : string) {

    this.NavigationChanged.emit(clickedItem);

  }
}
