import '../styles/auth.scss'
import { Buttons } from '../components/Buttons'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Buttons type="submit">Criar sala</Buttons>
                    </form>
                    <p>
                        Quer entrar em um sala existente? <Link to="/">Clique Aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}