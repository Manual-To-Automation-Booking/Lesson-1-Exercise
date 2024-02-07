const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
var assert = require('assert');
 
async function run_tests() {
    failed_username_test();
    failed_password_test();
}

async function failed_username_test(){
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        var wrongUsername = "wrongStudent";
        var password = "Password123";
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("https://practicetestautomation.com/practice-test-login/");
            
        
        await driver.findElement(By.id("username")).sendKeys(wrongUsername);
        await driver.findElement(By.id("password")).sendKeys(password);
        await driver.findElement(By.id("submit")).click();

        await driver.sleep(3000);
 
        var errorElement = await driver.findElement(By.css("#error"));
        var usernameErrorText = await errorElement.getText();
        console.log(usernameErrorText);

        assert(usernameErrorText == "Your username is invalid!", "The error message is incorrect");

        await driver.quit();
    } catch (e) {
        console.log("*** ERROR ***\n\n", e);
        console.log("\n*** END OF ERROR ***\n\n");
        await driver.quit();
    }
}

async function failed_password_test(){
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        var username = "student";
        var wrongPassword = "Password321";
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("https://practicetestautomation.com/practice-test-login/");
                    
                
        await driver.findElement(By.id("username")).sendKeys(username);
        await driver.findElement(By.id("password")).sendKeys(wrongPassword);
        await driver.findElement(By.id("submit")).click();

        await driver.sleep(3000);

        var errorElement = await driver.findElement(By.css("#error"));
        var passwordErrorText = await errorElement.getText();
        console.log(passwordErrorText);

        assert(passwordErrorText == "Your password is invalid!", "The error message is incorrect");

        await driver.quit();
    } catch (e) {
        console.log("*** ERROR ***\n\n", e);
        console.log("\n*** END OF ERROR ***\n\n");
        await driver.quit();
    }
}
 
run_tests()


