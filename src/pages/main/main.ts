import tpl from './main.template';
import { compile } from '../../lib/template-engine/compile';
import Component from '../../utils/Component';

export default class MainPage extends Component {
  render() {
    return this.compile(
      context =>
        compile(tpl(), {
          ...context,
        }),
      this.props,
    );
  }
}
