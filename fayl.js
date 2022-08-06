const input = document.querySelector('.inp');
const container = document.querySelector('.sectionOne');
const Icon = document.getElementsByClassName('fa-bars')[0];
const burgerMenu = document.querySelector('nav');
const closee = document.querySelector('.close');
const Icon2 = document.querySelector('.icon2');
const control = document.querySelector('.control');
const sectionOne = document.querySelector(".sectionOne");
const header = document.querySelector('.header')

Icon.addEventListener('click', () => {
    burgerMenu.style = 'right: 0vw !important;'

})

closee.addEventListener('click', () => {
    burgerMenu.style = 'right:-30%'
})
/* Fetch Data */
window.addEventListener('load', async () => {
    const response = await fetch('https://course-api.com/react-store-products')
    const data = await response.json()
    console.log(data);

    input.addEventListener('input', (e) => {
        let inputValue = e.target.value

        let filterData = data.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()))
        console.log(filterData);
        let searchData = filterData.map(dat => {

            return ` <div class="container">
            <img src=${dat.image} alt="">
            <div class="name">${dat.name}</div>
            <h1>${dat.price}</h1>
            
        </div>`
        })
        container.innerHTML = searchData
    })



    const fullData = data.map(item => {
        
        return ` <div class="container">
        <img src=${item.image} alt="">
        <div class="name">${item.name}</div>
        <h1>${item.price}</h1>
        
    </div>`
    })
    container.innerHTML = fullData


})
/* Scroll top 0 */
window.addEventListener('scroll', () => {
    let sc = window.scrollY
    if (sc > 900) {
        Icon2.classList.add("active")
    } else {
        Icon2.classList.remove('active')
    }

})

Icon2.addEventListener('click', () => {
    window.scrollTo(0, 0)
})


/* Dark Mode localStorage */

let darkLocal = localStorage.getItem('darkmode')

const DarkMode = () => {
    control.classList.add('nightClass')
    sectionOne.classList.add('nigthClass2')
    header.classList.add('whiteMode')
    input.classList.add('inp2')
    localStorage.setItem('darkmode', 'dark')
    console.log('darkmode aktiv');

}

const WhiteMode = () => {
    control.classList.remove('nightClass')
    sectionOne.classList.remove('nigthClass2')
    header.classList.remove('whiteMode')
    input.classList.remove('inp2')
    localStorage.setItem('darkmode', null)
    console.log('white mode aktiv');
}

if (darkLocal == 'dark') {
    DarkMode()
}else{
    WhiteMode()
}


control.addEventListener('click', () => {
    let darkLocall = localStorage.getItem('darkmode')
    if (darkLocall !== 'dark') {
        DarkMode();
    }else{
        WhiteMode();
    }
    
})

/* Jquery Animation */
function blinkText() {
    $(".logo").fadeOut(1500);
    $(".logo").fadeIn(1500);
  }
  setInterval(blinkText, 1000);