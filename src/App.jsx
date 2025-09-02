import { useEffect, useState } from 'react';
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
  const [currentUser, setCurrentUser] = useState(null);

  // Function to switch to a different random user (for testing) - Using Official Format
  const switchUser = () => {
    if (window.currentPendoUser && demoUsers) {
      const currentIndex = demoUsers.findIndex(user => user.visitor.id === window.currentPendoUser.visitor.id);
      let newIndex = Math.floor(Math.random() * demoUsers.length);
      // Ensure we get a different user
      while (newIndex === currentIndex && demoUsers.length > 1) {
        newIndex = Math.floor(Math.random() * demoUsers.length);
      }
      const newUser = demoUsers[newIndex];
      
      if (window.pendo && window.pendo.identify) {
        // Use official identify format for user switching
        pendo.identify({
          visitor: {
            id: newUser.visitor.id,
            email: newUser.visitor.email,
            firstName: newUser.visitor.firstName,
            lastName: newUser.visitor.lastName,
          },
          account: {
            id: newUser.account.id,
            accountName: newUser.account.accountName,
            payingStatus: newUser.account.payingStatus,
          }
        });
        window.currentPendoUser = newUser;
        setCurrentUser(newUser);
        console.log('🔄 Manually switched to user:', newUser.visitor.firstName, newUser.visitor.lastName);
        
        // Trigger page load to refresh guides
        setTimeout(() => {
          if (window.pendo && window.pendo.pageLoad) {
            window.pendo.pageLoad();
          }
        }, 100);
      }
    }
  };

  // Demo users array - Using exact Pendo format
  const demoUsers = [
    {
      visitor: {
        id: 'user-001',
        email: 'sarah.chen@techcorp.com',
        firstName: 'Sarah',
        lastName: 'Chen',
      },
      account: {
        id: 'tech-corp-001',
        accountName: 'TechCorp Industries',
        payingStatus: 'Premium',
      }
    },
    {
      visitor: {
        id: 'user-002',
        email: 'mike.rodriguez@startup.io',
        firstName: 'Mike',
        lastName: 'Rodriguez',
      },
      account: {
        id: 'startup-002',
        accountName: 'Innovation Startup',
        payingStatus: 'Free',
      }
    },
    {
      visitor: {
        id: 'user-003',
        email: 'emily.johnson@marketing.agency',
        firstName: 'Emily',
        lastName: 'Johnson',
      },
      account: {
        id: 'marketing-003',
        accountName: 'Creative Marketing Agency',
        payingStatus: 'Premium',
      }
    },
    {
      visitor: {
        id: 'user-004',
        email: 'david.kim@finance.com',
        firstName: 'David',
        lastName: 'Kim',
      },
      account: {
        id: 'finance-004',
        accountName: 'Global Finance Corp',
        payingStatus: 'Trial',
      }
    },
    {
      visitor: {
        id: 'user-005',
        email: 'jessica.brown@healthcare.org',
        firstName: 'Jessica',
        lastName: 'Brown',
      },
      account: {
        id: 'healthcare-005',
        accountName: 'City Healthcare System',
        payingStatus: 'Premium',
      }
    },
    {
      visitor: {
        id: 'user-006',
        email: 'alex.thompson@edu.university',
        firstName: 'Alex',
        lastName: 'Thompson',
      },
      account: {
        id: 'university-006',
        accountName: 'State University',
        payingStatus: 'Student',
      }
    },
    {
      visitor: {
        id: 'user-007',
        email: 'maria.garcia@retail.store',
        firstName: 'Maria',
        lastName: 'Garcia',
      },
      account: {
        id: 'retail-007',
        accountName: 'Fashion Retail Chain',
        payingStatus: 'Basic',
      }
    },
    {
      visitor: {
        id: 'user-008',
        email: 'james.wilson@consulting.biz',
        firstName: 'James',
        lastName: 'Wilson',
      },
      account: {
        id: 'consulting-008',
        accountName: 'Strategic Consulting Group',
        payingStatus: 'Enterprise',
      }
    },
    {
      visitor: {
        id: 'user-009',
        email: 'lisa.davis@nonprofit.org',
        firstName: 'Lisa',
        lastName: 'Davis',
      },
      account: {
        id: 'nonprofit-009',
        accountName: 'Community Foundation',
        payingStatus: 'Non-Profit',
      }
    },
    {
      visitor: {
        id: 'user-010',
        email: 'robert.lee@manufacturing.com',
        firstName: 'Robert',
        lastName: 'Lee',
      },
      account: {
        id: 'manufacturing-010',
        accountName: 'Industrial Manufacturing Ltd',
        payingStatus: 'Premium',
      }
    }
  ];

  useEffect(() => {

    // Function to wait for Pendo to be ready
    const waitForPendo = (callback, maxAttempts = 50) => {
      let attempts = 0;
      const checkPendo = () => {
        if (window.pendo && window.pendo.initialize) {
          callback();
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(checkPendo, 100);
        } else {
          console.error('Pendo failed to load after maximum attempts');
        }
      };
      checkPendo();
    };

    // Initialize Pendo with proper user switching for SPA - Using Official Format
    const initializePendoWithUser = () => {
      // Randomly select a user for this session
      const randomUser = demoUsers[Math.floor(Math.random() * demoUsers.length)];
      
      try {
        // For SPAs, we need to handle user switching properly
        if (window.pendo._isInitialized) {
          // If already initialized, use identify to switch users
          window.pendo.identify(randomUser);
          console.log('🔄 Pendo user switched to:', randomUser.visitor.firstName, randomUser.visitor.lastName);
        } else {
          // First time initialization - using exact official format
          pendo.initialize({
            visitor: {
              id: randomUser.visitor.id,
              email: randomUser.visitor.email,
              firstName: randomUser.visitor.firstName,
              lastName: randomUser.visitor.lastName,
            },
            account: {
              id: randomUser.account.id,
              accountName: randomUser.account.accountName,
              payingStatus: randomUser.account.payingStatus,
            }
          });
          console.log('🚀 Pendo initialized with user:', randomUser.visitor.firstName, randomUser.visitor.lastName);
        }
        
        // Store current user for debugging
        window.currentPendoUser = randomUser;
        setCurrentUser(randomUser);
        
        // Track page load for the new user
        setTimeout(() => {
          if (window.pendo && window.pendo.pageLoad) {
            window.pendo.pageLoad();
          }
        }, 500);
        
      } catch (error) {
        console.error('Error initializing Pendo:', error);
      }
    };

    // Wait for Pendo script to load, then initialize
    waitForPendo(initializePendoWithUser);
    
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <SubscriptionBanner /> {/* Embedded banner here */}
        
        {/* User Switcher for Demo - Only visible in development */}
        {process.env.NODE_ENV === 'development' && currentUser && (
          <div className="bg-yellow-100 border-b border-yellow-200 px-4 py-2 text-sm text-yellow-800">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <span>
                🧪 <strong>Demo Mode:</strong> Current user: {currentUser.visitor.firstName} {currentUser.visitor.lastName} 
                ({currentUser.account.payingStatus}) - {currentUser.visitor.role}
              </span>
              <button
                onClick={switchUser}
                className="bg-yellow-200 hover:bg-yellow-300 px-3 py-1 rounded text-yellow-800 font-medium transition-colors"
              >
                Switch User
              </button>
            </div>
          </div>
        )}
        
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