import './TelaPrincipal.css'
import { useNavigate } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md"
import { BsChatSquareText } from "react-icons/bs"
import { FaHouse } from "react-icons/fa6"
import { LuTextSearch, LuSearch } from "react-icons/lu"

function TelaPrincipal() {
    const navigate = useNavigate()

    const produtos = [
        ["https://i.pinimg.com/1200x/f2/5c/69/f25c692b74c62812a86331f15dc303aa.jpg", "Monza Velho Fodido", "Oi meu filho como vc ta", "R$ 10", "Papa Francisco"],
        ["https://i.pinimg.com/1200x/3b/d3/ee/3bd3eef43ebb6f3d471df4869e039bea.jpg", "Kawasaki Ninja", "L", "R$ 2", "Bernardo"],
        ["https://i.pinimg.com/736x/79/6c/43/796c433ea8e79396cbcba3de7ab8809b.jpg", "Wilton Pereira Sampaio", "Vendas apenas para Palmeiras e Flamengo", "R$ 3000000", "CBF"],
        ["https://i.metroimg.com/YeZ-0XaSs6MUQveS6paRtaaC2PgJJ3hlxz_HeEn7OY4/w:600/q:85/f:webp/plain/https://images.metroimg.com/2025/10/03182625/pinga06.jpg", "Colecao de caxaxa", "BIRIRIRIIRIR", "R$ 80,00", "Abacatudo 42"],
        ["https://i.pinimg.com/736x/4c/25/17/4c25170fd45aa431a6839f5bf7f0225f.jpg", "Xinforimpola", "a", "R$ 300,00", "Bolsonaro"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwRMDqf4kWCSpRJGz4WSgZSYSwPk9ra8uH07Mxia3Ow&s=10", "Messão ou Platessi", "Messi é tudo que Platão tentou ser", "R$ 67", "gggggs"],
        ["https://i.pinimg.com/736x/e5/c4/41/e5c441a03839523d3171d243f8896a31.jpg", "Carburador de fusca 1974", "Limpo", "R$ 250", "AAA"],
        ["https://i.pinimg.com/736x/74/47/fd/7447fd28fb60e9f25553e5b232f15f0b.jpg", "Gabriel desgracadao", "Achado em cativeiro", "R$ 1", "bbbbbbb"]
    ]

    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="logo">Isaque&Enzo Vendas</div>
                    <div className="search">
                        <input type="text" placeholder="Pesquisar..." />
                        <button><LuSearch /></button>
                    </div>
                    <div className="filters">
                        <button><LuTextSearch /> Filtros</button>
                        <button className="cadastro" onClick={() => navigate('/cadastro')}>Cadastro</button>
                    </div>
                </nav>
            </header>

            <main className="produtos">
                {produtos.map((produto, index) => (
                    <div className="produto" key={index} onClick={() => navigate('/produto')}>
                        <div className="produto-imagem">
                            <img src={produto[0]} />
                        </div>
                        <h2>{produto[1]}</h2>
                        <p>{produto[2]}</p>
                        <strong>{produto[3]}</strong>
                        <span>Vendedor: {produto[4]}</span>
                    </div>
                ))}
            </main>

            <nav className="menu-lateral">
                <ul>
                    <li><a onClick={() => navigate('/')}><FaHouse className="icon" /></a></li>
                    <li><a onClick={() => navigate('/perfil')}><MdAccountCircle className="icon" /></a></li>
                    <li><a onClick={() => navigate('/chat')}><BsChatSquareText className="icon" /></a></li>
                </ul>
            </nav>
        </>
    )
}

export default TelaPrincipal