const items = document.querySelectorAll('.item');
let selected = document.getElementById('item1');


window.addEventListener('DOMContentLoaded', () => {
  items.forEach(item => {
    item.addEventListener('click', (event) => {
      selected.classList.remove('selected');
      selected = event.currentTarget;
      selected.classList.add('selected');
    })
  });
});