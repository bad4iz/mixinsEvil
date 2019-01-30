import _ from 'lodash';
import './styles.css';
import component from './component';
import button from './button';

document.body.appendChild(component());

// if (module.hot) {
//     module.hot.accept('./component.js', function() {
//         console.log('Accepting the updated printMe module!');
//     });
// }
