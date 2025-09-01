export const useUIStore=defineStore('Ui Store',()=>{
    const isImageViewerOpened=ref(false);
    const imageSrc=ref<string>("");
    const imageAlt=ref<string>("");
    const openImageViewer=(src:string,alt:string):void=>{
        isImageViewerOpened.value=true;
        imageSrc.value=src;
        imageAlt.value=alt;
        document.documentElement.style.overflowY="hidden";

    }
    const closeImageViewer=():void=>{
        isImageViewerOpened.value=false;
        document.documentElement.style.overflowY="auto";
    }


    const isSnackbarOpened=ref(false);
    const snackbarStatus=ref<"success"|"error">("success");
    const snackbarContent=ref("");
    const triggerSnackbar=(status:"success"|"error",content:string)=>{
        snackbarContent.value=content
        snackbarStatus.value=status;
        isSnackbarOpened.value=true;
        setTimeout(()=>{
            isSnackbarOpened.value=false;
        },3000)
        
    }
    return {
        isImageViewerOpened,
        imageSrc,
        imageAlt,

        isSnackbarOpened,
        snackbarContent,
        snackbarStatus,

        openImageViewer,
        closeImageViewer,

        triggerSnackbar,
    }
})