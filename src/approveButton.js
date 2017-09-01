import { repoOwner, repoName, prNumber } from './github.js';

const approveAction = event => {

  const data = {
    event: 'APPROVE',
  }

  chrome.storage.local.get(['github_username', 'github_access_token'], items => {
    const accessToken = items.github_access_token;
    const username = items.github_username;
    const authHash = btoa(`${username}:${accessToken}`);
    const headers = new Headers({
      'Authorization': `Basic ${authHash}`,
      'Content-Type': 'application/json',
    });

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/pulls/${prNumber}/reviews`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    }).then(resp => {
      if (!resp.ok) throw new Error('Something went wrong');
    }).catch(error => {
      alert('PR could not be approved');
    })
  });
}


const getApproveButton = () => {
  const approveButton = document.createElement('button');
  approveButton.appendChild(
    document.createTextNode('Approve')
  );
  approveButton.classList.add('btn', 'btn-sm', 'btn-primary');
  approveButton.addEventListener('click', approveAction);

  return approveButton;
}

export default getApproveButton;
