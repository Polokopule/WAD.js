export class Tooltip {
 static create(targetElement, text) { 
const tooltip = document.createElement('span'); tooltip.innerHTML = text;
 Object.assign(tooltip.style, { 
    visibility: 'hidden', 
    backgroundColor: 'black',
     color: '#fff',
     textAlign: 'center',
     borderRadius: '6px',
     padding: '5px',
     position: 'absolute', 
    zIndex: '1',
     bottom: '125%', 
    left: '50%',
     marginLeft: '-60px',
     width: '120px', 
    opacity: '0',
     transition: 'opacity 0.3s',
     }); 
     targetElement.style.position = 'relative';
      targetElement.appendChild(tooltip);
       targetElement.onmouseover = () => { 
       tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1'; };
         targetElement.onmouseout = () => {
          tooltip.style.visibility = 'hidden';
           tooltip.style.opacity = '0'; 
          }; return targetElement; } }