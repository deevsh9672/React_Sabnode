import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importing pages and components
import AutomateSales from "./pages/whatsappwithcus";
import Biolink66 from './pages/Sabnode Bio Links-66';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './components/Home';
import InstagramAutomation from './pages/instagram-automation';
import SmsTextWithCustomers from './pages/sms-text-with-customers';
import Socialproofy from './pages/Socialproofy';
import Sabnode_Sitespy from './pages/sabnode_sitespy';
import Subscription from './pages/Subscription';
import Marketing from './pages/Marketing';
import Chatbot from './pages/Chatbot';
import MarketingMaster from './pages/MarketingMaster';
import ScrollToTop from './components/ScrollToTop'; // Import your ScrollToTop component
import BioLink from './pages/BioLink';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      {/* <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/header">Header</Link></li>
          <li><Link to="/whatsapp-connect-with-customers">WhatsApp Connect</Link></li>
          <li><Link to="/sabnode-bio-link">Bio Link</Link></li>
          <li><Link to="/sabnode-subscription-billing">Subscription</Link></li>
          <li><Link to="/sabnode-bio-links-66">Bio Links 66</Link></li>
          <li><Link to="/marketing-master">Marketing Master</Link></li>
          <li><Link to="/messenger-chatbot">Chatbot</Link></li>
          <li><Link to="/sms-text-with-customers">SMS Text</Link></li>
          <li><Link to="/instagram-automation">Instagram Automation</Link></li>
          <li><Link to="/sabnode-social-proofy">Social Proofy</Link></li>
          <li><Link to="/sabnode-sitespy">SiteSpy</Link></li>
          <li><Link to="/footer">Footer</Link></li>
        </ul>
      </nav> */}

      {/* Routes */}
      <ScrollToTop />
      <Routes>
        {/* General Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        
        {/* Ajay's Pages */}
        <Route path="/whatsapp-connect-with-customers" element={<AutomateSales />} />

        {/* Aashish's Pages */}
        <Route path="/sabnode-bio-link" element={<BioLink />} />

        {/* Chandan's Pages */}
        <Route path="/sabnode-subscription-billing" element={<Subscription />} />

        {/* Devesh's Pages */}
        <Route path="/sabnode-bio-links-66" element={<Biolink66 />} />

        {/* Harsh's Pages */}
        <Route path="/marketing-master" element={<Marketing />} />
        <Route path="/messenger-chatbot" element={<Chatbot />} />

        {/* Jayant's Pages */}
        <Route path="/sms-text-with-customers" element={<SmsTextWithCustomers />} />
        <Route path="/instagram-automation" element={<InstagramAutomation />} />

        {/* Narendra's Pages */}
        <Route path="/sabnode-social-proofy" element={<Socialproofy />} />

        {/* Shivam's Pages */}
        <Route path="/1" element={<MarketingMaster />} />

        {/* Tirlok's Pages */}
        <Route path="/sabnode-sitespy" element={<Sabnode_Sitespy />} />

        {/* Footer */}
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
