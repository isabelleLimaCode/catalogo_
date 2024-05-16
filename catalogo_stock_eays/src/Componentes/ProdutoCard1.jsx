import { Link } from "react-router-dom"


const ProdutoCard = ({produto,showlink = true}) => {
  return (
    <div className="produto-card">
        <img src={produto.imagem} alt={produto.nome}/>
        <h2>{produto.nome}</h2>
        {showlink && <Link  to={`produto/${produto.id}`}>Detalhes</Link>}
    </div>
  )
}

export default ProdutoCard