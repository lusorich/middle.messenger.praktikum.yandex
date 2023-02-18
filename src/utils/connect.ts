import { Indexed } from 'src/helpers/custom-utility-types';
import { isDeepEqual } from 'src/helpers/isDeepEqual';
import { Props } from './component/component';
import { store, StoreEvents } from './store';

export function connect(mapStateToProps: (state: Indexed) => Indexed) {
  return function (UserComponent: any) {
    let prevState: any;

    return class extends UserComponent {
      constructor(props?: Props) {
        prevState = mapStateToProps(store.getState());

        super({ ...props, ...prevState });

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());

          if (!isDeepEqual((prevState = {}), newState)) {
            this.setProps({ ...newState });
          }

          prevState = newState;
        });
      }
    };
  };
}
