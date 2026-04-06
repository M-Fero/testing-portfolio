/**
 * Minimal Navigation Verification
 * Copy and paste this entire code block into browser console (F12) while on the portfolio page
 */

console.clear();
console.log('🧪 Starting Navigation Verification...\n');

// Test 1: Check app initialization
console.log('TEST 1: Application Instance');
const app = window.portfolioApp;
if (app) {
    console.log('✅ PASS: window.portfolioApp exists');
    console.log('   Current page:', app.getCurrentPage());
} else {
    console.log('❌ FAIL: window.portfolioApp not found');
}

// Test 2: Check nav links exist
console.log('\nTEST 2: Navigation Links');
const navLinks = document.querySelectorAll('.nav-link');
console.log(`✅ Found ${navLinks.length} nav links`);
navLinks.forEach((link, i) => {
    console.log(`   ${i+1}. ${link.textContent.trim()} (data-page="${link.getAttribute('data-page')}")`);
});

// Test 3: Manual navigation test
console.log('\nTEST 3: Manual Navigation');
console.log('Current page:', app.getCurrentPage());
console.log('Calling: app.navigateTo("projects")...');
app.navigateTo("projects");
console.log('After navigate - current page:', app.getCurrentPage());

// Test 4: Check content rendering
console.log('\nTEST 4: Content Rendering');
const contentArea = document.getElementById('content-area');
const contentLength = contentArea.innerHTML.length;
console.log(`✅ Content area has ${contentLength} characters`);
const firstPart = contentArea.innerHTML.substring(0, 100);
console.log(`   First part: "${firstPart}..."`);

// Test 5: Check active nav link styling
console.log('\nTEST 5: Nav Link Styling');
navLinks.forEach((link, i) => {
    const isActive = link.classList.contains('bg-orange-600');
    const page = link.getAttribute('data-page');
    console.log(`   ${i+1}. ${page}: ${isActive ? '✅ ACTIVE' : 'inactive'}`);
});

console.log('\n✅ Navigation Verification Complete');
console.log('\nNow try clicking a nav link to test event listeners...');
