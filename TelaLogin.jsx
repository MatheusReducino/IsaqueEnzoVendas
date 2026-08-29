import './TelaLogin.css'
import { useNavigate } from 'react-router-dom'

function TelaLogin() {
    const navigate = useNavigate()

    return (
        <main className="login-page">
            <div className="login-card">
                <h1>Isaque&Enzo Vendas</h1>
                <h2>Entrar</h2>

                <input type="text" placeholder="CPF ou CNPJ" />
                <input type="password" placeholder="Senha" />

                <button onClick={() => navigate('/')}>Entrar</button>

                <p>Não possui uma conta?</p>
                <a onClick={() => navigate('/cadastro')}>Clique aqui para se cadastrar</a>
            </div>
        </main>
    )
}

export default TelaLogin