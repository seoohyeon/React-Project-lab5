/* modal.tsx */

import classes from './Modal.module.scss';

export function Modal({ widthValue, heightValue }) {
  const modalStyle = {
    width: widthValue,
    height: heightValue,
  };

  return (
    <div className={classes['modal-wrap']} style={modalStyle}>
      <div className={classes['modal-top']}>
        <button
          type="button"
          aria-label="닫기버튼"
          className={classes['close']}
        >
          <img
            className={classes.img}
            src="../assets/close.svg"
            alt="닫기 버튼"
          />
        </button>
      </div>
    </div>
  );
}