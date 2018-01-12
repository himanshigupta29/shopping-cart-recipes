import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[app-dropdown]'
})
export class DropdownDirective implements OnInit {

  // isDropdownOpen = false;

  @HostBinding('class.open') isDropdownOpen = false;

  constructor() {}

  @HostListener('document:click', ['$event']) clickout(event) {

    if( !event.target.classList.contains('dropdown-toggle') && this.isDropdownOpen ) {
        this.isDropdownOpen = false;
    }

  }

  @HostListener('click') onDropdownClick() {

    this.isDropdownOpen = !this.isDropdownOpen;

  }

  ngOnInit() {

  }

}
