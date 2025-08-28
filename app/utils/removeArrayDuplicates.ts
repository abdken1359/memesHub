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

export function removeArrayDuplicates(memes:Meme[]):Meme[]{
     const result = Array.from(
                    new Map(memes.map(meme => [meme.url, meme])).values()
             );
    return result;
}