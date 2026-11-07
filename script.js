const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

// عنوان‌ها و توضیحات نمونه‌اند؛ اطلاعات واقعی کتاب‌ها را اینجا جایگزین کنید.
const books = [
  { title: 'نام کتاب اول', description: 'خلاصه کامل‌تر کتاب اول را اینجا بنویسید. درباره موضوع، مخاطب و ویژگی خاص این اثر توضیح دهید.' },
  { title: 'نام کتاب دوم', description: 'خلاصه کامل‌تر کتاب دوم را اینجا بنویسید. چند جمله جذاب به خواننده کمک می‌کند با فضای کتاب آشنا شود.' },
  { title: 'نام کتاب سوم', description: 'خلاصه کامل‌تر کتاب سوم را اینجا بنویسید و مهم‌ترین موضوع یا پیام آن را معرفی کنید.' }
];
const dialog = document.getElementById('bookDialog');
document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const book = books[Number(button.dataset.book)];
    document.getElementById('dialogTitle').textContent = book.title;
    document.getElementById('dialogText').textContent = book.description;
    dialog.showModal();
  });
});
document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
