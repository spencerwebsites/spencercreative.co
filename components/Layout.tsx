import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

import Footer from './Footer'
import Header from './Header'
import MetaHead from './MetaHead'

type LayoutContextProps = {
  absoluteHeader: boolean
  setAbsoluteHeader: Dispatch<SetStateAction<boolean>>
}

const LayoutContext = createContext<LayoutContextProps>({
  absoluteHeader: true,
  setAbsoluteHeader: () => {},
})

export default function Layout({ children }: {children: React.ReactNode}) {
  const [absoluteHeader, setAbsoluteHeader] = useState(true)

  const value = {
    absoluteHeader,
    setAbsoluteHeader,
  }

  return (
    <LayoutContext.Provider value={value}>
      <MetaHead />
      <Header />
      <main className="flex-1 px-wrap py-12 text-lg">
        {children}
      </main>
      <Footer />
    </LayoutContext.Provider>
  )
}

export const useLayout = () => {
  const context = useContext(LayoutContext)

  if (!context) {
    throw Error('`useLayout` can only be used inside a `Layout` component')
  }

  return context
}
