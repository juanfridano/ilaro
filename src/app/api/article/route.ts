import Article, { ArticleEntity } from "@models/article";
import { connectDB } from "@utils/database";

export const GET = async (req: Request) => {
    await connectDB();
    const articles: Article[] = await ArticleEntity.find();
    
    return new Response(JSON.stringify(articles), { status: 200 });
};

export const POST = async (req: Request) => {
  const article: Article = await req.json();

  await connectDB();
  const newArticle = new ArticleEntity(article)
  await newArticle.save()

  return new Response("", { status: 201 });
};
