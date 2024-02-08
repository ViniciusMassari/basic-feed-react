import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://avatars.githubusercontent.com/u/108671484?v=4'
            alt=''
          />
          <div className={styles.authorInfo}>
            <strong>Vinícius Massari</strong>
            <span>Desenvolvedor Frontend</span>
          </div>
        </div>

        <time title='11 de Maio às 8:13' dateTime='2022-05-11 08:13:38'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋 </p>
        <p>
          {' '}
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          {' '}
          👉 <a href='#'>jane.design/doctorcare</a>{' '}
        </p>
        <p>
          <a href='#'>#novoprojeto </a> <a href='#'>#rocketseat</a> {''}{' '}
          <a href='#'>#nlw</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
