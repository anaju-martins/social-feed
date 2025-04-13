import { Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/anaju-martins.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ana Júlia Martins</strong>
                            <time title="13 de Abril às 12:07" dateTime="2025-04-13 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                          <Trash size={24} />  
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}