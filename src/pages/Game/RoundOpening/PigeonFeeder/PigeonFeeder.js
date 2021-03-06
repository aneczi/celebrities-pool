import React, { useContext } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

import { pigeonContext } from './PigeonContext';
import bread from './bread.svg';

import styles from './PigeonFeeder.module.scss';

const PigeonFeeder = () => {
  const { feedPigeon, isPigeonFed } = useContext(pigeonContext);

  if (isPigeonFed) return null;

  return (
    <div className={styles.wrapper}>
      <DragDropContainer targetKey="foo">
        <img src={bread} alt="bread" className={styles.bread} />
      </DragDropContainer>

      <DropTarget targetKey="foo" onHit={() => feedPigeon()}>
        <div className={styles.target} />
      </DropTarget>
    </div>
  );
};

export default PigeonFeeder;
