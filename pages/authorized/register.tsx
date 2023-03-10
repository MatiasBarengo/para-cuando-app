import Head from 'next/head';
import Background from '../../components/authorized/Background';
import RegisterModal from '../../components/authorized/RegisterModal';

export default function register() {
  return (
    <>
      <Head>
        <title>Sign Up - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>

      <Background>
        <RegisterModal />
      </Background>
    </>
  );
}
