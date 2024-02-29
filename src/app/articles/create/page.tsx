"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Form from "@app/components/Form"
import Article from "@models/article";

const CreateArticle = () => {
    const [submitting, setSubmitting] = useState(false)
    const [article, setarticle] = useState<Article>({
        text: "",
        tags: ""
    })

    const createArticle = async (e: any) => {
        e.preventDefault();
        setSubmitting(true)
        console.log({e})
    }

  return (
    <Form type="Create" article={article} setArticle={setarticle} submitting={submitting} handleSubmit={createArticle}/>
  )
}

export default CreateArticle