export default () => `
  <form class="profile-form">
    <div>
      <label for="first_name">Имя</label>
      {{ inputFirstName }}
    </div>
    <div>
      <label for="second_name">Фамилия</label>
      {{ inputSecondName }}
    </div>
    <div>
      <label for="display_name">Отображаемое имя</label>
      {{ inputDisplayName }}
    </div>
    <div>
      <label for="login">Логин</label>
      {{ inputLogin }}
    </div>
    <div>
      <label for="email">Почта</label>
      {{ inputEmail }}
    </div>
    <div>
      <label for="phone">Телефон</label>
      {{ inputPhone }}
    </div>
  </form>`;
