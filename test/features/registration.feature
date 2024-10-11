Feature: Registration Tests

  Scenario: Registration successfully with valid credentials
    Given I open the KasirAja website
    When I do Registration Process
    Then Registration process is success

  Scenario: Failed Registration because doesn't Input Nama Toko
    Given I open the KasirAja website
    When I do Registration Without Input Nama Toko
    Then Error Message for Empty Nama Toko Field is Shown
    
  Scenario: Failed Registration because doesn't Input Email
    Given I open the KasirAja website
    When I do Registration Without Input Email
    Then Error Message for Empty Email Field is Shown
    
  Scenario: Failed Registration because Input Invalid Format Email
    Given I open the KasirAja website
    When I do Registration Process but Input Invalid Format Email
    Then Error Message for Invalid Format Email is Shown