// @flow

import styles from './Alert.css';

type AlertType =
  | 'danger'
  | 'dark'
  | 'info'
  | 'light'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

class Alert {
  div: HTMLDivElement;
  message: string;
  type: string;

  static queue = [];
  static container: HTMLDivElement;

  static renderContainer() {
    Alert.container = document.createElement('div');
    Alert.container.className = styles.container;

    // $FlowFixMe
    document.body.appendChild(Alert.container);
  }

  constructor(message: string, type: AlertType = 'primary') {
    if (Alert.container === undefined) {
      Alert.renderContainer();
    }

    this.type = type;
    this.message = message;

    this.div = this.createDiv();

    this.render();
  }

  createDiv() {
    const div = document.createElement('div');
    div.innerText = this.message;
    div.className = this.withType(styles.alert);

    return div;
  }

  withType = (className: string) => `${className} alert-${this.type}`;

  render() {
    const { div, withType } = this;

    if (Alert.queue.length === 0) {
      // $FlowFixMe
      Alert.container.appendChild(div);
    } else {
      // $FlowFixMe
      Alert.container.insertBefore(div, Alert.queue[0]);
    }
    Alert.queue.unshift(div);

    setTimeout(() => {
      div.className = withType(styles.show);
    }, 100);

    this.remove();
  }

  remove() {
    const { div, withType } = this;

    setTimeout(() => {
      div.className = withType(styles.hide);

      setTimeout(() => {
        Alert.queue.pop();
        div.remove();
      }, 400);
    }, 2000);
  }
}

/**
 * Allow calling class constructor without `new`
 * @param {class} C
 */
function classAsFunction(C) {
  const wrapped = (...args: Array<*>) => new C(...args);

  Object.defineProperty(wrapped, 'name', {
    value: C.name,
  });

  return wrapped;
}

export default classAsFunction(Alert);
