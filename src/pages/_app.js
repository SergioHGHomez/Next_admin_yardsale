import '@styles/tailwind.css';
import MainLaout from '@layout/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLaout>
        <Component {...pageProps} />
      </MainLaout>
    </>
  );
}

export default MyApp;
