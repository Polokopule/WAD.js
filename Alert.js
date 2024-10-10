export class Alert { 
static create(message, type = 'info')
 { 
 const alert = document.createElement('div'); 
 Object.assign(alert.style, { padding: '15px', 
     backgroundColor: type === 'error' ? '#f44336' : type === 'success' ? '#4CAF50' : '#2196F3', 
     color: 'white',
      marginBottom: '15px', 
     position: 'relative', 
     }); 
     alert.innerHTML = message; 
     const closeBtn = document.createElement('span');
      closeBtn.innerHTML = '&times;'; 
      Object.assign(closeBtn.style, { position: 'absolute', 
          top: '5px',
           right: '10px',
           cursor: 'pointer', 
          }); 
          closeBtn.onclick = () => alert.remove(); alert.appendChild(closeBtn);
           return alert; } }