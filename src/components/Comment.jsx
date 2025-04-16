import { Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr';
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}){

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1574231164645-d6f0e8553590?q=80&w=1404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ana Júlia Martins</strong>
                            <time title="13 de Abril às 12:07" dateTime="2025-04-13 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment}title="Deletar comentário">
                          <Trash size={24} />  
                        </button>
                    </header>

                    <p>{content}</p>
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