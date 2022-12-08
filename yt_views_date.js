
// Inject views, creation date styling
document.addEventListener('yt-navigate-finish', () => {

    let stylingAttempts = 1;
    const styleInterval = setInterval(() => { 

        if (document.querySelector('#info-container') && document.querySelector('#info span:nth-child(1)') && document.querySelector('#info span:nth-child(3)')) {

            clearInterval(styleInterval);

            // Add #info-container styling
            let  infoElem = document.querySelector('#info-container');
            infoElem.style.display = "block";
            infoElem.style.justifyContent = "left";
            infoElem.style.width = "75%";
            infoElem.style.fontSize = "1.5rem";
            infoElem.style.borderBottom = "1px solid white";
            infoElem.style.marginBottom = "10px";
            infoElem.style.paddingBottom = "10px";

            // Add #info <span> padding
            infoElem = document.querySelector('#info span:nth-child(1)');
            infoElem.style.paddingRight = "20px";
            infoElem = document.querySelector('#info span:nth-child(3)');
            infoElem.style.paddingLeft = "20px";
        }

        // Make 5 attempts to style
        if (stylingAttempts >= 5) {
            clearInterval(styleInterval);
        }
        stylingAttempts++;

    }, 2000);
});
