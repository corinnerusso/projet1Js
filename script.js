// open the form  while clicking the button
const buttonForForm = document.getElementById('formButton');
const form= document.getElementsByClassName('contact');
buttonForForm.addEventListener('click',() =>{
   
    form[0].style.display='flex';
})

//open a pop up window as clicking on send button

function buttonFunction() {
    alert("We received your e-mail");
}


// Photos

const photos={
    photo1 : src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/59717995_2316955425243580_8496227145859727360_n.jpg?_nc_cat=104&_nc_oc=AQnivmaGJIO_lLpbKQgahl6_ciIgva6UEnGBv8TMeaj301qRztNrMJ2ElZTYBrKN0j7PznwRCTi3ObwDfeMiWLQb&_nc_ht=scontent-cdg2-1.xx&oh=48b957773205a8e6a6a43ed6fb6e96c8&oe=5DF7DD84"
    photo2 : src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/67579103_2369416146664174_4041282617415303168_n.jpg?_nc_cat=105&_nc_oc=AQnQVvKmbLG-fm-h1sjpmHycE2RktNTwKCxcJA7SSXzS-Q2YECRh8Zio8unUUxDzhUYDw2jWknjFb3kf0wCSKg9x&_nc_ht=scontent-cdg2-1.xx&oh=d306431acc437f991c0f2f9dbbcc191d&oe=5DEFE289"
    photo3 : src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/66291465_2364002283872227_1009715827395526656_n.jpg?_nc_cat=103&_nc_oc=AQlOSr8Q_O1JN6UD7FvrZVBvJZ-uxLZFmAj_nDv9_oGUeaGd0B1uq1yfnh1AxESzOPnmrCr7kyp0ailNEMGxbI2n&_nc_ht=scontent-cdg2-1.xx&oh=12f08b7d7e816b4e27f60fc9f1346c8b&oe=5DFD2930"
    photo4 : src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/48991556_2236465429959247_4975847941743837184_n.jpg?_nc_cat=103&_nc_oc=AQl8LrU22IBaZvjgPvTcu8EXklappWDAOB_ij0ynIPuvpNxR18mgjpBlqHYKpA8T06BFpm9Ep9wAYet4epZ7TJqz&_nc_ht=scontent-cdg2-1.xx&oh=e5a52c348f0e53806cafa698f18f513f&oe=5DFA01FB"
}

for(i=0; i<photos.length; i++){
    
}