function renderAvatar() {
  const avatarWrapper = getId('avatar-wrapper')
  let username = localStorage.getItem('username')
  if (!username) {
    username = 'Mario'
  }
  template = `
    <div class="avatar-wapper">
        <img class="avatar-img-large" src="./img/avatar.jpg" alt="" />
     </div>
            <div id="avatar-detail">
              <div class="title">User Name:</div>
              <div class="user-name">${username} <button class="avatar-btn" onclick="showUserInput()")>Change your name</button></div>
            </div>
        ${
          isUserNameInputShow
            ? `<input
              class="user-name-input"
              onchange="userNameChange(event)"
              type="text"
              placeholder="enter your new name..."
            />`
            : ``
        }

        <div id="music">
            <div class="title">Your Music:</div>
            <div class="view-music-btn-wrapper">
              <button class="avatar-btn" onclick="showCurrentPage('allTracks')">View all your ${
                allTracks.length
              } music</button>
            </div>
        </div>
`

  avatarWrapper.innerHTML = template
}

renderAvatar()
