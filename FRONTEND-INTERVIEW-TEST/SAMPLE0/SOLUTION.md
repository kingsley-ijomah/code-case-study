# SOLUTION

## Estimation

Estimated: 7.5 hours

Spent: 9 hours

## Solution

Grid/List view
Dynamic routing to allow ability to click on each product to see more information

2 hours

```gherkin

WHEN I visit the product collection page
THEN I expect to see filters sidebar for tags
WHEN I search for "Formula" in filters sidebar
THEN I expect to see 4 products in the resulting table

WHEN I visit the product collection page
THEN I expect to see filters sidebar
WHEN I filter by "Price" "100" in the sidebar
THEN I expect to see 8 products in the resulting table

WHEN I visit the product collection page
THEN I expect to see filters sidebar
WHEN I filter by "Subscription" "Yes" in the sidebar
WHEN I filter by "100" in filters sidebar
THEN I expect to see 7 products in the resulting table

```
