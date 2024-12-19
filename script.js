// Managing state for various settings
let state = {
    theme: 'light',
    language: 'en',
    fontSize: 16,
    readReceipts: true,
    lastSeenVisibility: 'all',
    messageDeletionPeriod: 30,
    blockedContacts: []
  };
  
  // Update the state based on user interactions
  function updateState(key, value) {
    state[key] = value;
    console.log(`Updated ${key} to ${value}`);
  }
  
  // Change theme
  function changeTheme(theme) {
    updateState('theme', theme);
    document.body.className = theme;
  }
  
  // Change language
  function changeLanguage(language) {
    updateState('language', language);
    // You may need to reload the page or update text content
  }
  
  // Change font size
  function changeFontSize(fontSize) {
    updateState('fontSize', fontSize);
    document.documentElement.style.fontSize = `${fontSize}px`;
  }
  
  // Change last seen visibility
  function changeLastSeenVisibility(visibility) {
    updateState('lastSeenVisibility', visibility);
    // Update UI or send data to server
  }
  
  // Toggle read receipts
  function toggleReadReceipts(enabled) {
    updateState('readReceipts', enabled);
    // Update UI or send data to server
  }
  
  // Change message deletion period
  function changeMessageDeletionPeriod(period) {
    updateState('messageDeletionPeriod', period);
    // Update UI or send data to server
  }
  
  // Manage blocked contacts
  function manageBlockedContacts() {
    // Open a modal or navigate to a page where blocked contacts can be managed
    alert('Manage blocked contacts');
  }
  
  // Export chat data
  function exportData() {
    // Trigger data export
    alert('Exporting chat data...');
  }
  
  // Delete account
  function deleteAccount() {
    // Confirm and delete account
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deleted');
    }
  }
  
  // Add event listeners for user interactions
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('theme-select').addEventListener('change', (e) => changeTheme(e.target.value));
    document.getElementById('language-select').addEventListener('change', (e) => changeLanguage(e.target.value));
    document.getElementById('font-size').addEventListener('input', (e) => changeFontSize(e.target.value));
    document.getElementById('last-seen').addEventListener('change', (e) => changeLastSeenVisibility(e.target.value));
    document.getElementById('read-receipts').addEventListener('change', (e) => toggleReadReceipts(e.target.checked));
    document.getElementById('message-deletion').addEventListener('change', (e) => changeMessageDeletionPeriod(e.target.value));
    document.getElementById('manage-blocked-contacts').addEventListener('click', manageBlockedContacts);
    document.getElementById('export-data').addEventListener('click', exportData);
    document.getElementById('delete-account').addEventListener('click', deleteAccount);
  });