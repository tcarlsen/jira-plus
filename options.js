var defaultJiraUrl = 'https://jira'

// Saves options to chrome.storage
function save_options() {
  alert('save')
  var jiraUrl = document.getElementById('jira-url').value

  if (jiraUrl === '') {
    jiraUrl = defaultJiraUrl
  }

  chrome.storage.sync.set({
    jiraUrl: jiraUrl
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status')

    status.textContent = 'Options saved.'

    setTimeout(function() {
      status.textContent = ''
    }, 750)
  })
}
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  alert('restore')
  chrome.storage.sync.get({
    jiraUrl: defaultJiraUrl
  }, function(items) {
    document.getElementById('jira-url').value = items.jiraUrl
  })
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click',save_options)
