import React, { ChangeEvent, FormEvent } from 'react';
import { NOOP } from '../../utils/js/NOOP';
import styles from './commentform.css';
import { CommentOptions } from './CommentOptions';

interface ICommentFormProps {
  hasCancel?: boolean;
  submitText: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent) => void;
  onCancel?: (event: FormEvent<HTMLButtonElement>) => void;
}

export const CommentForm = React.forwardRef(
  (props: ICommentFormProps, ref: any) => {
    const {
      hasCancel = false,
      submitText,
      value,
      onChange,
      onSubmit,
      onCancel = NOOP,
    } = props;
    return (
      <form className={styles.form} onSubmit={onSubmit}>
        <textarea
          ref={ref}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder="Оставьте ваш комментарий"
        />
        <div className={styles.controls}>
          <CommentOptions />
          {hasCancel && (
            <button type="reset" onClick={onCancel} className={styles.cancel}>
              Отменить
            </button>
          )}
          <button type="submit" className={styles.button}>
            {submitText}
          </button>
        </div>
      </form>
    );
  }
);
