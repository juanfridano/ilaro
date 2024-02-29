import Article from "@models/article";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";

interface FormProps {
  type: string;
  article: Article;
  setArticle: Dispatch<SetStateAction<any>>;
  submitting: boolean;
  handleSubmit: (e:any) => Promise<void>;
}

const Form: FC<FormProps> = (props) => {
  return (
    <section className="w-full max-w-full flex-center flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{props.type} Arcticle</span>
      </h1>
      <p className="desc text-left max-w-md">
        This would be the subtitle dsad as das ds ad asd as das sad{" "}
      </p>
      <form
        onSubmit={props.handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            The article content
          </span>
          <textarea
            value={props.article.text}
            onChange={(e) =>
              props.setArticle({ ...props.article, text: e.target.value })
            }
            placeholder="Write the article text.."
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tags
          </span>
          <input
            value={props.article.tags}
            onChange={(e) =>
              props.setArticle({ ...props.article, tags: e.target.value })
            }
            placeholder="Write the article tags.."
            className="form_input"
            required
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={props.submitting}
            className="px-5 py-1.5 bg-green-600 rounded-full text-white"
          >
            {props.submitting ? `${props.type}...` : props.type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
