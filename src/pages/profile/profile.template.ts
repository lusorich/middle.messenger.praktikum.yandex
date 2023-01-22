export default () => `
  <div class="wrapper-profile">
    <div class="wrapper-profile-avatar">
      Mark
    </div>
    <div class="wrapper-profile-fields">
      <div>
        <span>Имя</span>
        <span class="profile-filled">Бэтмен</span>
      </div>
      <div>
        <span>Фамилия</span>
        <span class="profile-filled">Бэтменюк</span>
      </div>
      <div>
        <span>Отображаемое имя</span>
        <span class="profile-filled">Бэтмен</span>
      </div>
      <div>
        <span>Логин</span>
        <span class="profile-filled">Batman</span>
      </div>
      <div>
        <span>Почта</span>
        <span class="profile-filled">batman@hero.com</span>
      </div>
      <div>
        <span>Телефон</span>
        <span class="profile-filled">8-777-777-77-77</span>
      </div>
    </div>
    <div class="wrapper-links">
      {{ editDataLink }}
      {{ editPasswordLink }}
      {{ exitLink }}
    </div>
  </div>`;
