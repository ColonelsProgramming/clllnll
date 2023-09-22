

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('show', entry.isIntersecting)
    },{
        threshold: 1
    });
        
     });


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(hidden => {
    observer.observe(hidden)
})

var h = window.innerWidth