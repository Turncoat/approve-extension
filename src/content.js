import getApproveButton from './approveButton';

const itemscopeContainer = document.getElementById('js-repo-pjax-container');
const baseHashComment = itemscopeContainer.childNodes[1].data;
const hashStart = baseHashComment.indexOf('&quot;') + 6;
const hashEnd = baseHashComment.indexOf('&quot;', hashStart)
const commitHash = baseHashComment.substring(hashStart, hashEnd);

const prDiscussionHeader = document.getElementById('partial-discussion-header');
const headers = prDiscussionHeader.getElementsByClassName('gh-header-show')[0];
const headerActions = headers.getElementsByClassName('gh-header-actions')[0];
headerActions.appendChild(getApproveButton());

// window.location.pathname + /reviews
