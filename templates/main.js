import { Header, Footer } from './index';

const Main = (props) => {
  return (
    <>
      {props.meta}
      <div className="w-full h-full min-h-screen flex flex-col justify-between">
        <header>
          <nav>
            <Header />
          </nav>
        </header>
        <main>{props.children}</main>
        <footer className="flex-1">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Main;
