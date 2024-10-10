export class Avatar {
 static create(imageUrl, initials, size = '50px') { 
const avatar = document.createElement('div');
 Object.assign(avatar.style, { 
    width: size, 
    height: size,
     borderRadius: '50%',
     overflow: 'hidden', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#ddd',
     }); 
     if (imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
       Object.assign(img.style, { width: '100%',
           height: '100%',
           objectFit: 'cover', 
          }); avatar.appendChild(img); 
          } else if (initials) {
           avatar.innerHTML = initials;
            Object.assign(avatar.style, { fontSize: '1.5rem', 
               color: '#fff',
                backgroundColor: '#007BFF',
                }); }
                 return avatar; } }