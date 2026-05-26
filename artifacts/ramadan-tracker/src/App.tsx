import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
import SiswaPage from "./pages/SiswaPage";
import GuruPage from "./pages/GuruPage";
import PengumumanPage from "./pages/PengumumanPage";
import GaleriPage from "./pages/GaleriPage";
import KontakPage from "./pages/KontakPage";
import NotFound from "./pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/profil" component={ProfilPage} />
      <Route path="/siswa" component={SiswaPage} />
      <Route path="/guru" component={GuruPage} />
      <Route path="/pengumuman" component={PengumumanPage} />
      <Route path="/galeri" component={GaleriPage} />
      <Route path="/kontak" component={KontakPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
