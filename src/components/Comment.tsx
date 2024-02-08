import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/viniciusMassari.png' alt='' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinícius Massari</strong>
              <time title='11 de Maio às 8:13' dateTime='2022-05-11 08:13:38'>
                {' '}
                Cerca de 1h atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash />
            </button>
          </header>
          <p>Muto bom Vinícius, parabéns !! 😁😁</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
