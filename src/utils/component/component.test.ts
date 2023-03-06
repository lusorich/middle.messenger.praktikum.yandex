/**
 * @jest-environment jsdom
 */

import Component from './component';

describe('Тестируем базовый компонент', () => {
  class UserComponent extends Component<Record<string, unknown>> {
    render(): DocumentFragment {
      const temp = document.createElement('template');
      temp.innerHTML = '<div>Hello</div>';
      return temp.content;
    }
  }

  const USER_COMPONENT = new UserComponent();

  it('Унаследованный от компонента класс должен содержать метод ComponendDidMount', () => {
    expect(USER_COMPONENT).toHaveProperty('componentDidMount');
  });

  it('метод setProps устанавливает пропсы в компонент', () => {
    USER_COMPONENT.setProps({ name: 'mark' });
    expect(USER_COMPONENT.props.name).toBe('mark');
  });

  it('Метод getContent возвращает текущий элемент', () => {
    const element = USER_COMPONENT.getContent();

    const div = document.createElement('div');
    div.textContent = 'Hello';

    expect(element?.outerHTML).toBe(div.outerHTML);
  });

  it('Метод hide добавляет класс visually-hidden', () => {
    USER_COMPONENT.hide();

    const element = USER_COMPONENT.getContent();

    const isHasVisuallyHidden = element?.classList.contains('visuallyHidden');

    expect(isHasVisuallyHidden).toBeTruthy;
  });

  it('Метод show убирает класс visually-hidden', () => {
    USER_COMPONENT.show();

    const element = USER_COMPONENT.getContent();

    const isHasVisuallyHidden = element?.classList.contains('visuallyHidden');

    expect(isHasVisuallyHidden).toBeFalsy;
  });
});
