import AppsterController from '../appster/AppsterController.js'
import { GoLogoLoCallBack } from './GoLogoLoConstants.js';

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

    }

    processEditText() {
        this.model.updateText();
    }
    processFontSlider() {
        this.model;
    }
    processTextColorPicker() {
        this.model;
    }
    processBackgroundColorPicker() {
        this.model;
    }
    processBorderColorPicker() {
        this.model;
    }
    processBorderRadiusSlider() {
        this.model;
    }
    processBorderThicknessSlider() {
        this.model;
    }
    processBorderPaddingSlider() {
        this.model;
    }
    processMarginSlider() {
        this.model;
    }

}