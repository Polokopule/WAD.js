export class Card{
         static create(content){
            const card = document.createElement("div");
            card.innerHTML=content;
            Object.assign(card.style,{
                backgroundColor:"#fff",
                border:"1px solid #ddd",
                borderRadius:"8px",
                boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)",
                padding:"16px",
                margin:"auto 10px",
                width:"300px",
            });
            return card;
         }
     }
