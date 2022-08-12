import { FC } from 'react';
import { AppProps } from 'next/app';

import WithTheme from 'src/client/theme/WithTheme';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <WithTheme>
      <Component {...pageProps} />
    </WithTheme>
  );
};

export default App;
