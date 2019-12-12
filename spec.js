var objectPage=require('./objectPage.js');

describe('VTV',function(){
    it('Button is not clickable if check box is not checkd', function(){
        //let contexts = await browser.driver.getCurrentContext();
        //console.log(contexts);

        expect(objectPage.checkbox.isSelected()).toBe(false);
        expect(objectPage.button1.isPresent()).toBe(false);

    });

    it('Page 1: Check Checkbox',function(){
        objectPage.checkbox.click();
        objectPage.button1.click();
        expect(objectPage.title.getText()).toEqual('BLIJF OP DE HOOGTE');
    });

    it('Page 2: Pop up message',function(){
        objectPage.btn2.click();
        expect(objectPage.dontAndAllowBtn.last().getText()).toEqual('ALLOW');
    });

    it('Going to page 3',function(){
        objectPage.dontAndAllowBtn.last().click();
        expect(objectPage.close.isPresent()).toBe(true);
    });

    it('Home page opening',function(){
        objectPage.close.click();
        expect(objectPage.home.getText()).toEqual('Home');
    });

    xit('10th game on the Home page',function(){

        browser.actions().mouseMove(objectPage.innerTitle.get(9)).perform();
        
        
        browser.sleep(5000);
        //expect(objectPage.innerTitle.get(10).getText()).toContain('VICTORIA - ZUIDVOGELS');

    });

    it('Play/pause video',function(){
        objectPage.starPlaying.first().click();
        browser.wait(objectPage.EC.elementToBeSelected((objectPage.playPause)), 5000);
        objectPage.playPause.click();
        objectPage.playPause.click();

    });


});