// ProgressBar.js 
export class ProgressBar { 

static create(progress) { 
const progressBar = document.createElement('div'); 
Object.assign(progressBar.style, { 
    width: '100%', 
    backgroundColor: '#f3f3f3', 
    borderRadius: '5px', 
    overflow: 'hidden', 
    }); 
    console.log(progress);
const bar = document.createElement('div'); 
Object.assign(bar.style, 
    { 
    width: `${progress}%`,
     height: '20px',
     backgroundColor: '#4CAF50',
     textAlign: 'center',
     color: '#fff', 
    }
    ); 
    bar.innerHTML = `${progress}%`;
     progressBar.prepend(bar);
      return {
      element: progressBar,
      updateProgress: (newProgress) => { 
     bar.style.width = `${newProgress}%`;
      bar.innerHTML = `${newProgress}%`; 
      } 
      }; 
      } 
      }