
// Página de Detalhes: Mostra detalhes de um produto a partir da rota dinâmica
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import DetalheProduto from "../../components/DetalheProduto";

// Define a interface com os campos do produto
interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  thumbnail: string;
}

export default function PaginaProduto() {
  const router = useRouter();
  const { id } = router.query;
  const [produto, setProduto] = useState<Produto | null>(null);

  // useEffect: Este código vai busca o produto da API pelo ID
  useEffect(() => {
    if (!id) return;
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduto(res.data))
      .catch(() => console.error("Erro ao carregar detalhes do produto"));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  // Aqui ele exibe o componente de detalhes com os dados carregados
  return (
    <main style={{ padding: "32px" }}>
      <DetalheProduto
        title={produto.title}
        description={produto.description}
        price={produto.price}
        category={produto.category}
        rating={produto.rating}
        thumbnail={produto.thumbnail}
      />
    </main>
  );
}
