export class CardCarousel { 
static create(cards) { 
const container = document.createElement('div');
 Object.assign(container.style, { 
    display: 'flex',
     overflowX: 'auto',
     }); 
     cards.forEach(card => {
 const cardElement = document.createElement('div');
 Object.assign(cardElement.style,
     {
      flex: '0 0 300px', 
     marginRight: '10px', 
     
     }); 
     cardElement.appendChild(card);
      container.appendChild(cardElement); 
      });
 return container; 
}
 }