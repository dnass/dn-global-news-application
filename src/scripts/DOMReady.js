/**
 * Triggers a function once DOM is loaded, just like $(document).ready()
 *
 * @module utils/dom/DOMReady
 * @param {function} fn - Callback function to be triggered when DOM is ready
 */
const DOMReady = ( fn ) => {
	if ( 'loading' !== document.readyState ) {
		fn();
	} else {
		document.addEventListener( 'DOMContentLoaded', fn );
	}
};

export default DOMReady;
