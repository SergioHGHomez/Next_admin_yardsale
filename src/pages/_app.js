import { ProviderAuth } from '@hooks/useAuth';
import '@styles/tailwind.css';
import MainLaout from '@layout/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLaout>
          <Component {...pageProps} />
        </MainLaout>
      </ProviderAuth>
    </>
  );
}

export default MyApp;
