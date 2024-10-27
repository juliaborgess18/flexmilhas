const products = [
  {
    id: 1,
    name: '10,000 Milhas Aéreas',
    href: '#',
    price: '$150',
    imageSrc: 'https://th.bing.com/th/id/OIP.qy43oPMj56xq7fGUuEIBmgHaEK?rs=1&pid=ImgDetMain',
    imageAlt: 'Vista do Cristo Redentor no Rio de Janeiro com céu azul e a cidade ao fundo.',
    description: 'Acumule 10,000 milhas para destinos nacionais e internacionais.',
    titulo: "Rio de Janeiro"
  },
  {
    id: 2,
    name: '20,000 Milhas Aéreas',
    href: '#',
    price: '$280',
    imageSrc: 'https://th.bing.com/th/id/OIP.2mt2FrCqmM-PJXwzdu0HHAHaFK?rs=1&pid=ImgDetMain',
    imageAlt: 'Vista aérea de Nova York com o Empire State Building e os arranha-céus ao pôr do sol.',
    description: 'Ideal para viagens de média distância com 20,000 milhas acumuladas.',
    titulo: "Nova York"
  },
  {
    id: 3,
    name: '30,000 Milhas Aéreas',
    href: '#',
    price: '$400',
    imageSrc: 'https://th.bing.com/th/id/R.65e4d9198aacb416e895db6d4b3f50bd?rik=2GfXuabUSEQRew&pid=ImgRaw&r=0',
    imageAlt: 'Vista da Torre Eiffel em Paris durante o pôr do sol com o Rio Sena ao fundo.',
    description: '30,000 milhas para explorar destinos internacionais como Europa e América do Norte.',
    titulo: "Paris"
  },
  {
    id: 4,
    name: '50,000 Milhas Aéreas',
    href: '#',
    price: '$650',
    imageSrc: 'https://cdn.getyourguide.com/img/location/5ffeb433e4ef2.jpeg/88.jpg',
    imageAlt: 'Vista noturna de Tóquio com seus arranha-céus iluminados e o Monte Fuji ao fundo.',
    description: 'Perfeito para viagens de longa distância, como Ásia e Oceania, com 50,000 milhas.',
    titulo: "Tokyo"
  },
];

export function Catalogo() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full h-60 overflow-hidden rounded-lg bg-gray-200">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h2 className="mt-4 font-bold">{product.titulo}</h2>
              <h3 className="text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full h-60 overflow-hidden rounded-lg bg-gray-200">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h2 className="mt-4 font-bold">{product.titulo}</h2>
              <h3 className="text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full h-60 overflow-hidden rounded-lg bg-gray-200">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h2 className="mt-4 font-bold">{product.titulo}</h2>
              <h3 className="text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
