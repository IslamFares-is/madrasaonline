// Start_When click on any unit, increase the height of the unit container
let playlist = document.querySelector(".playlist")
let playlistHead = document.querySelector(".playlist-head");
let units = document.querySelectorAll(".units-container > div");
let unitsTitle = document.querySelectorAll(".units-container > div .title");
let lessonsCount = document.querySelector(".lesson-count .count");
let titles = document.querySelectorAll(".units-container > div > a");
let iframes = document.querySelectorAll(".iframes iframe");
let videoPlayer = document.querySelector(".video-section > div");
let optionTabs = document.querySelectorAll(".options button");
let videoSections = document.querySelectorAll(".sections > div");
lessonsCount.textContent = iframes.length;

for(let i = 0; i < units.length; i++){
    unitsTitle[i].addEventListener("click",()=>{
        if(units[i].style.height != "120px") {
            units[i].style.cssText = "height:120px;"
        } else {
            units[i].style.height = "60px";
        }
    })
}

// End_When click on any class, increase the height of the container

// take the iframe from iframes container and display it on video section


for(let i = 0; i < titles.length; i++){

    titles[i].addEventListener("click",()=>{
        videoPlayer.innerHTML = "";
        videoPlayer.appendChild(iframes[i]);
        console.log(titles[i])
    })
}




// Customise option buttons to nav between sections.
optionTabs.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        optionTabs.forEach((e)=>{
            e.classList.remove("active")
        })
        tab.classList.add("active")
        sectionContent()
    })
})

function sectionContent(){
    for(let i = 0 ; i < videoSections.length; i++){
        videoSections[i].classList.remove("active");
        if(optionTabs[i].classList.contains("active")){
            videoSections[i].classList.add("active")
        }
    }
}



// Files Section
let files = document.querySelectorAll(".files-section > div");
files.forEach((f)=>{
    f.addEventListener("click",()=>{
        
        if(f.style.height != "190px") {
            f.style.height = "190px";
        } else {
            f.style.height = "60px";
        }
    })
})


// Responsive Playlist expands on medium and small screens
playlistHead.addEventListener("click",()=>{
    console.log(playlist.style.height)
    if(playlist.style.height != "300px") {
        playlist.style.height = "300px";
    } else  {
        playlist.style.height = "60px"
    }
})