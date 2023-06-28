import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";


// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://i.pinimg.com/564x/11/df/25/11df2526e9d82677677b33285a577ab1.jpg",
      name: "Laís Aguiar",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: 'Fala galeraa 👋' },
      {type: "paragraph", content: 'Acabei de subir mais um projeto no meu portif. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: "link", content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl:
        "https://i.pinimg.com/564x/8f/18/00/8f1800d6d937fd392b83827a92ef4494.jpg",
      name: "Joao Gabriel",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portif. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
