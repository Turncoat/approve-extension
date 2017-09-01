const saveButton = document.getElementById('save');
const tokenInput = document.getElementById('access_token');
const usernameInput = document.getElementById('username');
const successMessage = document.getElementById('success_message');
chrome.storage.local.get(['github_access_token', 'github_username'], items => {
  tokenInput.value = items.github_access_token;
  usernameInput.value = items.github_username;
});

saveButton.addEventListener('click', e => {
  e.preventDefault();
  const accessToken = tokenInput.value;
  const username = usernameInput.value;
  chrome.storage.local.set({
    'github_access_token': accessToken,
    'github_username': username,
  }, () => {
      successMessage.style.opacity = '1';
  })
});
