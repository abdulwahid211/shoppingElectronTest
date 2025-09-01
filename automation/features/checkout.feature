Feature: Google Search

  Scenario: Search Playwright on Google
    Given I open the Google homepage
    When I search for "Playwright"
    Then I should see results related to "Playwright"
