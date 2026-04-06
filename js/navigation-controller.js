// Navigation Controller - Manages navigation logic
// Using Observer Pattern for page changes

export class NavigationController {
    constructor() {
        this.currentPage = 'home';
        this.observers = [];
        console.log('✓ NavigationController created');
    }

    // Subscribe to navigation changes
    subscribe(observer) {
        console.log(`📡 NavigationController: Observer subscribed (total: ${this.observers.length + 1})`);
        this.observers.push(observer);
    }

    // Notify all observers of page change
    notifyObservers(pageName) {
        console.log(`📢 NavigationController: Notifying ${this.observers.length} observer(s) of page change to '${pageName}'`);
        this.observers.forEach((observer, index) => {
            try {
                console.log(`📢 NavigationController: Calling observer ${index + 1}...`);
                observer(pageName);
                console.log(`✓ NavigationController: Observer ${index + 1} completed`);
            } catch (error) {
                console.error(`❌ NavigationController: Observer ${index + 1} failed:`, error);
            }
        });
    }

    // Navigate to a page
    navigateTo(pageName) {
        console.log(`🔗 NavigationController: navigateTo("${pageName}") called`);
        console.log(`🔗 NavigationController: Current page: ${this.currentPage}, New page: ${pageName}`);
        
        if (this.currentPage === pageName) {
            console.log(`ℹ️ NavigationController: Already on page "${pageName}", skipping...`);
            return;
        }
        
        this.currentPage = pageName;
        console.log(`✓ NavigationController: Current page updated to "${pageName}"`);
        
        this.notifyObservers(pageName);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log(`✓ NavigationController: Scroll to top and page change complete`);
    }

    // Get current page
    getCurrentPage() {
        return this.currentPage;
    }
}
