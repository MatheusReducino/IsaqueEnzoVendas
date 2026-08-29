import './TelaChat.css'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaPaperclip, FaPaperPlane } from "react-icons/fa6"

function TelaChat() {
    const navigate = useNavigate()

    return (
        <main className="chat-page">
            <div className="chat">
                <header className="chat-header">
                    <button onClick={() => navigate('/')}><FaArrowLeft /></button>
                    <div>
                        <strong>Papa Francisco</strong>
                        <span>Vendedor</span>
                    </div>
                </header>

                <section className="mensagens">
                    <div className="mensagem recebida">
                        <strong>Papa Francisco</strong>
                        <p>Olá! Ainda tem interesse no produto?</p>
                        <small>20:15</small>
                    </div>

                    <div className="mensagem enviada">
                        <strong>Você</strong>
                        <p>Tenho sim! Ele ainda está disponível?</p>
                        <small>20:17</small>
                    </div>

                    <div className="mensagem recebida">
                        <strong>Papa Francisco</strong>
                        <p>Sim, está disponível!</p>
                        <small>20:18</small>
                    </div>
                </section>

                <footer className="chat-input">
                    <button><FaPaperclip /></button>
                    <input type="text" placeholder="Digite uma mensagem..." />
                    <button><FaPaperPlane /></button>
                </footer>
            </div>
        </main>
    )
}

export default TelaChat