// const openSignup = document.getElementById('openSignup');
// const closeSignup = document.getElementById('closeSignup');
// const signupPopup = document.getElementById('signupPopup');
// openSignup.addEventListener('click', () => {
//     signupPopup.style.display = 'block';
// });

// closeSignup.addEventListener('click', () => {
//     signupPopup.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//     if (event.target === signupPopup) {
//         signupPopup.style.display = 'none';
//     }
// });




let openSignup=   document.getElementById('openSignup')
let closeSignup=   document.getElementById('closeSignup')
 let signupPopup=   document.getElementById('signupPopup')

openSignup.addEventListener('click',()=>{
    signupPopup.style.display='block'

})

closeSignup.addEventListener('click',()=>{
    signupPopup.style.display='none'

})

