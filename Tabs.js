export class Tabs { 
static create(tabs) {
 const container = document.createElement('div'); 
const tabList = document.createElement('div');
 Object.assign(tabList.style, { 
    display: 'flex', 
    cursor: 'pointer',
     }); 
     const contentContainer = document.createElement('div');
      tabs.forEach((tab, index) => { 
          const tabButton = document.createElement('button'); 
          tabButton.innerHTML = tab.title;
           Object.assign(tabButton.style, {
           padding: '10px', 
          backgroundColor: index=== 0 ? '#007BFF' : '#ddd',
           color: index === 0 ? '#fff' : '#333',
           border: 'none', 
          outline: 'none', 
          cursor: 'pointer',
           flex: 1, });
           tabButton.onclick = () => {
            Array.from(tabList.children).forEach((btn, btnIndex) => {
            btn.style.backgroundColor = btnIndex === index ? '#007BFF' : '#ddd';
             btn.style.color = btnIndex === index ? '#fff' : '#333'; 
            }); 
                 contentContainer.innerHTML= tab.content;   
            if(tab.content == "[object HTMLFormElement]" || tab.content == "[object HTMLDivElement]"){
                        contentContainer.innerHTML="";
                        contentContainer.append(tab.content);
                    }else if(tab.content == 0){
                        contentContainer.innerHTML+= tab.content;  
                    }
              
           };
            tabList.appendChild(tabButton);
             }); 
                    contentContainer.innerHTML+= tabs[0].content; 
                    if(tabs[0].content == "[object HTMLFormElement]" || tabs[0].content == "[object HTMLDivElement]"){
                        contentContainer.innerHTML="";
                        contentContainer.append(tabs[0].content);
                    }else if(tabs[0].content == 0){
                        contentContainer.innerHTML+= tabs[0].content;  
                    }
              
              container.appendChild(tabList);
              
               container.appendChild(contentContainer); 
               return container; 
               } }