const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
var assert = require('assert');
 
async function login_test(){
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        var username = "student";
        var password = "Password123";
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("https://practicetestautomation.com/practice-test-login/");
            
        
        await driver.findElement(By.id("username")).sendKeys(username);
        await driver.findElement(By.id("password")).sendKeys(password);
        await driver.findElement(By.id("submit")).click();
 
        //Verify the page url and print it
        var currentUrl = await driver.getCurrentUrl();
        console.log('Current URL is:', currentUrl);

        assert(currentUrl == "https://practicetestautomation.com/logged-in-successfully/", "The success page is not currently loaded");

        await driver.quit();
    } catch (e) {
        console.log("*** ERROR ***\n\n", e);
        console.log("\n*** END OF ERROR ***\n\n");
        await driver.quit();
    }
}
 
login_test()