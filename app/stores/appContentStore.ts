interface NavLinks{
    id:number,
    icon:string,
    name:string,
    href:string,

}
export const useContentStore=defineStore('contentStore',()=>{
    const message=ref("Hello!");
    const navLinks=ref<NavLinks[]>([
        {
            id:1,
            icon:'mingcute:home-1-line',
            name:'Home',
            href:'/',
        },
        {
            id:2,
            icon:'mingcute:star-line',
            name:'Favorites',
            href:'/favorites',
        },


    ]);
    return {
        message,
        navLinks,
    }
})