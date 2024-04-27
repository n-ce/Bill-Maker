import './style.css';


const tbody = <HTMLTableSectionElement>document.querySelector('tbody');
const tfoot = <HTMLTableSectionElement>document.querySelector('tfoot');
const [noOfItems, sumTotal] = (<HTMLTableRowElement>tfoot.firstElementChild).children;


function insertRow(d1: string, d2: string) {
  const tr = document.createElement('tr');

  const td1 = document.createElement('td');
  const input1 = document.createElement('input');

  const td2 = document.createElement('td');
  const input2 = document.createElement('input');

  input1.placeholder = 'Enter Item Name';
  input1.value = d1;
  input1.addEventListener('keydown', e => {
    if (!input1.value && tbody.childElementCount > 1 && e.key === 'Backspace') {
      input1.blur();
      tr.remove();
    }
    noOfItems.textContent = tbody.childElementCount.toString();
  });
  td1.appendChild(input1);

  input2.placeholder = 'Enter Item Price';
  input2.value = d2;
  input2.type = 'number';
  input2.addEventListener('keyup', e => {
    if (!input2.value && e.key === 'Backspace') {
      input2.blur();
      input1.focus();
    }


    if (input1.value && e.key === 'Enter') {
      input2.blur();
      insertRow('', '');
    }

    let sum = 0;

    tbody.querySelectorAll('td:last-child input').forEach(n => {
      sum += parseInt((n as HTMLInputElement).value) || 0;
    });

    sumTotal.textContent = String(sum);

  });
  td2.appendChild(input2);


  tr.append(td1, td2);

  tbody.appendChild(tr);
  input1.focus();
}


insertRow('', '');
