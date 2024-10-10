export class Stepper {
 static create(steps, activeStep = 0) {
 const container = document.createElement('div');
 Object.assign(container.style, { 
    display: 'flex',
     justifyContent: 'space-between',
     }); 
     steps.forEach((step, index) => {
     
      const stepElement = document.createElement('div');
      Object.assign(stepElement.style, {
      padding: '10px', 
     backgroundColor: index <= activeStep ? '#007BFF' : '#ddd',
      color: index <= activeStep ? '#fff' : '#333', 
     borderRadius: '5px', 
     flex: '1', 
     textAlign: 'center',
      margin: '0 5px',
      });
       stepElement.innerHTML = steps[index].step+"["+index+"]";
        container.appendChild(stepElement);
         });
          return container; 
         }
          }