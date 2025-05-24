"use client";
import React from 'react';
import { 
  Home, 
  CreditCard, 
  Wrench, 
  FileText, 
  Users, 
  LogOut 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PHPPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Image src="/strata-logo.png" alt="StrataSphere Logo" width={40} height={40} className="rounded" />
              <h1 className="text-xl font-bold text-gray-900">StrataSphere</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Admin</span>
              <button className="flex items-center space-x-1 bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white text-sm">
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-12">
            <Link href="/dashboard" className="flex items-center px-4 h-full hover:bg-gray-700">
              <Home size={16} className="mr-2" />
              <span>Dashboard</span>
            </Link>
            <Link href="/financial" className="flex items-center px-4 h-full hover:bg-gray-700">
              <CreditCard size={16} className="mr-2" />
              <span>Financials</span>
            </Link>
            <Link href="/maintenance" className="flex items-center px-4 h-full hover:bg-gray-700">
              <Wrench size={16} className="mr-2" />
              <span>Maintenance</span>
            </Link>
            <Link href="/documents" className="flex items-center px-4 h-full hover:bg-gray-700">
              <FileText size={16} className="mr-2" />
              <span>Documents</span>
            </Link>
            <Link href="/community" className="flex items-center px-4 h-full hover:bg-gray-700">
              <Users size={16} className="mr-2" />
              <span>Community</span>
            </Link>
            <Link href="/php-demo" className="flex items-center px-4 h-full bg-gray-900">
              <span>PHP Demo</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">PHP Integration</h2>
          
          <div className="p-6 bg-blue-50 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">About This Page</h3>
            <p className="text-blue-700 mb-4">
              This page demonstrates the integration of PHP with our Next.js application on Vercel. 
              Although Vercel doesn't natively support PHP, we've implemented a solution that allows 
              us to run PHP code within our application.
            </p>
            <p className="text-blue-700">
              Click the button below to view our PHP-generated content, which displays strata 
              management information processed using PHP.
            </p>
          </div>
          
          <div className="flex justify-center">
            <a 
            href="/api/php" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
            View PHP Page
            </a>
          </div>
          
          <div className="mt-8 p-4 border rounded-md bg-gray-50">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Technical Implementation</h3>
            <p className="text-gray-600">
              We're using a custom Vercel configuration with the vercel-php package to interpret and 
              execute PHP files within our application. This allows us to combine the modern frontend 
              capabilities of Next.js with traditional PHP server-side processing.
            </p>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">&copy; 2025 StrataSphere. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-sm text-gray-300 hover:text-white">Terms</Link>
              <Link href="/privacy" className="text-sm text-gray-300 hover:text-white">Privacy</Link>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PHPPage;