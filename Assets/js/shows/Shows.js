async function Shows() {
    try {
        let data = await fetch("https://kimiajavadii.github.io/projectimdb/db.json");
        let res = await data.json();
        let shows = res.showT.map(function(elem){
            return `
               <a href="#">
                        <div class="left">
                          <p>${elem.text}</p>
                          <span><svg width="20px" height="40px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <title>ic_fluent_divider_tall_24_regular</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_divider_tall_24_regular" fill="#EBC103" fill-rule="nonzero"> <path d="M11.25,2.75 L11.25,21.25 C11.25,21.6642136 11.5857864,22 12,22 C12.4142136,22 12.75,21.6642136 12.75,21.25 L12.75,2.75 C12.75,2.33578644 12.4142136,2 12,2 C11.5857864,2 11.25,2.33578644 11.25,2.75 Z" id="🎨Color"> </path> </g> </g> </g></svg></span>
                          <span><svg width="34px" height="64px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path clip-rule="evenodd" d="M5 2.92445C5 1.8616 5.8616 1 6.92444 1H20.3956C21.4584 1 22.32 1.8616 22.32 2.92444V25.0556C22.32 26.6414 20.5096 27.5466 19.2409 26.5951L13.66 22.4094L8.07911 26.5951C6.81045 27.5466 5 26.6414 5 25.0556V2.92445ZM20.3956 3.50178C20.3956 3.18293 20.1371 2.92444 19.8182 2.92444L7.50178 2.92445C7.18293 2.92445 6.92444 3.18293 6.92444 3.50178V24.4782C6.92444 24.7161 7.19601 24.8519 7.38631 24.7092L12.5053 20.8699C13.1896 20.3567 14.1304 20.3567 14.8147 20.8699L19.9337 24.7092C20.124 24.8519 20.3956 24.7161 20.3956 24.4782V3.50178Z" fill="#b1b1b1" fill-rule="evenodd"></path><path d="M10 11C10 10.4477 10.4477 10 11 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H11C10.4477 12 10 11.5523 10 11Z" fill="#b1b1b1"></path><path d="M14 15C13.4477 15 13 14.5523 13 14V8C13 7.44772 13.4477 7 14 7C14.5523 7 15 7.44772 15 8V14C15 14.5523 14.5523 15 14 15Z" fill="#b1b1b1"></path></g></svg></span>
                          
                        </div>
                        <div class="right">
                          <p class="first">${elem.text2}</p>
                          <p class="second">${elem.text3}</p>
                        </div>
                      </a>
            `
        });
        document.querySelector("#bottomShow").insertAdjacentHTML("afterbegin",shows.join(" "));
        

    } catch (error) {
        console.log(error.message);
    }
    
    
    

    
}
export default Shows