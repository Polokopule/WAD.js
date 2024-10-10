export class Navbar { static create(links)
 { const nav = document.createElement('nav');
  Object.assign(nav.style, { 
     backgroundColor: '#333', 
     display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
     borderRadius:"10px"
      });
       links.forEach(link => { const a = document.createElement('a');
            a.innerHTML = link.text; a.href = link.href;
             Object.assign(a.style, {
             color: '#fff',
             textDecoration: 'none', 
            padding: '10px',
             cursor: 'pointer', 
            });
             a.onmouseover = () => a.style.color = '#ccc';
             a.onmouseout = () => a.style.color = '#fff';
              nav.appendChild(a); 
              }); 
              return nav; } }