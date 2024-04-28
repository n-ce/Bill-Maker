
const header = document.querySelector('header') as HTMLDivElement;

header.addEventListener('click', (e: Event) => {
  const button = e.target as HTMLButtonElement;
  const increase = button.matches('button:first-child');
  const decrease = button.matches('button:last-child');

  let val = parseFloat(getComputedStyle(document.body).getPropertyValue('--fontSize'));

  if (!increase && !decrease) return;

  val += (increase ? 0.5 : -0.5);

  const reducer = document.querySelector('button:last-child') as HTMLButtonElement;

  if (val === 0.5)
    reducer.disabled = !reducer.disabled;
  else if (increase && val === 1)
    reducer.disabled = false;

  document.body.style.setProperty('--fontSize', `${val}rem`);
});
