const home = document.querySelector(".main-home");
const about = document.querySelector(".about");

home.addEventListener("click", ()=>{
    home.style.backgroundColor = "white";
})

// Make sre sw are supported
    if("serviceWorker" in navigator){
                    console.log("Service Worker Supported!")
        // register the service worker when the window loads
        // needs to be async since returns promises...
        // most vids use .then and .catch
            window.addEventListener("load", async ()=>{
                try{
                    // don't forget to await naviagor.service worker it's async
                    const registration = await navigator.serviceWorker
                        // .register("./ServiceWorker.js")
                        .register("./ServiceWorkerCacheSite.js")
                                            console.log(`Service Worker Registered`, registration);
                }catch(error){
                    console.error("Service worker registration failed", error);
                }
            })
    }

