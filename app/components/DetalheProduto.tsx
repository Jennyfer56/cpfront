import React from 'react'

interface DetalheProdutoProps {
    produto: {
        id: number
        title: string
        description: string
        price: number
        category: string
        thumbnail: string
        rating: number
    }
}

const DetalheProduto: React.FC<DetalheProdutoProps> = ({ produto }) => {
    return (
        <div>
            <img src={produto.thumbnail} alt={produto.title} width={300} />
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <p>Categoria: {produto.category}</p>
            <p>Preço: ${produto.price}</p>
            <p>Avaliação: {produto.rating} estrelas</p>
        </div>
    )
}

export default DetalheProduto
