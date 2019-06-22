import { createBrowserHistory } from 'history';

class UIManager {
  constructor() {
    this.contentPageRef = null;
    this.currentLink = null;
    this.history = createBrowserHistory();
    this.isReady = true;
  }

  resetReadyState = () => {
    this.isReady = true;
  }

  openPage = async (link) => {
    if (this.isReady) {
      this.isReady = false;
      if (this.currentLink !== link) {
        if (this.contentPageRef) {
          await this.contentPageRef.hide();
        }
        this.history.push(link);
        this.currentLink = link;
      }
      this.isReady = true;
    } else {
      console.log('not ready');
    }
  }

  anchorPage = (ref) => {
    this.contentPageRef = ref;
  }
}

const manager = new UIManager();

export default manager;