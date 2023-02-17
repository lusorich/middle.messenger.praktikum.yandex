export default () =>
  `<div class="wrapper-main">
    <section class="main-left-block">
      <div class="main-left-block__header">
        <div class="wrapper-chat-actions">
          {{ addChatBtn}}
          {{ removeChatBtn }}
        </div>
        <div class="wrapper-link-profile">
          <a class="link-profile" id="link-profile">Профиль</a>
        </div>
      </div>
      {{ chatItem }}
    </section>
    <section class="main-right-block">
      {{ dialogHeader }}
      {{ dialogContent }}
      {{ dialogFooter }}
    </section>
  </div>`;
