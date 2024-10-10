 export class Spinner { 
static create(size = '40px') {
 const spinner = document.createElement('div');
 Object.assign(spinner.style, {
 border: `4px solid #f3f3f3`, 
borderRadius: '50%',
 borderTop: `4px solid #3498db`, 
width: size, 
height: size, 
animation: 'spin 2s linear infinite', });
 const style = document.createElement('style');
 style.innerHTML = ` @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } `; 
 document.head.appendChild(style); return spinner; } }