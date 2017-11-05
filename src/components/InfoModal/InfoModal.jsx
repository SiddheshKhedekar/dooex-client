// @flow

import type { Doodle } from 'modules/types';

import React from 'react';

import InfoTable from 'components/InfoTable';
import OnlineLink from 'components/OnlineLink';

import styles from './InfoModal.css';

type Props = {
  doodle: Doodle,
  close: Function,
};

function InfoModal(props: Props) {
  const { close, doodle } = props;

  return (
    <div className={styles.root}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <OnlineLink to={`https://www.google.com/doodles/${doodle.name}`} target="_blank">
                {doodle.title}

                <small className={styles.externalLink} />
              </OnlineLink>
            </h5>

            <button className="close" onClick={() => close('info')}>
              <span>&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <InfoTable doodle={doodle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
