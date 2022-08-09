import usePromptUserHook from "./usePromptUserHook";
import {useRef} from "react";
import {IonButton, IonHeader, IonModal} from "@ionic/react";

export const InstallPwa = () => {
    const [webInstallPrompt, handleWebInstallDeclined, handleWebInstallAccepted] = usePromptUserHook();
    const modal = useRef(null);

    if (!webInstallPrompt) {
        return null;
    }
    
    const onConfirm = () => {
        handleWebInstallAccepted();
        modal.current?.dismiss();
    }
    
    const onDismiss = () => {
        handleWebInstallDeclined();
    }
    
    return (
        <IonModal ref={modal} trigger="open-modal" onWillDismiss={() => onDismiss}>
            <IonHeader>
                Install PWA
                <IonButton strong={true} onClick={() => onConfirm()}>Install</IonButton>
                <IonButton onClick={() => onDismiss()}>Cancle</IonButton>
            </IonHeader>
        </IonModal>
    )
}