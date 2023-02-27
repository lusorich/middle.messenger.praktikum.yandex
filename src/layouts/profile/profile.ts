import tpl from './profile.template.hbs';
import Component from '../../utils/component/component';
import { ProfileLayoutProps } from './profile.types';
import Link from 'src/components/link/link';
import { mainRouter } from 'src/app/app';

export default class ProfileLayout extends Component<ProfileLayoutProps> {
  init() {
    this.children.link = new Link({
      id: 'link-profile-back',
      href: '',
      className: '',
      text: 'Назад',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          mainRouter.back();
        },
      },
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
