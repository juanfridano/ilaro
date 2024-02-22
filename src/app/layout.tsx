import { ReactNode } from 'react';
import { FC } from 'react';
import Nav from '@components/Nav';
import '@styles/global.css'

export const metadata = {
  title: 'Ilaro',
  description: 'Developer tools and news'
}

interface MyProps {
  children?: ReactNode;
}

const RootLayout: FC<MyProps> = (props) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>
        <main className='app'>
          <Nav></Nav>
          {props.children}
        </main>
      </body>

    </html>
  )
}

export default RootLayout