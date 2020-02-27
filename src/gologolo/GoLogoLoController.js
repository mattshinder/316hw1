import AppsterController from '../appster/AppsterController.js'
import { GoLogoLoCallBack, GoLogoLoGUIId, } from './GoLogoLoConstants.js'
import {AppsterHTML} from '../appster/AppsterConstants.js'

export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    registerEditEventHandlers() {
        // Edit Screen Event Handlers
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallBack.GOLOGOLO_PROCESS_EDIT_TEXT_BUTTON]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOLO_PROCESS_FONT_SIZE_SLIDER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOLO_PROCESS_TEXT_COLOR_PICKER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOLO_PROCESS_BACKGROUND_COLOR_PICKER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOLO_PROCESS_BORDER_COLOR_PICKER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOLO_PROCESS_BORDER_RADIUS_SLIDER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOLO_PROCESS_BORDER_THICKNESS_SLIDER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOLO_PROCESS_BORDER_PADDING_SLIDER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOLO_PROCESS_MARGIN_SLIDER]);

        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallBack.GOLOGOLO_PROCESS_ENTER_WORK]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallBack.GOLOGOLO_PROCESS_CANCEL_WORK]);

    }
    processGoEnterWork = () => {
        this.model.goEnterWork();
    }
    processGoCancelWork = () => {
        this.model.goCancelWork();
    }
    processEditText = () => {
        this.model.updateText();
    }
    processFontSlider = () => {
        this.model.updateFont();
    }
    processTextColorPicker = () => {
        this.model.updateColor();
    }
    processBackgroundColorPicker = () => {
        this.model.updateBackground();
    }
    processBorderColorPicker = () => {
        this.model.updateBorder();
    }
    processBorderRadiusSlider = () => {
        this.model.updateRadius();
    }
    processBorderThicknessSlider = () => {
        this.model.updateThickness();
    }
    processBorderPaddingSlider = () => {
        this.model.updatePadding();
    }
    processMarginSlider = () => {
        this.model.updateMargin();
    }

}