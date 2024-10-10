export class FancyNav{
         static create(items){
            const nav = document.createElement("div");
            Object.assign(nav.style,{
                backgroundColor:"#fff",
                border:"1px solid #ddd",
                borderRadius:"8px",
                boxShadow:"0 2px 5px rgba(0, 0, 0, 0.27)",
                display: "flex",
           gap:"10%",
           alignItems:"center",
                padding:"16px",
                width:"min(80%)",
                position:"fixed",
                left:"6%",
                top:"30px",
                overflowX:"scroll",
                
              
            });
          for(var i = 0; i < items.length; i++){
              var item =document.createElement("label");
              var img = document.createElement("img");
              var txt = document.createTextNode(items[i].title);
              if(!items[i].title){
                Object.assign(img.style,{
                width:"50px",
                height:"50px",
                objectFit:"cover",
                borderRadius: "100px",
            })
  
              }else{
                item.append(txt);  
                
                Object.assign(img.style,{
                width:"30px",
                height:"30px",
                objectFit:"cover",
                borderRadius: "100px",
            })
         
                
           var go = items[i].go;
           item.onclick=()=>{
         alert(i)
               window.location.href=go;
           }
          
              }
              img.src=items[i].icon;
             
             item.append(img);
            nav.append(item);
            Object.assign(item.style,{
                display: "flex",
                flexDirection:"column-reverse",
                alignItems:"center",
                width:"min(50%)",
                justifyContent:"center",
                
            });
           
         
           
  }
            
            return nav;
         }
     }
