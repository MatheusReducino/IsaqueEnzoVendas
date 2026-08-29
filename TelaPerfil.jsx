import './TelaPerfil.css'
import { useNavigate } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md"
import { FaHouse, FaStar, FaBox, FaHeart } from "react-icons/fa6"

function TelaPerfil() {
    const navigate = useNavigate()

    return (
        <main className="perfil-page">
            <div className="perfil-header">
                <MdAccountCircle className="perfil-foto" />
                <div>
                    <h1>Papa Francisco</h1>
                    <p>Vendedor desde 2026</p>
                    <div className="perfil-estrelas">★★★★★ <span>5,0</span></div>
                </div>
            </div>

            <div className="perfil-bio">
                <h2>Sobre mim</h2>
                <p>Olá! Sou vendedor na Isaque&Enzo Vendas.</p>
                <textarea placeholder="Escreva uma descrição sobre você..."></textarea>
            </div>

            <div className="perfil-opcoes">
                <div><FaStar /><h3>Avaliações recebidas</h3><p>24 avaliações</p></div>
                <div><FaBox /><h3>Histórico de vendas</h3><p>18 produtos vendidos</p></div>
                <div><FaBox /><h3>Histórico de compras</h3><p>7 compras realizadas</p></div>
                <div><FaHeart /><h3>Favoritos</h3><p>12 produtos</p></div>
            </div>

            <button className="voltar-perfil" onClick={() => navigate('/')}>
                <FaHouse /> Voltar para a página principal
            </button>
        </main>
    )
}

export default TelaPerfil