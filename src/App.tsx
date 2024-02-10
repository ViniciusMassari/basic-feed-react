import { Header } from './components/Header';
import styles from './app.module.css';
import './global.css';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

interface Content {
  type: ContentType;
  content: string;
}
interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

type ContentType = 'paragraph' | 'link';
export interface Post {
  id?: number;
  author: Author;
  content: Array<Content>;
  publishedAt: Date;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/viniciusMassari.png',
      name: 'Vinícius Massari',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },

      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2024-02-09 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CEO at @ROCKETSEAT',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },

      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2024-02-9 20:00:00'),
  },
];
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                content={post.content}
                author={post.author}
                publishedAt={post.publishedAt}
                key={post.id}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
