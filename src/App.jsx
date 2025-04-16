import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import {Post} from './components/Post';
import './global.css';
import styles from './App.module.css';

// author: { avatar_url: " ", name: " ", role: ""} 
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Camila Rocha',
      role: 'DevOps Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Hoje finalizei uma melhoria que fez toda a diferença no nosso fluxo de deploy! 🚀' },
      { type: 'paragraph', content: 'Implementei uma nova pipeline de CI/CD que automatiza testes, validações e o deploy em staging e produção. Também adicionamos notificações no Slack para manter todo mundo alinhado.' },
      {type: 'paragraph', content: 'Resultado: menos erros e deploys muito mais rápidos! ⚡'},
      { type: 'link', content: '👉 Confira o projeto no meu GitHub: github.com/camilarocha/ci-cd-pipeline' }, 
    ], 
    publishedAt: new Date('2025-04-13 19:45:22'),
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Rafael Souza',
      role: 'Backend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hoje entreguei uma melhoria de performance em uma das APIs mais críticas do sistema! 🔧' },
      { type: 'paragraph', content: 'Refatorei algumas queries e criei novos índices no banco de dados, o que reduziu o tempo de resposta de 800ms para 120ms.' },
      { type: 'paragraph', content: 'O impacto foi imediato: mais eficiência, menos sobrecarga no servidor e uma experiência melhor para o usuário final. 🚀' },
      { type: 'link', content: '👉 Veja os detalhes no repositório: github.com/rafaelsouza/api-performance' },
    ], 
    publishedAt: new Date('2025-04-13 19:01:46'),
  },
];


function App() {
  
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
         {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
         }
        </main>
      </div>      
    </>
  )
}

export default App
