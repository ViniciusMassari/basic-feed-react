import { Post } from '../App';
import { formatDate } from '../utils/formatDate';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { formatDistanceToNow } from 'date-fns';

import styles from './Post.module.css';
import { ptBR } from 'date-fns/locale';

export function Post({ author, content, publishedAt }: Post) {
  const publishedDate = formatDate(publishedAt);
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar avatarUrl='https://github.com/diego3g.png' />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDate} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow} atras
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ type, content }) => {
          if (type === 'paragraph') {
            return <p>{content}</p>;
          } else {
            return (
              <p>
                <a href='#'>{content}</a>
              </p>
            );
          }
        })}
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
