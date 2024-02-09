
function setInfo (infoContainer, spans) {
    infoContainer = document.getElementById('info-container');
    spans = infoContainer.getElementsByTagName('span');

    infoContainer.style.lineHeight = "2.25rem";
    infoContainer.style.fontSize = "2rem";
    infoContainer.style.paddingBottom = "8px";
    spans[1].textContent = "         ";
    infoContainer.style.textDecoration = "underline";
}

document.addEventListener('yt-navigate-finish', () => {

    // Attempt to style elements
    let stylingAttempts = 1;
    const styleInterval = setInterval(() => { 

        // If all required elements are present...
        if (document.querySelector('#info-container')) {

            clearInterval(styleInterval);

            let infoContainer;
            let spans;
            setInfo(infoContainer, spans);

            document.getElementById("expand").addEventListener("click", function() {
                setInfo(infoContainer, spans);
            });

            document.getElementById("collapse").addEventListener("click", function() {
                setInfo(infoContainer, spans);
            });
        }

        // Make 5 attempts, 2 secs apart
        if (stylingAttempts >= 5) clearInterval(styleInterval);
        stylingAttempts++;
    }, 2000);
});
