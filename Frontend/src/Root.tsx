import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import ThemeProvider from '@/theme/Provider';

import { AuthProvider } from './store/context/auth';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RecoilRoot>
              <HelmetProvider>
                <ThemeProvider>
                  <App />
                </ThemeProvider>
              </HelmetProvider>
            </RecoilRoot>
          </QueryClientProvider>
        </AuthProvider>
      </BrowserRouter>
    </StrictMode>,
  );
}

export default render;
