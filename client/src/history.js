import { syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import routerStore from 'stores/router';

const browserHistory = createBrowserHistory();
export default syncHistoryWithStore(browserHistory, routerStore);