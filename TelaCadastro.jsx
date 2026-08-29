import './TelaCadastro.css'
import { useNavigate } from 'react-router-dom'

function TelaCadastro() {
    const navigate = useNavigate()

    return (
        <main className="cadastro-page">
            <div className="cadastro-card">
                <h1>Isaque&Enzo Vendas</h1>
                <h2>Criar conta</h2>

                <input type="text" placeholder="Nome completo" />
                <input type="text" placeholder="CPF ou CNPJ" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirmar senha" />

                <button onClick={() => navigate('/login')}>Cadastrar</button>

                <p>Já possui uma conta?</p>
                <a onClick={() => navigate('/login')}>Clique aqui para fazer login</a>
            </div>
        </main>
    )
}

export default TelaCadastro