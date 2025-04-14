import Link from "next/link";

interface CardProdutoProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function CardProduto({ id, title, price, thumbnail }: CardProdutoProps) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '6px',
      textAlign: 'center'
    }}>
      <img src={thumbnail} alt={title} width={200} />
      <h2>{title}</h2>
      <p>Preço: ${price}</p>
      <Link href={`/produto/${id}`}>Ver Detalhes</Link>
    </div>
  );
}
