import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DetalheProduto from '../../components/DetalheProduto'
import api from '../../services/api'

interface Produto {
    id: number
    title: string
    description: string
    price: number
    category: string
    thumbnail: string
    rating: number
}

export default function PaginaDetalhes() {
    const router = useRouter()
    const { id } = router.query  // Pega o id da URL
    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        // Certifique-se de que o id está definido antes de fazer a requisição
        if (id) {
            api.get(`/products/${id}`)
                .then(res => setProduto(res.data))
                .catch(err => console.error('Erro ao carregar detalhes do panda de pelúcia', err))
        }
    }, [id]) // O efeito só será chamado quando o id mudar

    return (
        <div style={{ padding: '20px' }}>
            <h2>Detalhes do Panda de Pelúcia</h2>
            {produto ? <DetalheProduto produto={produto} /> : <p>Carregando...</p>}
        </div>
    )
}
