import Head from 'next/head';
import Background from '../../components/authorized/Background';
import LoginModal from '../../components/authorized/LoginModal';

export default function Login() {
  return (
    <>
      <Head>
        <title>Log In - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <Background>
        <LoginModal />
      </Background>
    </>
  );
}
