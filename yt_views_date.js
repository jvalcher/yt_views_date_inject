
document.addEventListener('yt-navigate-finish', () => {

    // Attempt to style elements
    let stylingAttempts = 1;
    const styleInterval = setInterval(() => { 

        // If all required elements are present...
        if (document.querySelector('#info-container') && document.querySelector('#info span:nth-child(1)') && document.querySelector('#info span:nth-child(3)')) {

            clearInterval(styleInterval);

            // Add #info-container styling
            let  infoElem = document.querySelector('#info-container');
            infoElem.style.width = "75%";
            infoElem.style.fontSize = "1.5rem";
            infoElem.style.borderBottom = "1px solid white";
            infoElem.style.marginBottom = "10px";
            infoElem.style.paddingBottom = "10px";

            // Add #info <span> padding
            infoElem = document.querySelector('#info span:nth-child(1)');
            infoElem.style.paddingRight = "40px";
        }

        // Make 5 attempts, 2 secs apart
        if (stylingAttempts >= 5) clearInterval(styleInterval);
        stylingAttempts++;
    }, 2000);
});
