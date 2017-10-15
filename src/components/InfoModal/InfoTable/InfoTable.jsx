import React from 'react';
import PropTypes from 'prop-types';

import styles from './InfoTable.scss';

function spaced(arr) {
  const nullComponent = <span className="text-muted">None</span>;

  return arr.reduce((prev, curr) => [prev, ' ', curr], null) || nullComponent;
}

function InfoTable({ doodle, keys }) {
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

InfoTable.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  doodle: PropTypes.object.isRequired,
};

export default InfoTable;
