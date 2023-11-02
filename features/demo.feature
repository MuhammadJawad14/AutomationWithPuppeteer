

Feature: A demo example of Puppeteer with Cucumber

  Scenario: Open a website and take its screen shot
     Given I open the website "https://mvnrepository.com/"
    When I take a screenshot named "Maven.png"
    Then I should see the screenshot file
