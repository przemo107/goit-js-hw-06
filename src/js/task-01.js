const itemE1 = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemE1.length}`);

for (const element of itemE1) {
  console.log(`Category: ${element.children[0].innerText}`);

  console.log(`Elements: ${element.children[1].children.length}`);
}
