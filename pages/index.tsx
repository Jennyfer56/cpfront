import { useEffect, useState } from "react";
import axios from "axios";
import CardProduto from "../components/CardProduto";

// Aqui é a interface com os dados utilizados
interface Produto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function Home() {
  // useState: Aqui ele armazena a lista de produtos
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProdutos(res.data.products))
      .catch(() => console.error("Erro ao carregar produtos"));
  }, []);

  return (
    <main style={{ padding: "32px" }}>
      <h1>Catálogo de Produtos</h1>
      {produtos.map((produto) => (
        <CardProduto
          key={produto.id}
          id={produto.id}
          title={produto.title}
          price={produto.price}
          thumbnail={produto.thumbnail}
        />
      ))}
    </main>
  );
}
