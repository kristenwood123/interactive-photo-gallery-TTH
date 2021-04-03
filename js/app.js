
let input = document.getElementById('input')
const handleSearch = (e) => {
  console.log(e.target.value)
}

input.addEventListener('keyup', handleSearch)



baguetteBox.run('.gallery', {
    captions: true,
    buttons: 'auto',
    animation: 'fadeIn'
});