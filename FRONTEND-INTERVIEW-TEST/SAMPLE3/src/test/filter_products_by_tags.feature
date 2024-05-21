    Scenario: Filter products by tags
        Given I am on the product list page
        Then I see all products
        And I see a filter side bar
        And I see filter by tags
        And I see filter by subscriptions
        Given I click on "Tags" in the sidebar
        And I select "tag1"
        Then I see only products with tag "tag1"