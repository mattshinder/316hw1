import {GoLogoLoGUIClass, GoLogoLoGUIId, GoLogoLoText} from './GoLogoLoConstants.js'
import {AppsterHTML, AppsterSymbols} from '../appster/AppsterConstants.js'
import AppsterView from '../appster/AppsterView.js'
import {AppsterGUIId, AppsterGUIClass} from '../appster/AppsterConstants.js'

export default class GoLogoLoView extends AppsterView {
    constructor() {
        super();
    }

    fillAppWorkspace(workspace) {
        let colorPickerAttributes = [];
        colorPickerAttributes[AppsterHTML.TYPE] = AppsterHTML.COLOR;
        let rangeAttributes = [];
        rangeAttributes[AppsterHTML.TYPE] = AppsterHTML.RANGE;

        // FIRST MAKE THE TOOLBAR
        let toolbar = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TOOLBAR);
        let editTextButton = this.buildElement(AppsterHTML.BUTTON, GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, [], [], GoLogoLoText.GOLOGOLO_EDIT_TEXT_TEXT);
        editTextButton.innerHTML = AppsterSymbols.EDIT;
        let fontSizeSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, [], rangeAttributes);
        let textColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, [], colorPickerAttributes);
        let backgroundColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, [], colorPickerAttributes);
        let borderColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, [], colorPickerAttributes);
        let borderRadiusSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, [], rangeAttributes);
        let borderThicknessSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, [], rangeAttributes);
        let paddingSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, [], rangeAttributes);
        let marginSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, [], rangeAttributes);
        let textDiv = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TEXT);
        let promptClass = [GoLogoLoGUIClass.GOLOGOLO_CONTROL_PROMPT];
        toolbar.appendChild(editTextButton);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_FONT_SIZE_TEXT));
        toolbar.appendChild(fontSizeSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_TEXT_COLOR_TEXT));
        toolbar.appendChild(textColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BACKGROUND_COLOR_TEXT));
        toolbar.appendChild(backgroundColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_COLOR_TEXT));
        toolbar.appendChild(borderColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_RADIUS_TEXT));
        toolbar.appendChild(borderRadiusSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_THICKNESS_TEXT));
        toolbar.appendChild(borderThicknessSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_PADDING_TEXT));
        toolbar.appendChild(paddingSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_MARGIN_TEXT));
        toolbar.appendChild(marginSlider);

        


        workspace.appendChild(toolbar);
        workspace.appendChild(textDiv);
        let gologoloTextInputModal = this.buildGoLogoLoTextInputModal();
        workspace.appendChild(gologoloTextInputModal);
        return workspace;
    }

    loadWork(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.innerHTML = work.getText();
        let fontSizeSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        fontSizeSlider.value = work.getFontSize();
        let textColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);
        textColorPicker.value = work.getTextColor();
        let backgroundColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER);
        backgroundColorPicker.value = work.getBackgroundColor();
        let borderColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER);
        borderColorPicker.value = work.getBorderColor();
        let borderRadiusSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        borderRadiusSlider.value = work.getBorderRadius();
        let borderThicknessSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER);
        borderThicknessSlider.value = work.getBorderThickness();
        let paddingSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER);
        paddingSlider.value = work.getPadding();
        let marginSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER);
        marginSlider.value = work.getMargin();
        this.loadWorkStyle(work);

    }

    buildGoLogoLoTextInputModal() {
        let textModal = this.buildElement(  AppsterHTML.DIV, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL,
                                            [AppsterGUIClass.APPSTER_MODAL],
                                            [],
                                            null,
                                            AppsterGUIClass.MODAL_ANIMATION_LEFT);
        let textFrame = this.buildElement( AppsterHTML.DIV, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_FRAME,
                                            [AppsterGUIClass.APPSTER_MODAL_FRAME]);
        let header = this.buildElement( AppsterHTML.HEADER, 
                                        GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_HEADER,
                                        [AppsterGUIClass.APPSTER_MODAL_HEADER]);
        let section = this.buildElement(    AppsterHTML.SECTION, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_SECTION,
                                            [AppsterGUIClass.APPSTER_MODAL_SECTION]);
        let p = this.buildElement(AppsterHTML.P);
        let strong = this.buildElement(    AppsterHTML.STRONG, 
                                                "",
                                                [],
                                                [],
                                                GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_PROMPT_TEXT);
        let textFieldAttributes = [];
        textFieldAttributes[AppsterHTML.TYPE] = AppsterHTML.TEXT;
        let textField = this.buildElement(  AppsterHTML.INPUT,
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD,
                                            [AppsterGUIClass.APPSTER_MODAL_TEXTFIELD],
                                            textFieldAttributes);
        let enterButton = this.buildElement(AppsterHTML.BUTTON, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON,
                                            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
                                            [],
                                            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON_TEXT);
        let cancelButton = this.buildElement(AppsterHTML.BUTTON, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON,
                                            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
                                            [],
                                            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON_TEXT);
        let footer = this.buildElement(     AppsterHTML.FOOTER, 
                                            "", 
                                            [AppsterGUIClass.APPSTER_MODAL_FOOTER],
                                            [],
                                            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_FOOTER_TEXT);
        p.appendChild(strong);
        section.appendChild(p);
        textFrame.appendChild(header);
        textFrame.appendChild(section);
        section.appendChild(textField);
        section.appendChild(enterButton);
        section.appendChild(cancelButton);
        textFrame.appendChild(footer);
        textModal.appendChild(textFrame);
        return textModal;
    }

    loadWorkStyle(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.style.color = work.getTextColor();
        textDiv.style.backgroundColor = work.getBackgroundColor();
        textDiv.style.borderColor = work.getBorderColor();
        textDiv.style.borderRadius = work.getBorderRadius() + "px";
        textDiv.style.borderWidth = work.getBorderThickness() + "px";
        textDiv.style.fontSize = work.getFontSize() + "px";
        textDiv.style.padding = work.getPadding() + "px";
        textDiv.style.margin = work.getMargin() + "px";
        textDiv.style.text = work.getText();
        textDiv.style.borderStyle = "solid";
    }

    addListItem(initText) {
        let textList = document.getElementById(RTA_GUIId.RTA_TEXT_LIST);
        let listItemCount = textList.childNodes.length;
        let newListItem = this.buildElement(AppsterHTML.LI, RTA_GUIId.RTA_TEXT_LIST_ITEM 
            + listItemCount);
        newListItem.innerHTML = initText;
        textList.appendChild(newListItem);
    }

    appendLetter(listItemId, letterToAppend) {
        let textList = document.getElementById(listItemId);
        textList.innerHTML += textList.innerHTML + letterToAppend;
    }

    updateFontSize() {
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.fontSize = dialog + "px";
        let vars = this.controller.model.currentWork;
        let output = this.controller.model.getRecentWork(vars);
        output.setFontSize(dialog);
    }
    updateRadiusSlider() {
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.borderRadius = dialog + "px";
        let vars = this.controller.model.currentWork;
        let output = this.controller.model.getRecentWork(vars);
        output.setBorderRadius(dialog);
    }
    updateThicknessSlider() {
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.borderWidth = dialog + "px";
        let vars = this.controller.model.currentWork;
        let output = this.controller.model.getRecentWork(vars);
        output.setBorderThickness(dialog);
    }
    updatePaddingSlider() {
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.padding = dialog + "px";
        let vars = this.controller.model.currentWork;
        let output = this.controller.model.getRecentWork(vars);
        output.setPadding(dialog);
    }
    updateMarginSlider() {
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.margin = dialog + "px";
        let vars = this.controller.model.currentWork;
        let output = this.controller.model.getRecentWork(vars);
        output.setMargin(dialog);
    }
    updateColorText() {
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.color = dialog;
        let vars = this.controller.model.currentWork;
        let output = this.controller.model.getRecentWork(vars);
        output.setTextColor(dialog);
    }
    updateBackgroundColor() {
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.backgroundColor = dialog;
        let vars = this.controller.model.currentWork;
        let output = this.controller.model.getRecentWork(vars);
        output.setBackgroundColor(dialog);
    }
    updateBorderColor() {
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER).value;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.borderColor = dialog;
        let vars = this.controller.model.currentWork;
        let output = this.controller.model.getRecentWork(vars);
        output.setBorderColor(dialog);
    }
    updateTextText() {
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
        dialog.classList.add(GoLogoLoGUIClass.IS_VISIBLE);
    }
    hideCancelWork() {
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
        dialog.classList.remove(GoLogoLoGUIClass.IS_VISIBLE);
    }
    getGoName() {
        return document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD).value;
    }
    updateTextName(newName) {
        console.log(newName);
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.text = newName;
        this.goToHomeScreen();
        this.goToEditScreen();
    }
}