export default () => `
  <form class="registration-form">
    <div class="wrapper-registration-form-title">
      <h2>{{ formTitle }}</h2>
    </div>
    {{ inputFirstName }}
    {{ inputSecondName }}
    {{ inputLogin }}
    {{ inputEmail }}
    {{ inputPassword }}
    {{ inputPhone }}
    {{ registrationBtn }}
  </form>`;
