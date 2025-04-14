// Componente: DetalheProduto, Ele vai mostrar os dados completos do produtos do catalogo
interface DetalheProdutoProps {
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  thumbnail: string;
}

export default function DetalheProduto({
  title,
  description,
  price,
  category,
  rating,
  thumbnail
}: DetalheProdutoProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={thumbnail} alt={title} width={250} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p><strong>Preço:</strong> ${price}</p>
      <p><strong>Categoria:</strong> {category}</p>
      <p><strong>Avaliação:</strong> {rating} / 5</p>
    </div>
  );
}
