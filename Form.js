import { Button } from './Button.js';
 export class Form {
  static create(fields,buttonText ="Submit", submitCallback) { 
 const form = document.createElement('form');
 
  Object.assign(form.style, {
  display: 'flex', 
 flexDirection: 'column',
  width: 'min(95%)',
 margin:"0",
  }); 
  fields.forEach(field => {

   const input = document.createElement(field.type === 'textarea' ? 'textarea' : 'input');
   Object.assign(input.style, { padding: '10px',
       margin: '8px 0', 
      border: '1px solid #ddd',
       borderRadius: '5px', 
      outline:"none",
      });
       input.placeholder = field.placeholder; 
       var lb = document.createTextNode(field.label);
         const label = document.createElement('b');
 
       if (field.required) input.required = true; form.appendChild(input);
      label.appendChild(lb);
      if(field.label){
      
     
         form.appendChild(label);      
      }
     
       form.appendChild(input);
       Object.assign(label.style, { 
       margin: '8px 0', 
      color: '#444',
       borderRadius: '5px', 
      outline:"none",
      fontWeight:"400",
      
      });
       
       
       
        });
           const submitButton = Button.create(buttonText, (e) => { 
     e.preventDefault(); 
     let isValid = true; 
     form.querySelectorAll('input, textarea').forEach(input => { 
         if (input.required && !input.value.trim()) { input.style.borderColor = 'red'; 
         isValid = false; 
         } else { 
         input.style.borderColor = '#ddd'; }
          });
           if (isValid && submitCallback) submitCallback(); 
          }); form.appendChild(submitButton); 
          return form; } }