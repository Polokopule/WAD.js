export class Breadcrumb { 
static create(items) {
 const container = document.createElement('nav');
 const list = document.createElement('ol'); 
Object.assign(list.style, { 
    display: 'flex', 
    listStyle: 'none',
     padding: '0',
     });
      items.forEach((item, index) => { 
          const listItem = document.createElement('li');
           Object.assign(listItem.style, {
           marginRight: '10px', 
          }); 
          if (index < items.length - 1) { 
          listItem.innerHTML = `<a href="${item.href}" style="text-decoration:none;color:#007BFF;">${item.text}</a> / `;
           } else { 
           listItem.innerHTML = item.text; 
           } 
           list.appendChild(listItem);
            });
             container.appendChild(list);
              return container;
              }
              }