import {useEffect, useState} from 'react'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SoftwarePage from './pages/SoftwarePage';

const ApiUrl =import.meta.env.VITE_API_URL;

export type PageSlug = 'home' | 'software';

function App() {
  const [page, setPage] = useState<PageSlug>('home');
  const [shortcuts, setShortcuts] = useState([]);
  const [loadingShortcuts, setLoadingShortcuts] = useState(true);
  const [software, setSoftware] = useState([]);
  const [loadingSoftware, setLoadingSoftare] = useState(true);

  useEffect(() => {
    setLoadingShortcuts(true);
    fetch(`${ApiUrl}/shortcuts`)
        .then(res => res.json()
        .then(data => {setShortcuts(data["hydra:member"]);}))
        .catch(error => console.log(error))
        .finally(() => setLoadingShortcuts(false));
  }, [])

  useEffect(() => {
    setLoadingSoftare(true);
    fetch(`${ApiUrl}/software`)
        .then(res => res.json()
        .then(data => {setSoftware(data["hydra:member"]);}))
        .catch(error => console.log(error))
        .finally(() => setLoadingSoftare(false));
  }, [])

  let currentPage = null;
  if (page === 'home') {
    currentPage = <HomePage shortcuts={shortcuts} loading={loadingShortcuts}/>;
  } else if (page === 'software') {
    currentPage = <SoftwarePage software={software} loading={loadingSoftware}/>;
  }

  return (
    <main>

      <Header onNavClick={p => setPage(p)}/>

      {currentPage}

    </main>
  )
}

export default App
