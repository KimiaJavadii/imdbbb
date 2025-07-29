async function EditorPick() {
    try {
        let data = await fetch("https://kimiajavadii.github.io/projectimdb/db.json");
        let res = await data.json();
        let editorpick = res.editorBanner.map(function(elem){
            return `
               <div class="swiper-slide">
        <div class="pics">
          <img src="${elem.img}" alt="#">
        </div>
        <div class="text">
          <a href="#" class="first">
            <p>${elem.text}</p>
          </a>
          <a href="#" class="second">
            <p>${elem.text2}</p>
          </a>
        </div>
      </div>
            `
        });
        document.querySelector("#editorSwiper-wrapper").insertAdjacentHTML("afterbegin",editorpick.join(" "));
        

    } catch (error) {
        console.log(error.message);
    }
    var swiper = new Swiper("#editorSwiper", {
      slidesPerView: 3,
      spaceBetween: 0,
      pagination: {
        el: "#editorSwiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#editorSwiper-next",
        prevEl: "#editorSwiper-prev",
      },
      breakpoints:{
        0:{
          slidesPerView:1,
        },
        768:{
          slidesPerView :2,
        },
        1200:{
          slidesPerView:3,
        }
      }
    });
    

    
}
export default EditorPick