import { useState } from "react";
import ProdutoCard from "../Componentes/ProdutoCard";

const Home = () => {
    const produtos1 = [
        {
            nome: "Produto 1",
            descricao: "Descrição do Produto 1",
            quantidade: 10,
            imagem: "https://picsum.photos/200/300"
        },
        {
            nome: "Produto 2",
            descricao: "Descrição do Produto 2",
            quantidade: 5,
            imagem: "https://picsum.photos/200/300"
        },
        {
            nome: "Produto 3",
            descricao: "Descrição do Produto 3",
            quantidade: 20,
            imagem: "https://picsum.photos/200/300"
        }
    ];
       

    const [produtos, setProdutos] = useState(produtos1);
  
    return (
        <div className="container">
            <h2 className="nomeproduto">Produtos:</h2>
            <div className="produto-container">
                {produtos.length === 0 && <p>Carregando...</p>}
                {produtos.length > 0 && produtos.map((produto, index) => (
                    <div key={index.id}>
                       <ProdutoCard produto={produto}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;