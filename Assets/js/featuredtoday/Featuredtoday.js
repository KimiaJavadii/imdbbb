async function Featuredtoday() {
    try {
        let data = await fetch("https://kimiajavadii.github.io/projectimdb/db.json");
        let res = await data.json();
        let featuredtoday = res.FBanner.map(function(elem){
            return `
                <div class="swiper-slide">
        <div class="pics">
          <img src="${elem.picc}" alt="#">
        </div>
        <div class="text">
          <a href="#" class="first">
            <p>${elem.text1}</p>
          </a>
          <a href="#" class="second">
            <p>${elem.text2}</p>
          </a>
        </div>
      </div>
            `
        });
        document.querySelector("#fftoday-wrapper").insertAdjacentHTML("afterbegin",featuredtoday.join(" "));
        

    } catch (error) {
        console.log(error.message);
    }
    var swiper = new Swiper(".todday", {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: "#fftoday-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#fftoday-next",
        prevEl: "#fftoday-prev",
      },
      centeredSlides:true,
          loop:true,
          autoplay:{
            delay:2500,
            disableOnInteraction:false,
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
export default Featuredtoday 