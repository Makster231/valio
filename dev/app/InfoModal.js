import modalWindowComponent from "../blocks/es-custom-modal/es-custom-modal"

export default class InfoModal{
    constructor(){
        this.modalWindow={};
        this.mainButton = document.querySelector(".info__ok-button");
        this.init();
    }
    init(){
        this.modalWindow = new modalWindowComponent(
            [
                {
                    windowName: "info",
                    buttonOpenClassName: "",
                    buttonCloseClassName: ".modal-close-button__info",
                }
            ]
        );
        this.mainButton.addEventListener('click', function () {
            window.infoModalWindow.hide();
        });
    }
    show(){
        this.modalWindow.openModal(this.modalWindow.modalWindowsElementsArray[0]);
    }

    hide(){
        this.modalWindow.closeModal(this.modalWindow.modalWindowsElementsArray[0]);
    }
}