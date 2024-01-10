/* в этот файл добавляет скрипты*/
document.querySelector('.main-header__menu-toggle').addEventListener('click', ()=> {
  document.querySelector('.main-header__menu').classList.toggle('main-header__menu--closed');
  document.querySelector('.main-header__menu-toggle').classList.toggle('main-header__menu-toggle--closed');
});
