"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@app/components/Form";
import Article from "@models/article";

const CreateArticle = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [article, setarticle] = useState<Article>({
    text: "",
    tags: "",
  });

  const createArticle = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    article.userId = session?.user?.id;
    try {
      const response = await fetch("/api/article/", {
        method: "POST",
        body: JSON.stringify(article)
      });

      if (response.ok) {
        router.push("/articles");
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      article={article}
      setArticle={setarticle}
      submitting={submitting}
      handleSubmit={createArticle}
    />
  );
};

export default CreateArticle;
