import { Post } from '../App';
import { formatDate } from '../utils/formatDate';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { formatDistanceToNow } from 'date-fns';

import { FormEvent, useState } from 'react';

import styles from './Post.module.css';
import { ptBR } from 'date-fns/locale';

export function Post({ author, content, publishedAt }: Post) {
  const [newCommentText, setNewCommentext] = useState('');
  const [comments, setComment] = useState<Array<string>>(['Post muito bacana']);

  const isNewCommentEmpty = newCommentText.length === 0;

  const publishedDate = formatDate(publishedAt);
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleNewCommentInvalid = (e: FormEvent<HTMLTextAreaElement>) => {
    e.currentTarget.setCustomValidity('Este campo é obrigatório');
    console.log(e.currentTarget.checkValidity());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComment([...comments, newCommentText]);
    setNewCommentext('');
  };

  const deleteComment = (comment: string) => {
    setComment(comments.filter((actualComment) => actualComment !== comment));
  };
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
            return <p key={content}>{content}</p>;
          } else {
            return (
              <p key={content}>
                <a href='#'>{content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea
          value={newCommentText}
          onChange={(e) => {
            e.currentTarget.setCustomValidity('');
            setNewCommentext(e.target.value);
          }}
          name='comment'
          placeholder='Deixe um comentário'
          required
          onInvalid={handleNewCommentInvalid}
          aria-required
        />
        <footer>
          <button disabled={isNewCommentEmpty} type='submit'>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments &&
          comments?.map((comment) => {
            return (
              <Comment
                key={comment}
                deleteComment={deleteComment}
                content={comment}
              />
            );
          })}
      </div>
    </article>
  );
}
