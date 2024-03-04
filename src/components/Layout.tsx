// components/Layout.js
import React, {ReactNode} from 'react';
//import { useRouter } from 'next/router';

interface Props {
    children?: ReactNode
    // any props that come into the component
}

function Layout({ children, ...props }: Props) {
  //const router = useRouter();

  return (
    <div className="page-transition">
      {children}
    </div>
  );
}

export default Layout;