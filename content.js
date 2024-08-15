function removeForYouTab() {
    const allElements = document.body.getElementsByTagName('*');
    for (let element of allElements) {
      if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
        if (element.textContent.trim() === "For you") {
          let tabElement = element.closest('[role="tab"]');
          if (tabElement) {
            tabElement.style.display = 'none';
            return;
          }
        }
      }
    }
  }
  
  removeForYouTab();
  
  const observer = new MutationObserver(removeForYouTab);
  observer.observe(document.body, { childList: true, subtree: true });