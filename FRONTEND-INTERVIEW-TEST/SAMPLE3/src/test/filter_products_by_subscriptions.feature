    Scenario: Filter products by subscriptions
        Given I am on the product list page
        Then I see all products
        And I see a filter side bar
        And I see filter by tags
        And I see filter by subscriptions
        And I see yes options
        And I see no options
        When I click on "yes"
        Then I see only products with subscriptions
        When I click on "no"
        Then I see only products without subscriptions
