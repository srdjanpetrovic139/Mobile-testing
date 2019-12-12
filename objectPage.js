var ObjectPage=function(){
    this.checkbox=element(by.id('checkbox'));
    this.button1=element(by.className('onboarding__button button onboarding__button--valid'));
    this.title=element(by.className('form__terms-title'));
    this.btn2=element(by.className('onboarding__button button onboarding__button--valid'));
    this.dontAndAllowBtn=element.all(by.className('button-inner'));
    this.close=element(by.className('onboarding__close close'));
    this.home=element(by.className('toolbar-title toolbar-title-md'));
    this.EC = protractor.ExpectedConditions;
    this.innerTitle=element.all(by.className('inner__title'));
    this.video=element.all(by.className('jw-video jw-reset'));
    this.playPause=element.all(by.className('jw-icon jw-icon-display jw-button-color jw-reset'));
    this.starPlaying=element.all(by.className('poster-image__play'));
};
module.exports=new ObjectPage();