const links = document.querySelectorAll(".black-container ul li a")

// links.forEach(link => {

//     link.addEventListener('click', function() {
//         if(!link.classList.contains('clicked')) {
//             link.classList.add('clicked')
//         }
//     }
//     );
// });

links.forEach((link, index) => {
    if(localStorage.getItem('clicked-' + index))
    {
        link.classList.add('clicked')
    }

    link.addEventListener('click', () =>  {
        link.classList.add('clicked')

        localStorage.setItem('clicked-' + index, 'true')
    })
})

