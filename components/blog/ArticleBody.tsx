interface ArticleBodyProps {
  contentHtml: string;
}

export default function ArticleBody({ contentHtml }: ArticleBodyProps) {
  return (
    <div
      className="prose-editorial editorial-reading-width"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
