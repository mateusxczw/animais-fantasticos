import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuBtn, menuList, events) {
    this.menuButton = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    this.events =
      events === undefined
        ? (this.events = ['touchstart', 'click'])
        : (this.events = events);

    this.activeClass = 'active';

    this.openMenu = this.openMenu.bind(this);
    // this.init();
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu),
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
