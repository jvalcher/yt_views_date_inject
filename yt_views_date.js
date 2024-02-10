
function changeStyling (infoContainer, spans) {
    infoContainer.style.lineHeight = "2.25rem";
    infoContainer.style.fontSize = "2rem";
    infoContainer.style.paddingBottom = "8px";
    spans[1].textContent = "         ";
    infoContainer.style.textDecoration = "underline";
}

document.addEventListener('yt-navigate-finish', () => {

    // make 5 attempts, 1 second apart, to style elements
    let stylingAttempts = 1;
    const styleInterval = setInterval(() => { 

        // If all required elements are present...
        if (document.querySelector('#info-container')) {

            let infoContainer = document.getElementById('info-container');
            let spans = infoContainer.getElementsByTagName('span');

            changeStyling(infoContainer, spans);

            document.getElementById("expand").addEventListener("click", () => {
                changeStyling(infoContainer, spans);
            });

            document.getElementById("collapse").addEventListener("click", () => {
                changeStyling(infoContainer, spans);
            });

            clearInterval(styleInterval);
        }

        if (stylingAttempts >= 5) clearInterval(styleInterval);
        stylingAttempts++;
    }, 1000);
});
