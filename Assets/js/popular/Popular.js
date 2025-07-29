async function Popular() {
    try {
        let data = await fetch("https://kimiajavadii.github.io/projectimdb/db.json");
        let res = await data.json();
        
        let popular = res.popb.map(function(elem){
            return `
                <div class="swiper-slide">
                  <div class="top">
                    <p>${elem.text1}</p>
                   </div>
                  <div class="bottom">
                    <a href="#">
                      <img src="${elem.pic1}" alt="#">
                      <div class="text">
                      <p class="first">${elem.text2}<span>(<svg width="7px" height="7px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M13 30L25 18L37 30" stroke="#00ff40" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>)</span></p>
                      <p class="second">${elem.text3}</p>
                      </div>
                    </a>
                    <a href="#">
                     <img src="${elem.pic2}" alt="#">
                    <div class="text">
                    <p class="first">${elem.text4}<span>(<svg width="7px" height="7px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M13 30L25 18L37 30" stroke="#00ff40" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>)</span></p>
                    <p class="second">${elem.text5}</p>
                    </div>
                    </a>
                    </div>
                </div>
            `
        });
        document.querySelector("#ffffamousSwiper-wrapper").insertAdjacentHTML("afterbegin",popular.join(" "));
        

    } catch (error) {
        console.log(error.message);
    }
    
      var swiper = new Swiper("#ffffamousSwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: "#ffffamousSwiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#ffffamousSwiper-next",
        prevEl: "#ffffamousSwiper-prev",
      },
     breakpoints:{
        0:{
          slidesPerView:1,
        },
        768:{
          slidesPerView :4,
        },
        1200:{
          slidesPerView:3,
        }
      }
    });
    

    
}

export default Popular 
