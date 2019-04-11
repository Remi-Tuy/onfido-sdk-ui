const path = require('path')
const expect = require('chai').expect;
import {describe, it} from '../utils/mochaw'

const options = {
  pageObjects: ['DocumentSelection', 'Welcome', 'DocumentUpload', 'DocumentUploadConfirmation']
}

const localhostUrl = 'https://localhost:8080/'

describe('Happy Paths',options, ({driver,$,pageObjects}) => {
  const {documentSelection, welcome, documentUpload, documentUploadConfirmation} = pageObjects

  it('test website title', async () => {
    await driver.get(localhostUrl)
    const title = await driver.getTitle();
    expect(title).to.equal('Onfido SDK Demo');
  })

  it('test welcome screen title', async () => {
    await driver.get(localhostUrl)
    const welcomeTitle = await welcome.welcomeTitle.getText()
    expect(welcomeTitle).to.equal('Open your new bank account');
  })

  it('test welcome screen subtitle', async () => {
    await driver.get(localhostUrl)
    const welcomeSubtitle = await welcome.welcomeSubtitle.getText()
    expect(welcomeSubtitle).to.equal('To open a bank account, we will need to verify your identity.' + '\n' + 'It will only take a couple of minutes.');
  })

  it('test verify identity button text', async () => {
    await driver.get(localhostUrl)
    const verifyIdentityBtn = await welcome.primaryBtn.getText()
    expect(verifyIdentityBtn).to.equal('Verify Identity');
  })

  it('test footer is displayed', async () => {
    await driver.get(localhostUrl)
    const footer = await welcome.footer.isDisplayed()
  })

  //document selection tests
  it('test title text', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const title = await documentSelection.title.getText()
    expect(title).to.equal('Verify your identity');
  })

  it('test title presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const title = await documentSelection.title.isDisplayed()
  })

  // it('test subtitle text', async () => {
  //   await driver.get(localhostUrl)
  //   await welcome.primaryBtn.click()
  //   const subtitle = await documentSelection.subtitle.getAttribute("div")
  //   console.log(subtitle)
  //   expect(subtitle).to.equal('Select the type of document you would like to upload');
  // })
  //
  // it('test subtitle text', async () => {
  //   await driver.get(localhostUrl)
  //   await welcome.primaryBtn.click()
  //   const subtitle = await documentSelection.subtitle.isDisplayed()
  // })

  it('test passport icon presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const passportIcon = await documentSelection.passportIcon.isDisplayed()
  })

  it('test passport label text', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const documentSelectionPassportLabel = await documentSelection.documentSelectionLabel.getText()
    expect(documentSelectionPassportLabel).to.equal('Passport');
  })

  it('test passport label presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const documentSelectionPassportLabel = await documentSelection.documentSelectionLabel.isDisplayed()
  })

  it('test passport hint text', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const documentSelectionPassportHint = await documentSelection.documentSelectionHint.getText()
    expect(documentSelectionPassportHint).to.equal('Face photo page');
  })

  it('test passport hint presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const documentSelectionPassportHint = await documentSelection.documentSelectionHint.isDisplayed()
  })

  it('test driving licence icon presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const drivingLicenceIcon = await documentSelection.drivingLicenceIcon.isDisplayed()
  })

  it('test driving licence label text', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const drivingLicenceLabel = await documentSelection.drivingLicenceLabel.getText()
    expect(drivingLicenceLabel).to.equal('Driver\'s License');
  })

  it('test driving licence label presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const drivingLicenceLabel = await documentSelection.drivingLicenceLabel.isDisplayed()
  })

  it('test driving licence hint text', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const drivingLicenceHint = await documentSelection.drivingLicenceHint.getText()
    expect(drivingLicenceHint).to.equal('Front and back');
  })

  it('test driving licence hint presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const drivingLicenceHint = await documentSelection.drivingLicenceHint.isDisplayed()
  })

  it('test identity card icon presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const identityCardIcon = await documentSelection.identityCardIcon.isDisplayed()
  })

  it('test identity card label text', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const identityCardLabel = await documentSelection.identityCardLabel.getText()
    expect(identityCardLabel).to.equal('Identity Card');
  })

  it('test identity card label presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const identityCardLabel = await documentSelection.identityCardLabel.isDisplayed()
  })

  it('test identity card hint text', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const identityCardHint = await documentSelection.identityCardHint.getText()
    expect(identityCardHint).to.equal('Front and back');
  })

  it('test identity card hint presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    const identityCardHint = await documentSelection.identityCardHint.isDisplayed()
  })

  //document upload
  it('test title passport text', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const passportTitle = await documentUpload.title.getText()
    expect(passportTitle).to.equal('Passport photo page');
  })

  it('test title passport presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const passportTitle = await documentUpload.title.isDisplayed()
  })

  it('test cross device icon presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const crossDeviceIcon = await documentUpload.crossDeviceIcon.isDisplayed()
  })

  it('test cross device header text', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const crossDeviceHeader = await documentUpload.crossDeviceHeader.getText()
    expect(crossDeviceHeader).to.equal('Need to use your mobile to take photos?');
  })

  it('test cross device header presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const crossDeviceHeader = await documentUpload.crossDeviceHeader.isDisplayed()
  })

  it('test cross device submessage text', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const crossDeviceSubMessage = await documentUpload.crossDeviceSubMessage.getText()
    expect(crossDeviceSubMessage).to.equal('Securely continue verification on your mobile');
  })

  it('test cross device submessage presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const crossDeviceSubMessage = await documentUpload.crossDeviceSubMessage.isDisplayed()
  })

  it('test cross device arrow presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const crossDeviceArrow = await documentUpload.crossDeviceArrow.isDisplayed()
  })

  it('test uploader icon presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const uploaderIcon = await documentUpload.uploaderIcon.isDisplayed()
  })

  it('test uploader instruction text', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const uploaderInctructionsMessage = await documentUpload.uploaderInctructionsMessage.getText()
    expect(uploaderInctructionsMessage).to.equal('Upload passport photo page from your computer');
  })

  it('test uploader instruction presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const uploaderInctructionsMessage = await documentUpload.uploaderInctructionsMessage.isDisplayed()
  })

  it('test uploader button text', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const uploaderBtn = await documentUpload.uploaderBtn.getText()
    expect(uploaderBtn).to.equal('Upload file');
  })

  it('test uploader button presence', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const uploaderBtn = await documentUpload.uploaderBtn.isDisplayed()
  })

  it('test driving licence titles', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.drivingLicenceIcon.click()
    const frontOfDrivingLicenceTitle = await documentUpload.title.getText()
    expect(frontOfDrivingLicenceTitle).to.equal('Front of license');
    const input = await documentUpload.upload
    await input.sendKeys(path.join(__dirname,'../../features/helpers/resources/uk_driving_licence.pdf'))
    const waitForUploadToFinish = await documentUploadConfirmation.waitForUploadToFinish
    await documentUploadConfirmation.confirmBtn.click()
    const backOfDrivingLicenceTitle = await documentUpload.title.getText()
    expect(backOfDrivingLicenceTitle).to.equal('Back of license');
  })

  it('should upload a file', async () => {
    await driver.get(localhostUrl)
    await welcome.primaryBtn.click()
    await documentSelection.passportIcon.click()
    const input = await documentUpload.upload
    await input.sendKeys(path.join(__dirname,'../../features/helpers/resources/passport.jpg'))
  })
})
