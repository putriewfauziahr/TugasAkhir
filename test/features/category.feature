Feature: Login Tests

  Scenario: Login successfully with valid credentials
    Given I open the Kasir Aja websites
    When I do Login Process first
    Then Validate Login process is success

  Scenario: Add New Product
    When I click Category Menu
    Then I Add New Category