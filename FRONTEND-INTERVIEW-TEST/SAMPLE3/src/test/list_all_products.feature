    Scenario: List all products
        Given I am on the product list page
        Then I see all products
        And I see a filter side bar
        And I see filter by tags
        And I see filter by subscriptions