(() => {

    chrome.runtime.onMessage.addListener((obj) => {
        const {type} = obj;

        if (type === "NEW") {
            shortsContainer = document.getElementById("shorts-container");
            shortsContainer.remove();
        }
    });

})();