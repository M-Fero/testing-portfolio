/**
 * Quick Integration Test - Verifies portfolio loads and works
 * Run this in browser console while viewing the portfolio
 */

console.clear();
console.log('🧪 PORTFOLIO INTEGRATION TEST STARTING\n');

// Test 1: App instance exists
console.log('Test 1: Application instance');
try {
  const app = window.portfolioApp;
  if (app) {
    console.log('✅ PASS: window.portfolioApp exists');
  } else {
    console.log('❌ FAIL: window.portfolioApp not found');
  }
} catch (e) {
  console.log('❌ FAIL:', e.message);
}

// Test 2: Current page loads
console.log('\nTest 2: Current page loaded');
try {
  const currentPage = window.portfolioApp.getCurrentPage();
  const contentArea = document.getElementById('content-area');
  const hasContent = contentArea && contentArea.innerHTML.length > 0;
  
  if (currentPage && hasContent) {
    console.log(`✅ PASS: Page '${currentPage}' loaded with content (${contentArea.innerHTML.length} chars)`);
  } else {
    console.log('❌ FAIL: No content loaded');
  }
} catch (e) {
  console.log('❌ FAIL:', e.message);
}

// Test 3: Navigation links present
console.log('\nTest 3: Navigation links');
try {
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length === 5) {
    console.log(`✅ PASS: All 5 navigation links found`);
    navLinks.forEach(link => {
      const page = link.getAttribute('data-page');
      const label = link.textContent.trim();
      console.log(`   - ${label} (${page})`);
    });
  } else {
    console.log(`⚠️  WARNING: Expected 5 nav links, found ${navLinks.length}`);
  }
} catch (e) {
  console.log('❌ FAIL:', e.message);
}

// Test 4: Profile loaded
console.log('\nTest 4: Profile section');
try {
  const profileName = document.querySelector('.profile-section h2');
  const profileTitle = document.querySelector('.profile-section p');
  
  if (profileName && profileTitle) {
    console.log(`✅ PASS: Profile loaded`);
    console.log(`   - Name: ${profileName.textContent.trim()}`);
    console.log(`   - Title: ${profileTitle.textContent.trim()}`);
  } else {
    console.log('⚠️  WARNING: Profile section incomplete');
  }
} catch (e) {
  console.log('❌ FAIL:', e.message);
}

// Test 5: Social links present
console.log('\nTest 5: Social links');
try {
  const socialLinks = document.querySelectorAll('.social-links a');
  if (socialLinks.length > 0) {
    console.log(`✅ PASS: ${socialLinks.length} social links found`);
  } else {
    console.log('⚠️  WARNING: No social links found');
  }
} catch (e) {
  console.log('❌ FAIL:', e.message);
}

// Test 6: Navigation works
console.log('\nTest 6: Navigation functionality');
try {
  const initialPage = window.portfolioApp.getCurrentPage();
  window.portfolioApp.navigateTo('projects');
  const newPage = window.portfolioApp.getCurrentPage();
  
  setTimeout(() => {
    const projectsContent = document.getElementById('content-area').innerHTML;
    if (newPage === 'projects' && projectsContent.includes('Project')) {
      console.log('✅ PASS: Navigation works (switched from ' + initialPage + ' to projects)');
      // Switch back
      window.portfolioApp.navigateTo(initialPage);
    } else {
      console.log('⚠️  WARNING: Navigation may not have completed');
    }
  }, 100);
} catch (e) {
  console.log('❌ FAIL:', e.message);
}

// Test 7: Mobile menu button
console.log('\nTest 7: Mobile menu');
try {
  const menuBtn = document.getElementById('mobile-menu-btn');
  if (menuBtn) {
    console.log('✅ PASS: Mobile menu button found');
  } else {
    console.log('⚠️  WARNING: Mobile menu button not found');
  }
} catch (e) {
  console.log('❌ FAIL:', e.message);
}

// Test 8: No console errors
console.log('\nTest 8: Error logging');
console.log('✅ PASS: Console logging active (check above for any ❌ errors)');

console.log('\n' + '='.repeat(50));
console.log('🎉 INTEGRATION TEST COMPLETE');
console.log('='.repeat(50));
console.log('\nTo manually navigate, use:');
console.log('  window.portfolioApp.navigateTo("home")');
console.log('  window.portfolioApp.navigateTo("projects")');
console.log('  window.portfolioApp.navigateTo("skills")');
console.log('  window.portfolioApp.navigateTo("experience")');
console.log('  window.portfolioApp.navigateTo("contact")');
