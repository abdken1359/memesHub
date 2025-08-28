import { removeArrayDuplicates } from "#imports"
interface NavLinks{
    id:number,
    icon:string,
    name:string,
    href:string,

}
interface Subreddit{
    id:number,
    image:string,
    imageAlt:string,
    name:string,
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
    const favoriteMemes = ref<Meme[]>([]);
    const addMemeToFavorites=(meme:Meme):void=>{
        
        favoriteMemes.value.push(meme);
        localStorage.setItem("favoriteMemes",JSON.stringify(removeArrayDuplicates(favoriteMemes.value)));
        

    }
    const removeMemeFromFavorites=(postLink:string):void=>{
        const postlinkIndex:number=favoriteMemes.value.findIndex((meme)=>meme.postLink===postLink)
        if(postlinkIndex!==-1){
            favoriteMemes.value.splice(postlinkIndex,1);
            localStorage.setItem("favoriteMemes",JSON.stringify(removeArrayDuplicates(favoriteMemes.value)));
            console.log(favoriteMemes.value);
        }else{
            console.error("Index not found");
        }
        
    }
    const loadFavoriteMemes=():void=>{
        const loaded=localStorage.getItem("favoriteMemes");
        if(loaded){
            favoriteMemes.value=JSON.parse(loaded);
        }
    }
    
    const supportedMemeSubreddits: Subreddit[] = [
        /* 
        "dankmemes",
        "me_irl",
        "wholesomememes",
        "2meirl4meirl",
        "AdviceAnimals",
        "Animemes",
        "comedyheaven",
        "historymemes",
        "PrequelMemes"
         */
        {
            id:1,
            image:"/Images/subredditImages/memes.webp",
            imageAlt:"Memes subreddit Image",
            name:"memes"
            
        },
         {
            id:2,
            image:"/Images/subredditImages/dank_memes.png",
            imageAlt:"DankMemes subreddit Image",
            name:"dankmemes"
            
        },
        {
            id:3,
            image:"/Images/subredditImages/me_irl.png",
            imageAlt:"me_irl subreddit Image",
            name:"me_irl"
            
        },
        {
            id:4,
            image:"/Images/subredditImages/wholesome_memes.png",
            imageAlt:"WholesomeMemes subreddit Image",
            name:"wholesomememes"
            
        },
        {
            id:5,
            image:"/Images/subredditImages/2meirl4meirl.png",
            imageAlt:"2meirl4meirl subreddit Image",
            name:"2meirl4meirl"
            
        },
        {
            id:6,
            image:"/Images/subredditImages/AdviceAnimals.webp",
            imageAlt:"AdviceAnimals subreddit Image",
            name:"AdviceAnimals"
            
        },
        {
            id:7,
            image:"/Images/subredditImages/historymemes.png",
            imageAlt:"historymemes subreddit Image",
            name:"historymemes"
            
        },
        {
            id:8,
            image:"/Images/subredditImages/comedyheaven.webp",
            imageAlt:"comedyheaven subreddit Image",
            name:"comedyheaven"
            
        },
        {
            id:9,
            image:"/Images/subredditImages/PrequelMemes.png",
            imageAlt:"PrequelMemes subreddit Image",
            name:"PrequelMemes"
            
        },
        {
            id:10,
            image:"/Images/subredditImages/Animemes.webp",
            imageAlt:"Animeemes subreddit Image",
            name:"Animemmes"
            
        }
       
        ];

    return {
        message,
        navLinks,
        supportedMemeSubreddits,
        favoriteMemes,

        addMemeToFavorites,
        removeMemeFromFavorites,
        loadFavoriteMemes,
    }
})