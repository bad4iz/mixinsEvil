import _ from 'lodash';
import './styles.css';

// поменять строчки местами и посмотреть с перезагрузкой браузера
import component from './component';
import './header_button.css';
import button from './button';

document.body.appendChild(component());

// if (module.hot) {
//     module.hot.accept('./component.js', function() {
//         console.log('Accepting the updated printMe module!');
//     });
// }
