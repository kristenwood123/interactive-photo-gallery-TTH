
let input = document.getElementById('input')

const handleSearch = (e) => {
  let inputValue = e.target.value.toLowerCase();
    let array = document.getElementsByClassName('item')
      let caption = array[i].getAttribute('data-caption')
     if(caption.includes(inputValue)) {
      console.log(array[i]);
  for (let i = 0; i < array.length; i++) {
    }
  }
}

input.addEventListener('keyup', handleSearch)


  




baguetteBox.run('.gallery', {
    captions: true,
    buttons: 'auto',
    animation: 'fadeIn'
});