import { useStorage } from "@vueuse/core"
interface NavLinks{
    id:number,
    icon:string,
    name:string,
    href:string,

}
type Meme = {
  postLink: string;
  subreddit: string;
  title: string;
  url: string;
  nsfw: boolean;
  spoiler: boolean;
  author: string;
  ups: number;
  preview: string[];
};
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
    const favoriteMemes=useStorage<Meme[]>("favoriteMemes",[])
    const addMemeToFavorites=(meme:Meme):void=>{
        favoriteMemes.value.push(meme);
        console.log(favoriteMemes.value)

    }
    const removeMemeFromFavorites=(postLink:string):void=>{
        const postlinkIndex:number=favoriteMemes.value.findIndex((meme)=>meme.postLink===postLink)
        if(postlinkIndex!==1){
            favoriteMemes.value.splice(postlinkIndex,1);
            console.log(favoriteMemes.value);
        }else{
            console.error("Index not found");
        }
        
    }
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
        supportedMemeSubreddits,
        favoriteMemes,

        addMemeToFavorites,
        removeMemeFromFavorites,
    }
})