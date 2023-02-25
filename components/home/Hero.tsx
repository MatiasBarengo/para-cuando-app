import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/png/hero.png';
import logo from '../../public/png/logo.png';
import Button from '../atom/CategoryButton';
import Input from '../atom/Search';

const styles = {
  backgroundImage: `url('${heroImg.src}')`,
};

interface Category {
  title: string;
  id: number;
}

const categories: Array<Category> = [
  { title: 'Marcas y tiendas', id: 1 },
  { title: 'Artistas y conciertos', id: 2 },
  { title: 'Torneos', id: 3 },
];

export default function Hero() {
  return (
    <section
      style={styles}
      className="h-[488px] px-5 bg-cover bg-none bg-center flex items-center justify-center  flex-col "
    >
      <Image src={logo} alt="para cuando logo" className="mb-12" />
      <Input />
      <ul className="flex justify-between items-center w-full mt-10 max-w-[425px]">
        {categories.map((categorie) => (
          <li key={categorie.id}>
            <Link
              href={{
                pathname: '/categories/[slug]',
                query: { slug: categorie.title },
              }}
            >
              <Button></Button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
