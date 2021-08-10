// import scripts
import DOMReady from './scripts/DOMReady';

// import styles
import './css/styles.scss';

// enable hot module replacement
if ( module.hot ) {
	module.hot.accept();
}

DOMReady( () => {
	// application logic
});
