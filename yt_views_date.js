

let try_infoC = 1;
let try_infoId = 1;
let counter = 0;
let infoC = null;
let infoId = null;

// Inject views, creation date styling
while ((try_infoC === 1 || try_infoId === 1) && counter < 5) {
    
    // Add #info-container styling
    infoC = document.querySelector('#info-container');
    if (try_infoC === 1 && infoC !== null) {
        infoC.style.display = "block";
        infoC.style.justifyContent = "left";
        infoC.style.width = "75%";
        infoC.style.fontSize = "1.5rem";
        infoC.style.borderBottom = "1px solid white";
        infoC.style.marginBottom = "10px";
        infoC.style.paddingBottom = "10px";
        try_infoC = 0;
    } else {
        // wait 1 second if element not loaded
        setTimeout(() => {
            console.log("Views/creation date styling failed: #info-container element not loaded, trying again...");
        }, 1000);
    }
    
    // Add #info <span> padding
    infoId = document.querySelector('#info span:nth-child(1)');
    if (try_infoId === 1 && infoId !== null) {
        infoId.style.paddingRight = "20px";
        infoId = document.querySelector('#info span:nth-child(3)');
        infoId.style.paddingLeft = "20px";
        try_infoId = 0;
    } else {
        // wait 1 second if element not loaded
        setTimeout(() => {
            console.log("Views/creation date styling failed: #info <span> elements not loaded, trying again...");
        }, 1000);
    }

    counter += 1;

    // Print success message
    if (try_infoId === 0 && try_infoC === 0) { 
        console.log("Views/creation date styling successful");
        break;
    }

    // Print failure message
    if (counter === 5) console.log("Views/creation date styling failed");
}
