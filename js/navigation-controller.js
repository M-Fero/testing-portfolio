// Navigation Controller - Manages navigation logic
// Using Observer Pattern for page changes

export class NavigationController {
    constructor() {
        this.currentPage = 'home';
        this.observers = [];
    }

    // Subscribe to navigation changes
    subscribe(observer) {
        this.observers.push(observer);
    }

    // Notify all observers of page change
    notifyObservers(pageName) {
        this.observers.forEach(observer => observer(pageName));
    }

    // Navigate to a page
    navigateTo(pageName) {
        console.log(`🔗 Navigation: Switching to page '${pageName}'`);
        this.currentPage = pageName;
        this.notifyObservers(pageName);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log(`✓ Navigation: Currently on page '${this.currentPage}'`);
    }

    // Get current page
    getCurrentPage() {
        return this.currentPage;
    }
}
