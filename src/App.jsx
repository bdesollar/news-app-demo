import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';

// Simple Subscription Banner Component for Pendo Demo
const SubscriptionBanner = () => {
  const handleClaimOffer = () => {
    if (window.pendo) {
      window.pendo.track('Banner Clicked', { 
        action: 'Claim Offer',
        banner_type: 'embedded_guide'
      });
    }
    alert('Thanks for your interest! In a real app, this would redirect to the subscription page.');
  };

  const handleClose = () => {
    if (window.pendo) {
      window.pendo.track('Banner Clicked', { 
        action: 'Banner Dismissed',
        banner_type: 'embedded_guide'
      });
    }
    const banner = document.getElementById('pendo-banner-top');
    if (banner) {
      banner.style.display = 'none';
    }
  };

  return (
    <div
      id="pendo-banner-top"
      className="w-full bg-gradient-to-r from-[#FF4876] to-[#FF6B8E] text-white py-4 px-6 shadow-md"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex-1">
          <p className="text-lg font-semibold">Subscribe now for 50% off!</p>
          <p className="text-sm opacity-90">Get unlimited access to premium content</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={handleClaimOffer}
            className="bg-white text-[#FF4876] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Claim Offer
          </button>
          
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/category/:catName" element={<CategoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    // Random user profiles for Pendo demo variety
    const demoUsers = [
      {
        visitor: {
          id: 'user-001',
          email: 'sarah.chen@techcorp.com',
          firstName: 'Sarah',
          lastName: 'Chen',
          role: 'Product Manager',
          industry: 'Technology',
          experience: 'Advanced'
        },
        account: {
          id: 'tech-corp-001',
          accountName: 'TechCorp Industries',
          payingStatus: 'Premium',
          employeeCount: '1000+'
        }
      },
      {
        visitor: {
          id: 'user-002',
          email: 'mike.rodriguez@startup.io',
          firstName: 'Mike',
          lastName: 'Rodriguez',
          role: 'Founder',
          industry: 'Startup',
          experience: 'Expert'
        },
        account: {
          id: 'startup-002',
          accountName: 'Innovation Startup',
          payingStatus: 'Free',
          employeeCount: '1-10'
        }
      },
      {
        visitor: {
          id: 'user-003',
          email: 'emily.johnson@marketing.agency',
          firstName: 'Emily',
          lastName: 'Johnson',
          role: 'Marketing Director',
          industry: 'Marketing',
          experience: 'Intermediate'
        },
        account: {
          id: 'marketing-003',
          accountName: 'Creative Marketing Agency',
          payingStatus: 'Premium',
          employeeCount: '50-100'
        }
      },
      {
        visitor: {
          id: 'user-004',
          email: 'david.kim@finance.com',
          firstName: 'David',
          lastName: 'Kim',
          role: 'Financial Analyst',
          industry: 'Finance',
          experience: 'Beginner'
        },
        account: {
          id: 'finance-004',
          accountName: 'Global Finance Corp',
          payingStatus: 'Trial',
          employeeCount: '500-1000'
        }
      },
      {
        visitor: {
          id: 'user-005',
          email: 'jessica.brown@healthcare.org',
          firstName: 'Jessica',
          lastName: 'Brown',
          role: 'Operations Manager',
          industry: 'Healthcare',
          experience: 'Advanced'
        },
        account: {
          id: 'healthcare-005',
          accountName: 'City Healthcare System',
          payingStatus: 'Premium',
          employeeCount: '1000+'
        }
      },
      {
        visitor: {
          id: 'user-006',
          email: 'alex.thompson@edu.university',
          firstName: 'Alex',
          lastName: 'Thompson',
          role: 'Student',
          industry: 'Education',
          experience: 'Beginner'
        },
        account: {
          id: 'university-006',
          accountName: 'State University',
          payingStatus: 'Student',
          employeeCount: '100-500'
        }
      },
      {
        visitor: {
          id: 'user-007',
          email: 'maria.garcia@retail.store',
          firstName: 'Maria',
          lastName: 'Garcia',
          role: 'Store Manager',
          industry: 'Retail',
          experience: 'Intermediate'
        },
        account: {
          id: 'retail-007',
          accountName: 'Fashion Retail Chain',
          payingStatus: 'Basic',
          employeeCount: '100-500'
        }
      },
      {
        visitor: {
          id: 'user-008',
          email: 'james.wilson@consulting.biz',
          firstName: 'James',
          lastName: 'Wilson',
          role: 'Senior Consultant',
          industry: 'Consulting',
          experience: 'Expert'
        },
        account: {
          id: 'consulting-008',
          accountName: 'Strategic Consulting Group',
          payingStatus: 'Enterprise',
          employeeCount: '500-1000'
        }
      },
      {
        visitor: {
          id: 'user-009',
          email: 'lisa.davis@nonprofit.org',
          firstName: 'Lisa',
          lastName: 'Davis',
          role: 'Program Director',
          industry: 'Non-Profit',
          experience: 'Advanced'
        },
        account: {
          id: 'nonprofit-009',
          accountName: 'Community Foundation',
          payingStatus: 'Non-Profit',
          employeeCount: '10-50'
        }
      },
      {
        visitor: {
          id: 'user-010',
          email: 'robert.lee@manufacturing.com',
          firstName: 'Robert',
          lastName: 'Lee',
          role: 'Operations Director',
          industry: 'Manufacturing',
          experience: 'Expert'
        },
        account: {
          id: 'manufacturing-010',
          accountName: 'Industrial Manufacturing Ltd',
          payingStatus: 'Premium',
          employeeCount: '1000+'
        }
      }
    ];

    // Randomly select a user for this session
    const randomUser = demoUsers[Math.floor(Math.random() * demoUsers.length)];

    if (window.pendo) {
      window.pendo.initialize(randomUser);
      
      // Track which user was selected for debugging
      console.log('Pendo initialized with user:', randomUser.visitor.firstName, randomUser.visitor.lastName);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <SubscriptionBanner /> {/* Embedded banner here */}
        <Nav />
        <main className="flex-grow container mx-auto px-4 py-8 bg-gray-100">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;