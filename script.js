chrome.storage.sync.get({
  jiraUrl: 'https://jira'
}, function(items) {
  if(window.location.href.indexOf(items.jiraUrl) > -1) {
    /*
    ** Make all external links open in a new tab
    */
    var target = document.getElementById('jira')
    var externalLinks = []

    var observer = new MutationObserver(function(mutations) {
      externalLinks = document.getElementsByClassName('external-link')

      for (var i = 0; i < externalLinks.length; i++) {
        externalLinks[i].setAttribute('target', '_blank')
      }
    })

    observer.observe(target, {
      attributes: true,
      childList: true,
      characterData: true
    })
  }
})
