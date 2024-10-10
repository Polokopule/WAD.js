export class Dropdown { 
static create(options, onSelect) {
 const select = document.createElement('select');
 Object.assign(select.style, { 
    padding: '10px', 
    margin: '8px 0',
     border: '1px solid #ddd',
     borderRadius: '5px',
     backgroundColor: '#fff',
     cursor: 'pointer', 
    }); 
    options.forEach(text => { 
        const option = document.createElement('option'); option.value = text;
         option.innerHTML = text; select.appendChild(option); 
         });
         
          select.onchange = () => { 
          const selectedValue = select.value; 
          if (onSelect) onSelect(selectedValue); 
          };
           return select; 
          } }