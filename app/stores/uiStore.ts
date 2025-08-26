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

    return {
        isImageViewerOpened,
        imageSrc,
        imageAlt,

        openImageViewer,
        closeImageViewer,
    }
})