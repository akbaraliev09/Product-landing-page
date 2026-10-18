// Тема: светлая / тёмная
const root = document.documentElement;
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
document.getElementById('theme').addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
});
// Мобильное меню
document.getElementById('burger').addEventListener('click', () => document.getElementById('nav').classList.toggle('open'));
// Точки слайдера блога
const dots = [...document.querySelectorAll('#dots i')];
const cards = [...document.querySelectorAll('#cards .card')];
dots.forEach((d, i) => d.addEventListener('click', () => {
  dots.forEach(x => x.classList.remove('on')); d.classList.add('on');
  cards[i].scrollIntoView({behavior: 'smooth', block: 'nearest'});
}));
