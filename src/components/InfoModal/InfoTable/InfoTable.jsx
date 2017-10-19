// @flow

import React from 'react';

import styles from './InfoTable.scss';

function DataBadge({ item }: { item: string }) {
  return <span className={styles.badge}>{item}</span>;
}

function Row({ doodle, property }: { doodle: Object, property: string }) {
  const items = doodle[property];

  const DataBadges = items.map(item => <DataBadge key={item} item={item} />);

  return (
    <tr>
      <td className={styles.labelType}>{property}</td>

      <td>{DataBadges.length > 0 ? DataBadges : <span className="text-muted">None</span>}</td>
    </tr>
  );
}

function InfoTable({ doodle }: { doodle: Object }) {
  return (
    <table className={styles.root}>
      <tbody>
        <Row doodle={doodle} property="countries" />

        <Row doodle={doodle} property="tags" />
      </tbody>
    </table>
  );
}

export default InfoTable;
