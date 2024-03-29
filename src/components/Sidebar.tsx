import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt=''
        className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar avatarUrl='https://avatars.githubusercontent.com/u/108671484?v=4' />
        <strong>Vinícius Massari</strong>
        <span>Desenvolvedor Frontend</span>
      </div>
      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
