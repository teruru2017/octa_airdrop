import Header from './Header5';
import Footer from './Footer';
import Head from 'next/head';



const Layout = ( {children} ) => {
  return (
  
    <main className=' d-flex flex-column min-vh-100 '>
    
      <Head>
        <title>OCTA</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Header />
       
      
      <div className="content">
       
       {children}
        
      </div>
      
      <Footer />
    
    </main>
    
    
  );
};

export default Layout;
