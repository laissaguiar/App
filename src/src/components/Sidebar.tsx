import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://i.pinimg.com/564x/ea/18/da/ea18da0ee3cf1252414687403abe4170.jpg"
      />

      <div className={styles.profile}>
        <Avatar src="https://i.pinimg.com/564x/11/df/25/11df2526e9d82677677b33285a577ab1.jpg" />

        <strong>Lais Aguiar</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
