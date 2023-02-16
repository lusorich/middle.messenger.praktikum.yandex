export default () => `
  <div class="wrapper-profile">
    <div class="wrapper-profile-avatar">
      {{ avatar }}
    </div>
    <div class="wrapper-profile-fields">
      <div>
        <span>Имя</span>
        <span class="profile-filled">{{ first_name }}</span>
      </div>
      <div>
        <span>Фамилия</span>
        <span class="profile-filled">{{ second_name }}</span>
      </div>
      <div>
        <span>Отображаемое имя</span>
        <span class="profile-filled">{{ display_name }}</span>
      </div>
      <div>
        <span>Логин</span>
        <span class="profile-filled">{{ login }}</span>
      </div>
      <div>
        <span>Почта</span>
        <span class="profile-filled">{{ email }}</span>
      </div>
      <div>
        <span>Телефон</span>
        <span class="profile-filled">{{ phone }}</span>
      </div>
    </div>
    <div class="wrapper-links">
      {{ editDataLink }}
      {{ editPasswordLink }}
      {{ exitLink }}
    </div>
  </div>`;
