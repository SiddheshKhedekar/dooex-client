// @flow

import React from 'react';

import styles from './InfoTable.scss';

function spaced(arr) {
  const nullComponent = <span className="text-muted">None</span>;

  return arr.reduce((prev, curr) => [prev, ' ', curr], null) || nullComponent;
}

type Props = {
  keys: Array<string>,
  doodle: Object,
};

function InfoTable(props: Props) {
  const { doodle, keys } = props;

  return (
    <table className={styles.root}>
      <tbody>
        {keys.map(k => (
          <tr key={k}>
            <td className={styles.labelType}>{k}</td>

            <td>
              {spaced(doodle[k].map(v => (
                <span key={v} className={styles.badge}>
                  {v}
                </span>
                )))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InfoTable;
