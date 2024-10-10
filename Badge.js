export class Badge {
 static create(text, type = 'primary') {
 const badge = document.createElement('span');
 badge.innerHTML = text; 
 Object.assign(badge.style, {
  padding: '5px 10px',
  backgroundColor: type === 'primary' ? '#007BFF' : '#28a745', 
 color: '#fff', 
 borderRadius: '12px', 
 fontSize: '12px', 
 }); 
 return badge; } }