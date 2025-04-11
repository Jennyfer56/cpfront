import { useEffect, useState } from 'react'
import CardProduto from '../components/CardProduto'
import api from '../services/api'

interface Produto {
    id: number
    title: string
    price: number
    thumbnail: string
}

export default function Home() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    // Carregando os produtos da API
    useEffect(() => {
        api.get('/products')
            .then(response => setProdutos(response.data.products))
            .catch(error => console.error('Erro ao buscar pandas de pelúcia', error))
    }, [])

    return (
        <div style={{ padding: '20px' }}>
            <h2>Catálogo de Pandas de Pelúcia</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {produtos.map(produto => (
                    <CardProduto
                        key={produto.id}
                        id={produto.id}
                        title={produto.title}
                        price={produto.price}
                        thumbnail={produto.thumbnail}
                    />
                ))}
            </div>
        </div>
    )
}
