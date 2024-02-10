import styles from './Avatar.module.css';
export function Avatar({
  avatarUrl,
  hasBorder = true,
}: {
  avatarUrl: string;
  hasBorder?: boolean;
}) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={avatarUrl}
      alt='profile photo'
    />
  );
}
