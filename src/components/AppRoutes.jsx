import { Routes, Route } from "react-router-dom" 
import { Home, AboutUs, Carpets, CarpetDetail} from '../pages'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/کلکسیون-فرش" element={<Carpets />} />
        <Route path="/درباره-ما" element={<AboutUs />} />
        <Route path="/کلکسیون-فرش/:carpetId" element={<CarpetDetail />} />
    </Routes>
  )
}
