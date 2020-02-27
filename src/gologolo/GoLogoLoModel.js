import AppsterModel from '../appster/AppsterModel.js'
import GoLogoLoLogo from './GoLogoLoLogo.js'

export default class GoLogoLoModel extends AppsterModel {
    constructor() {
        super();
        this.currentWork = null;
    }
    buildName(workName) {
        return new GoLogoLoLogo(workName);
    }

    createNewWork(workName) {
        let newRandomText = new GoLogoLoText(workName);
        return newRandomText;
    }

    loadWorkData(workToLoad) {
        console.log("load " + workToLoad.getName());
    }

    makeColor(colorData) {
        return "rgb(" + colorData.red + ", " + colorData.green + ", " + colorData.blue + ")";
    }

    buildAppWork(workArray, name) {
        let appWork = new GoLogoLoLogo();

        // FIND THE WORK DATA FROM THE JSON OBJECT
        for (let i = 0; i < workArray.length; i++) {
            let jsonWork = workArray[i];
            if (jsonWork.name === name) {
                // WE'VE FOUND IT, NOW LOAD ALL OF ITS DATA
                appWork.setName(name);
                appWork.setText(jsonWork.text);
                appWork.setFontSize(jsonWork.font_size);
                appWork.setTextColor(jsonWork.text_color);
                appWork.setBackgroundColor(jsonWork.background_color);
                appWork.setBorderColor(jsonWork.border_color);
                appWork.setBorderRadius(jsonWork.border_radius);
                appWork.setBorderThickness(jsonWork.border_thickness);
                appWork.setPadding(jsonWork.padding);
                appWork.setMargin(jsonWork.margin);
            }
        }

        return appWork;
    }

    updateText() {
       this.view.updateTextText();
    }
    updateFont() {
        this.view.updateFontSize();
    }
    updateColor() {
        this.view.updateColorText();
    }
    updateBackground() {
        this.view.updateBackgroundColor();
    }
    updateBorder() {
        this.view.updateBorderColor();
    }
    updateRadius() {
        this.view.updateRadiusSlider();
    }
    updateThickness() {
        this.view.updateThicknessSlider();
    }
    updatePadding() {
        this.view.updatePaddingSlider();
    }
    updateMargin() {
        this.view.updateMarginSlider();
    }
    goEnterWork() {
        let text = this.view.getGoName();
        if (text.length == 0) {
            this.view.showZero();
        }
        else if (this.getRecentWork(text) == null) {
            let vars = this.getRecentWork(this.currentWork);
            vars.setText(text);
            this.view.hideCancelWork();
            this.view.updateTextName(text);
        }
        else {
            this.view.showConfirm();
        }
    }
    goCancelWork() {
        this.view.hideCancelWork();
    }
}