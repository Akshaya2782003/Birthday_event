import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy-loaded components
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Footer = lazy(() => import('./components/Footer'));
const SideBar = lazy(() => import('./components/SideBar'));
const HomePage = lazy(() => import('./pages/Homepage'));
const MultiUserPage = lazy(() => import('./pages/MultiUser/MultiUserPage'));
const Slides = lazy(() => import('./components/Slide'));
const NavBar = lazy(() => import('./components/NavBar'));
const AdminDetailPage = lazy(() => import('./pages/AdminDetailPage'));
const NavTabs = lazy(() => import('./components/NavTabs'));
const PackagePage = lazy(() => import('./pages/PackagePage'));
const ProfilePage = lazy(() => import('./pages/Profile/ProfilePage'));
const ItemInfoPage = lazy(() => import('./pages/Item/ItemInfoPage'));
const Search = lazy(() => import('./components/Search'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/sidebar' element={<SideBar />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/user' element={<MultiUserPage />} />
          <Route path='/slides' element={<Slides />} />
          <Route path='/navbar' element={<NavBar />} />
          <Route path='/admin' element={<AdminDetailPage />} />
          <Route path='/service' element={<ServicesPage />} />
          <Route exact path='/nav' element={<NavTabs />} />
          <Route exact path='/package' element={<PackagePage />} />
          <Route exact path='/profile' element={<ProfilePage />} />
          <Route exact path='/item' element={<ItemInfoPage />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
