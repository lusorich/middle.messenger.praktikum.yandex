export default () =>`
  <form class="profile-password-form">
    <div>
      <label for="oldPassword">Старый пароль</label>
      {{ inputOldPassword }}
    </div>
    <div>
      <label for="newPassword">Новый пароль</label>
      {{ inputNewPassword }}
    </div>
    <div>
      <label for="newPasswordRepeat">Повторите новый пароль</label>
      {{ inputNewPasswordRepeat }}
    </div>
  </form>`;
