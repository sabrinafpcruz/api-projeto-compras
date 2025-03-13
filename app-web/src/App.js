import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
            .then(response => {
                setProdutos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar os produtos:", error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Lista de Produtos</h1>
            {produtos.length > 0 ? (
                <ul className="produto-lista">
                    {produtos.map((produto) => (
                        <li key={produto.id} className="produto-item">
                            <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
                            <p>{produto.nome}<br></br>R${produto.preco}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="loading">Carregando produtos...</p>
            )}
        </div>
    );
}

export default App;
