export class Table { static create(headers, rows) { const table = document.createElement('table');
 Object.assign(table.style, {
  width: '100%',
     borderCollapse: 'collapse',
     }); 
     const thead = document.createElement('thead'); 
     const tr = document.createElement('tr');
      headers.forEach(header => {
       const th = document.createElement('th');
       th.innerHTML = header; 
       Object.assign(th.style, 
           { 
           border: '1px solid #ddd',
            padding: '8px', 
           backgroundColor: '#f4f4f4', 
           textAlign: 'left', 
           });
            tr.appendChild(th);
             }); 
             thead.appendChild(tr); table.appendChild(thead); 
    const tbody = document.createElement('tbody');
              
       rows.forEach(rowData => { 
           const row = document.createElement('tr');
     rowData.forEach(cellData => { 
    const td = document.createElement('td');
 td.innerHTML = cellData; Object.assign(td.style, { 
     border: '1px solid #ddd', 
     padding: '8px', 
     }); 
     row.appendChild(td);
      }); 
      tbody.appendChild(row); 
      }); 
      table.appendChild(tbody); 
      return table; 
      } 
      }