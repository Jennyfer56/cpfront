import Link from 'next/link'; // Importando o Link do Next.js
import React from 'react'
import styles from '../styles/CardProduto.module.css'

interface ProdutoProps {
    id: number
    title: string
    price: number
    thumbnail: string
}

const CardProduto: React.FC<ProdutoProps> = ({ id, title, price, thumbnail }) => {
    return (
        <div className={styles.card}>
            <Link href={`/produto/${id}`}>  {/* Link para a página de detalhes */}
                <img src={thumbnail} alt={title} width={200} />
                <h2>{title}</h2>
                <p>Preço: ${price}</p>
            </Link>
        </div>
    )
}

export default CardProduto
