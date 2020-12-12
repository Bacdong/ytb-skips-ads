// alert("Extension work");
console.log('Extension Work!');

const adsElement = document.getElementsByClassName("video-ads ytp-ad-module")[0];

const observer = new MutationObserver(() => {
    const skipBtnElement = document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0];
    if (skipBtnElement)
        skipBtnElement.click();
});

observer.observe(adsElement, {childList: true});
