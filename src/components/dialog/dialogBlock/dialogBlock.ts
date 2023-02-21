import { Indexed } from 'src/helpers/custom-utility-types';
import { connect } from 'src/utils/connect';
import Component, { Props } from '../../../utils/component/component';
import DialogContent from '../dialogContent/dialogContent';
import DialogFooter from '../dialogFooter/dialogFooter';
import DialogHeader from '../dialogHeader/dialogHeader';
import tpl from './dialogBlock.template.hbs';

class DialogBlock extends Component<Record<string, unknown>> {
  init() {
    this.children.dialogHeader = new DialogHeader(this.props);
    this.children.dialogContent = new DialogContent(this.props);
    this.children.dialogFooter = new DialogFooter(this.props);
  }

  protected componentDidUpdate(_prevProps: Props, _nextProps: Props): boolean {
    this.children.dialogHeader = new DialogHeader(this.props);
    this.children.dialogContent = new DialogContent(this.props);
    this.children.dialogFooter = new DialogFooter(this.props);

    return true;
  }

  render() {
    return this.compile(tpl, this.props);
  }
}

export default connect((state) => {
  return state.chats as Indexed;
})(DialogBlock);
