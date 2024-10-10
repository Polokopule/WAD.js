export class Modal { 
static create(content) { 
const modal = document.createElement('div');
 Object.assign(modal.style, { display: 'flex',
     position: 'fixed',
     top: '0', 
    left: '0', 
    width: '100%', 
    height: '100%',
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
     justifyContent: 'center',
     alignItems: 'center',
     zIndex: '9999',
    transition:"0.5s"
     }); 
     const modalContent = document.createElement('div');
      modalContent.innerHTML = content; 
      Object.assign(modalContent.style, { backgroundColor: '#fff',
           padding: '20px',
           borderRadius: '10px',
           textAlign: 'center', 
          position: 'relative',
           width: '400px', 
          });
    const closeButton = document.createElement('span');
           closeButton.innerHTML = '&times;'; 
           Object.assign(closeButton.style, { fontSize: '24px',
                position: 'absolute',
                top: '10px',
                right: '10px', 
               cursor: 'pointer',
               
                });
                
                 closeButton.onclick = () => modal.remove(); 
                 modalContent.appendChild(closeButton); modal.appendChild(modalContent);
                  modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
                   document.body.appendChild(modal); } }