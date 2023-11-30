(function () {
    const year = document.getElementById('year')
    if( year) {
        year.innerHTML = new Date().getFullYear()
    }    

     const btnMenu = document.getElementById('btnmenu');
     const list = document.getElementById('nav-items');

     let show = true

     btnMenu.addEventListener('click', () =>{
      show = !show
      if (show){
        list.style.display = "block"
      }else{
        list.style.display = "none"
      }
     }, true)

     window.addEventListener('resize', ()=>{
      const width = screen.width
      if (width >= 375.99999){
        list.style.display = "flex"
      }else{
        list.style.display = "block"
      }
     })

})();


document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slider = document.querySelector('.slider');
    const totalImages = document.querySelectorAll('.slider img').length;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + translateValue + ')';
    }

    setInterval(nextSlide, 6000); 
});