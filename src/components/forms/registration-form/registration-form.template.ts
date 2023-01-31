export default () => `
  <form class="registration-form">
    <div class="wrapper-registration-form-title">
      <h2>{{ formTitle }}</h2>
    </div>
    <div class="wrapper-registration-input">
      {{ inputFirstName }}
      <span> {{ errorFirstNameText }} </span>
    </div>
    <div class="wrapper-registration-input">
      {{ inputSecondName }}
      <span> {{ errorSecondNameText }} </span>
    </div>
    <div class="wrapper-registration-input">
      {{ inputLogin }}
      <span> {{ errorLoginText }} </span>
    </div>
    <div class="wrapper-registration-input">
      {{ inputEmail }}
      <span> {{ errorEmailText }} </span>
    </div>
    <div class="wrapper-registration-input">
      {{ inputPassword }}
      <span> {{ errorPasswordText }} </span>
    </div>
    <div class="wrapper-registration-input">
      {{ inputPhone }}
      <span> {{ errorPhoneText }} </span>
    </div>
    {{ registrationBtn }}
  </form>`;
