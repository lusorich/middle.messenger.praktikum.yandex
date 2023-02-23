import tpl from './popup.template.hbs';
import Component from '../../utils/component/component';
import Button from 'src/components/button/button';

export default class Popup extends Component<Record<string, unknown>> {
  init() {
    this.children.closeBtn = new Button({
      className: 'button',
      name: 'closeButton',
      text: 'X',
      type: 'button',
      events: {
        click: () => {
          this.hide();
        },
      },
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
