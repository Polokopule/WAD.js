export class Button {
 static create(text, onClick)
 { const button = document.createElement('button');
  button.innerHTML = text;
   Object.assign(button.style, { 
      backgroundColor: '#007BFF', 
      color: '#fff', 
      padding: '10px 20px',
       border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer',
       }); 
       button.onmouseover = () => button.style.backgroundColor = '#0056b3';
        button.onmouseout = () => button.style.backgroundColor = '#007BFF';
  button.onclick = onClick; return button;
   } 
   }
