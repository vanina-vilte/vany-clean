import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Inicio from './pages/Inicio'
import Nosotros from './components/Nosotros'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'
import { AuthProvider } from './admin/AuthContext'
import RequireAuth from './admin/RequireAuth'
import AdminLogin from './admin/AdminLogin'
import AdminLayout from './admin/AdminLayout'
import AdminConsultas from './admin/AdminConsultas'
import AdminUsuarios from './admin/AdminUsuarios'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<RequireAuth />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="consultas" replace />} />
              <Route path="consultas" element={<AdminConsultas />} />
              <Route path="usuarios" element={<AdminUsuarios />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
