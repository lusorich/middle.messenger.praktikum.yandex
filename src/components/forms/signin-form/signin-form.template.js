export default () => `
  <form class="signin-form">
    <div class="wrapper-signin-form-title">
      <h2>{{ formTitle }}</h2>
    </div>
    {{ inputName }}
    {{ inputPassword }}
    {{ signInBtn }}
  </form>`;
