export class Sidebar { static create(items) { 
const sidebar = document.createElement('div'); 
Object.assign(sidebar.style, { 
    height: '100%', 
    width: '250px', 
    position: 'fixed',
     left: '-270px', 
    top: '0',
     backgroundColor: '#333',
     padding: '10px', 
    transition: '0.3s',
     zIndex: '1000', 
    }); 
    items.forEach(item => {
     const a = document.createElement('a'); 
    a.innerHTML = item.text; a.href = item.href; 
    Object.assign(
    a.style, {
     display: 'block',
     color: '#fff',
     padding: '10px', 
    textDecoration: 'none',
     cursor: 'pointer', 
    });
     a.onmouseover = () => a.style.color = '#ccc'; a.onmouseout = () => a.style.color = '#fff';
    sidebar.appendChild(a); 
    }); 
    const toggleButton = document.createElement('button');
     toggleButton.innerHTML = '☰'; 
     Object.assign(toggleButton.style, { position: 'absolute',
          top: '10px',
          left: '10px', 
         fontSize:"26px",
          color: '#007BFF', 
         border: 'none',
          padding: '20px',
         transition: '0.3s',
         cursor: 'pointer', 
         borderRadius:"100px",
         width:"30px",
         height:"30px",
         display:"flex",
         flexDirection:"column",
         alignItems:"center",
         justifyContent:"center"
         }); 
         toggleButton.onclick = () => { sidebar.style.left = sidebar.style.left === '0px' ? '-270px' : '0px';
         
     toggleButton.style.left = toggleButton.style.left === '280px' ? '10px' : '280px';
         
     toggleButton.innerText = toggleButton.innerText==='X' ? '☰' : 'X';
          };
         
          document.body.appendChild(toggleButton); 
         document.body.appendChild(sidebar);
          return sidebar; } }