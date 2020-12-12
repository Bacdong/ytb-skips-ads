// alert("Extension work");
console.log('Extension Work!');

const adsElement = document.getElementsByClassName("video-ads ytp-ad-module");
if (adsElement.length <= 0) 
    adsElement = [];
else
    adsElement = adsElement[0];

const observer = new MutationObserver(() => {
    const skipBtnElement = document.getElementsByClassName("ytp-ad-skip-button ytp-button");
    if (skipBtnElement.length <= 0)
        skipBtnElement = [];
    else
        skipBtnElement = skipBtnElement[0];
        
    if (skipBtnElement)
        skipBtnElement.click();
});

observer.observe(adsElement, {childList: true});
