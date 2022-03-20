import cn from 'classnames'
import { Sidebar } from 'src/components/Sidebar'
import { Navigation } from 'src/components/Navigation'
import { AppStateProvider } from '../hooks/useAppState'
import * as Tooltip from '@radix-ui/react-tooltip'

import '../styles.css'

export default function App({ Component, pageProps }: any) {
  return (
    <div className={cn('flex h-screen w-screen overflow-hidden', 'bg-neutral-900 text-neutral-50')}>
      <Tooltip.Provider>
        <AppStateProvider>
          <Navigation />

          <main className="flex-1 flex">
            <Component {...pageProps} />
          </main>

          <Sidebar />
        </AppStateProvider>
      </Tooltip.Provider>
    </div>
  )
}
