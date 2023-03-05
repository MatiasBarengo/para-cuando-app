import Link from 'next/link';
import CategoryButton from './atom/CategoryButton';

interface Category {
  title: string;
  id: number;
}

const categories: Array<Category> = [
  { title: 'Marcas y tiendas', id: 1 },
  { title: 'Artistas y conciertos', id: 2 },
  { title: 'Torneos', id: 3 },
];

const MakeItPersonal = () => {
  const handleClick = (category: Category) => {
    console.log(`Clicked on category ${category.title}`);
  };

  return (
    <section className="w-full h-[250px] flex justify-center items-center">
      <div className="w-[70vw] h-full bg-lighter-gray">
        <h2 className="text-dark-gray text-2xl mt-[30px] ml-[60px]">
          ¡Hagámoslo más personal!
        </h2>
        <p className="text-dark-gray text-base ml-[60px] mt-[10px]">
          Selecciona tus intereses para brindarte sugerencias de acuerdo a tus
          gustos
        </p>
        <ul className="flex justify-between items-center w-full mt-10 max-w-[425px] ml-[60px]">
          {categories.map((category) => (
            <li key={category.id}>
              <CategoryButton onClick={() => handleClick(category)}>
                {category.title}
              </CategoryButton>
            </li>
          ))}
        </ul>
        <Link
          href=""
          className="text-primary absolute text-base ml-[60px] mt-[25px]"
        >
          Ver todos los intereses
        </Link>
      </div>
    </section>
  );
};

export default MakeItPersonal;
