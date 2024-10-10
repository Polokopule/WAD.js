export class Chip {
 static create(text, removable = false, onRemove) { 
const chip = document.createElement('div'); 
Object.assign(chip.style,
     { display: 'inline-flex', 
     alignItems: 'center',
      padding: '5px 10px', 
     backgroundColor: '#007BFF', 
     color: '#fff', 
     borderRadius: '20px',
      margin: '5px', 
     });
     chip.innerHTML = text; 
    if (removable) { 
    const removeButton = document.createElement('span');
     removeButton.innerHTML = '&times;';
     Object.assign(removeButton.style, { 
        marginLeft: '10px', 
        cursor: 'pointer', 
        });
         removeButton.onclick = () => { 
         chip.remove(); 
         if (onRemove) onRemove(); }; chip.appendChild(removeButton); } return chip; } }