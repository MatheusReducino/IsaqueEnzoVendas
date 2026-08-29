import './TelaProduto.css'
import { useNavigate } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md"
import { BsChatSquareText } from "react-icons/bs"
import { FaHouse, FaHeart, FaArrowLeft } from "react-icons/fa6"

function TelaProduto() {
    const navigate = useNavigate()

    return (
        <>
            <header>
                <nav className="navbar-produto">
                    <div className="logo-produto">Isaque&Enzo Vendas</div>
                </nav>
            </header>

            <main className="produto-detalhes">
                <button className="voltar" onClick={() => navigate('/')}>
                    <FaArrowLeft /> Voltar
                </button>

                <div className="produto-container">
                    <div className="produto-foto">
                        <img src="https://i.pinimg.com/1200x/f2/5c/69/f25c692b74c62812a86331f15dc303aa.jpg" />
                    </div>

                    <div className="produto-info">
                        <h1>Monza Velho Fodido</h1>
                        <strong className="preco">R$ 10,00</strong>

                        <div className="avaliacao">★ ★ ★ ★ ★ <span>5,0</span></div>

                        <h3>Descrição</h3>
                        <p>Oi meu filho como vc ta. Produto em ótimo estado, pronto para venda.</p>

                        <div className="vendedor">
                            <MdAccountCircle />
                            <div>
                                <strong>Papa Francisco</strong>
                                <span>Vendedor • ★ 5,0</span>
                            </div>
                        </div>

                        <div className="acoes-produto">
                            <button onClick={() => navigate('/chat')}>Entrar em contato</button>
                            <button className="favorito"><FaHeart /> Favoritar</button>
                        </div>
                    </div>
                </div>
            </main>

            <nav className="menu-lateral-produto">
                <a onClick={() => navigate('/')}><FaHouse /></a>
                <a onClick={() => navigate('/perfil')}><MdAccountCircle /></a>
                <a onClick={() => navigate('/chat')}><BsChatSquareText /></a>
            </nav>
        </>
    )
}

export default TelaProduto