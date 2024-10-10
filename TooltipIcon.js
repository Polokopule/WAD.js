export class TooltipIcon {
 static create(iconText, tooltipText) {
 const container = document.createElement('div');
 container.style.position = 'relative';
 const icon = document.createElement('span');
 icon.innerHTML = iconText; 
 Object.assign(icon.style, {
  display: 'inline-block', 
 padding: '10px',
  backgroundColor: '#007BFF',
  color: '#fff', 
 borderRadius: '50%', 
 cursor: 'pointer', 
 }); 
 const tooltip = document.createElement('div'); tooltip.innerHTML = tooltipText; 
 Object.assign(tooltip.style, { 
     position: 'absolute',
      top: '-40px', 
     left: '50%', 
     transform: 'translateX(-50%)',
      padding: '5px 10px',
      backgroundColor: '#333', 
     color: '#fff', 
     borderRadius: '3px',
      visibility: 'hidden',
      opacity: '0',
      transition: 'opacity 0.3s ease',
      }); 
      icon.onmouseenter = () => { tooltip.style.visibility = 'visible';
       tooltip.style.opacity = '1'; 
       }; icon.onmouseleave = () => { 
       tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0'; }; container.appendChild(icon); container.appendChild(tooltip); return container; } }