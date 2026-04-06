#!/bin/bash
# Migration Script - Backup and Switch to New Structure

echo "Portfolio Restructuring Migration"
echo "=================================="

# Step 1: Backup original index.html
if [ -f "index.html" ]; then
    echo "Backing up original index.html..."
    cp index.html index.html.backup
    echo "✓ Backup created: index.html.backup"
else
    echo "✗ Original index.html not found"
    exit 1
fi

# Step 2: Switch to new structure
echo "Switching to new modular structure..."
mv index-new.html index.html
echo "✓ New index.html activated"

# Step 3: Verify structure
echo ""
echo "Verifying project structure..."
directories=("css" "js" "data")
for dir in "${directories[@]}"; do
    if [ -d "$dir" ]; then
        echo "✓ $dir/ directory found"
    else
        echo "✗ $dir/ directory not found"
    fi
done

echo ""
echo "Migration complete!"
echo ""
echo "Next steps:"
echo "1. Test the portfolio in your browser"
echo "2. Verify all pages and features work"
echo "3. Once confirmed, delete index.html.backup"
echo ""
echo "To revert to the old version:"
echo "  rm index.html && mv index.html.backup index.html"
