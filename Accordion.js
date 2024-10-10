// Accordion.js 
export class Accordion { 
static create(items) {
 const container = document.createElement('div');
 items.forEach(item => {
  const button = document.createElement('button'); button.innerHTML = item.title; 
 Object.assign(button.style, { 
     width: '100%', 
     padding: '10px',
      textAlign: 'left',
      backgroundColor: '#007BFF',
      color: '#fff', 
     border: 'none', 
     outline: 'none', 
     cursor: 'pointer', 
     transition: '0.4s', }
     ); 
     const content = document.createElement('div');
      content.innerHTML = item.content;
       Object.assign(content.style, { 
          maxHeight: '0',
           overflow: 'hidden',
           transition: 'max-height 0.4s ease', 
          backgroundColor: '#f9f9f9', padding: '0 15px', 
          }); 
          button.onclick = () => { 
          content.style.maxHeight = content.style.maxHeight ? '' : `${content.scrollHeight}px`; 
content.style.maxHeight = content.style.maxHeight ? '' : `${content.scrollHeight}px`; 
          
          
          }; 
          container.appendChild(button); container.appendChild(content); }); 
          return container; } }