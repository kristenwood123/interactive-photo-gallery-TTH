
let input = document.getElementById('input')

const handleSearch = (e) => {
  let inputValue = e.target.value.toLowerCase();
  let array = document.getElementsByClassName('item')


  for (let i = 0; i < array.length; i++) {
    let caption = array[i].getAttribute('data-caption')
    let alt = array[i].getAttribute('alt')
    let image = array[i]
     if(caption.includes(inputValue) || alt.includes(inputValue)) {
      image.style.display = 'inline'
    } else {
      image.style.display = 'none'
    }
  }
}

input.addEventListener('keyup', handleSearch)

baguetteBox.run('.gallery', {
    captions: true,
    buttons: 'auto',
    animation: 'fadeIn'
});