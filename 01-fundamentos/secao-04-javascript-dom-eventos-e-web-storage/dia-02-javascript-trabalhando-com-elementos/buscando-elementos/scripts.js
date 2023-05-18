const whereAreYou = document.getElementById('where-are-you');
const wAYParent = whereAreYou.parentElement;
wAYParent.style.color = 'red';

const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'First child of child';

const firstChild = wAYParent.firstElementChild;

const firstChild2 = whereAreYou.previousElementSibling;

const textAttention = whereAreYou.nextSibling;

const thirdChild = whereAreYou.nextElementSibling;

const thirdChild2 = wAYParent.lastElementChild.previousElementSibling;