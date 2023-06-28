import { ImgHTMLAttributes } from 'react';
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  
}
// ? opcional

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    //se a propriedade hasBorder for diferente de false
    //quer dizer que tem borda

    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}

//if as propriedades contem border vai mostrar styles.avatarWithBorder
// senao styles.avatar
