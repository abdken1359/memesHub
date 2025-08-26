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
            icon:'mingcute:random-line',
            name:'Random Memes',
            href:'/random_memes'

        },
        {
            id:3,
            icon:'mingcute:reddit-line',
            name:'Subreddits',
            href:'/subreddits'
        },
        {
            id:4,
            icon:'mingcute:star-line',
            name:'Favorites',
            href:'/favorites',
        },


    ]);
    const supportedMemeSubreddits: string[] = [
        "memes",
        "dankmemes",
        "me_irl",
        "wholesomememes",
        "2meirl4meirl",
        "AdviceAnimals",
        "Animemes",
        "comedyheaven",
        "historymemes",
        "PrequelMemes"
        ];

    return {
        message,
        navLinks,
        supportedMemeSubreddits
    }
})