export class Toast { 
static create(message, duration = 3000) {
 const toast = document.createElement('div');
 Object.assign(toast.style, { 
    position: 'fixed',
     bottom: '20px',
     right: '20px',
     backgroundColor: '#333',
     color: '#fff', 
    padding: '10px 20px', 
    borderRadius: '5px', 
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)', 
    zIndex: '1000',
     opacity: '0', 
    transition: 'opacity 0.5s ease',
     }); 
        document.body.appendChild(toast); 
 
     toast.innerText = message; 
      setTimeout(() => (toast.style.opacity = '1'), 100); 
     setTimeout(() => { toast.style.opacity = '0'; 
         setTimeout(() => document.body.removeChild(toast), 500); }, duration); } }