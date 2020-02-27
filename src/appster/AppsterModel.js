export default class AppsterModel {
    constructor() {
        // THE RECENT WORK LIST
        this.recentWork = new Array();

        // THE WORK CURRENTLY BEING EDITED
        this.currentWork = null;
    }

    getRecentWork(workName) {
        for (let i = 0; i < this.recentWork.length; i++) {
            let testWork = this.recentWork[i];
            if (testWork.getName() === workName)
                return testWork;
        }
        return null;
    }

    setView(initView) {
        this.view = initView;
    }

    goHome() {
        this.view.goToHomeScreen();
    }
    goList() {
        this.view.buildAppsterTextInputModal();
        this.view.showDialogText();
    }
    goClose() {
        this.view.hideConfirm();
    }
    goEnter() {
        let text = this.view.getName();
        if (text.length == 0) {
            this.view.showZero();
        }
        else if (this.getRecentWork(text) == null) {
            let CreateName = this.buildName(text);
            this.appendWork(CreateName);
            this.view.refreshRecentWork(this.recentWork);
            this.view.cancel();
            this.editWork(CreateName.name);
        }
        else {
            this.view.showConfirm();
        }
    }

    goCancel() {
        this.view.cancel();
    }
    goDelete() {
        this.view.showDialog();
    }
    goCancelDelete() {
        this.view.hideDialog();
    }
    getWorkToEdit() {
        return this.currentWork;
    }
    afterDelete() {
        this.view.refreshRecentWork(this.recentWork);
    }

    editWork(workNameToEdit) {
        // GET THE WORK THAT WE PLAN TO EDIT
        console.log(this.recentWork);
        let work = this.getRecentWork(workNameToEdit);
        this.currentWork = workNameToEdit;

        if (work) {
            // SET IT AS THE WORK WE ARE EDITING
            this.workToEdit = work;
            this.moveWorkToTop(this.workToEdit);

            // LOAD DATA INTO THE UI
            this.view.loadWork(this.workToEdit); 

            // CHANGE THE SCREEN
            this.view.goToEditScreen();
        }
    }

    loadRecentWork(jsonData) {
        // THEN LOAD ALL DATA FROM RECENT WORK FROM THE JSON FILE
        for (let i = 0; i < jsonData.recent_work.length; i++) {
            let workData = jsonData.recent_work[i];
            let appWork = this.buildAppWork(jsonData.recent_work, workData.name);
            this.recentWork.push(appWork);
        }
        
        // ALL RECENT WORK HAS BEEN LOADED FROM THE
        // JSON FILE, NOW WE CAN UPDATE THE VIEW
        this.view.refreshRecentWork(this.recentWork);      
    }

    /**
     * Appends the work to the recent work list.
     * 
     * @param {AppWork} workToAppend Work to append to the recent work list.
     */
    appendWork(workToAppend) {
        this.recentWork.push(workToAppend);
        this.view.appendWorkLink(workToAppend);
    }

    /**
     * Prepends the work to the recent work list.
     * 
     * @param {AppWork} workToPrepend Work to prepend to the recent work list.
     */
    prependWork(workToPrepend) {
        this.recentWork.unshift(workToPrepend);
        this.view.reloadRecentWorkLinks(this.recentWork);
        console.log(workToPrepend.name + " prepended");
    }

    /**
     * Removes the work from the list of work.
     * 
     * @param {AppWork} workToRemove Work to remove, presumably it's been deleted.
     */
    removeWork (workToRemove) {
        // REMOVE IT IF IT EXISTS
        let indexOfWork = this.recentWork.indexOf(workToRemove);
        if (indexOfWork == -1) {
            for (let i = 0; i < this.recentWork.length; i++) {
                let name1 = this.recentWork[i].name;
                if(name1 == workToRemove) {
                    indexOfWork = i;
                }
            }
        }
        if (indexOfWork >= 0)
            this.recentWork.splice(indexOfWork, 1);
            console.log(workToRemove.name + " removed");
        this.view.reloadRecentWorkLinks(this.recentWork);
    }

    /**
     * This function moves workToMove to the top of the list of recdent work
     * that can be edited, which will be reflected on the welcome page.
     */
    moveWorkToTop(workToMove) {
        // REMOVE THE WORK IF IT EXISTS
        this.removeWork(workToMove);

        // AND THEN ADD IT TO THE TOP OF THE STACK
        this.prependWork(workToMove);
    }

    /**
     * Changes the name of the work being edited.
     * 
     * @param {AppWork} workBeingEdited Work in the process of being edited.
     * @param {String} newName The new name of the work.
     */
    updateWorkName(workBeingEdited, newName) {
        // WE'RE GOING TO CHANGE THE NAME TOO BUT ONLY UPDATE
        // THE LIST OF LIST LINKS IF IT'S CHANGED
        if (workBeingEdited.getName() != newName) {
            workBeingEdited.setName(newName);
            this.view.reloadRecentWorkLinks(this.recentWork);
        }
    }

    /**
     * This method creates a new list and sets it up so that it
     * can be edited.
     */
    loadNewList() {
        this.listToEdit = this.createNewWork();
        this.prependList(this.listToEdit);
        this.view.loadListData(this.listToEdit);
    }
}