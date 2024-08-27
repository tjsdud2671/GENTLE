const modal = document.querySelector('.modal');
const modalMenuBar = document.querySelector('.modal-menu-bar');
const btnOpenModal = document.querySelector('.btn-open-modal');
const btnOpenModalMenuBar = document.querySelector('.btn-open-modal-menu-bar');
const btnOpenModalTab = document.querySelector('.btn-open-modal-tab');
const btnCloseModal = document.querySelector('.btn-close-modal');
const btnCloseModalMenuBar = document.querySelector(
  '.btn-close-modal-menu-bar'
);
const btnCloseModalTab = document.querySelector('.btn-close-modal-tab');

btnOpenModal.addEventListener('click', () => {
  modal.style.display = 'flex';

  btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
btnOpenModalMenuBar.addEventListener('click', () => {
  modalMenuBar.style.display = 'flex';

  btnCloseModalMenuBar.addEventListener('click', () => {
    modalMenuBar.style.display = 'none';
  });
});
btnOpenModalTab.addEventListener('click', () => {
  modal.style.display = 'flex';

  btnCloseModalTab.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
