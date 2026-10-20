"use client";

import { useState } from "react";
import { Share2, Link as LinkIcon, Check, MessageCircle } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const articleUrl = `https://qimmaaa.com/articles/${slug}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
      const textArea = document.createElement("textarea");
      textArea.value = articleUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareToWhatsApp = () => {
    const text = encodeURIComponent(`${title}\n${articleUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent(title);
    const url = encodeURIComponent(articleUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener,noreferrer");
  };

  const shareToLinkedIn = () => {
    const url = encodeURIComponent(articleUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="my-10 p-5 rounded-2xl border border-[#E9E4DC] bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-[#283831] font-semibold text-sm">
        <Share2 className="w-4 h-4 text-[#AD8665]" />
        <span>شارك هذه المقالة مع فريقك أو شبكتك المهنية:</span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {/* WhatsApp */}
        <button
          type="button"
          onClick={shareToWhatsApp}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#E9E4DC] text-xs font-medium text-[#424743] hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors shadow-2xs"
          title="مشاركة عبر واتساب"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>واتساب</span>
        </button>

        {/* X / Twitter */}
        <button
          type="button"
          onClick={shareToTwitter}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#E9E4DC] text-xs font-medium text-[#424743] hover:text-[#283831] hover:border-[#283831]/40 transition-colors shadow-2xs"
          title="مشاركة عبر منصة X"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>منصة X</span>
        </button>

        {/* LinkedIn */}
        <button
          type="button"
          onClick={shareToLinkedIn}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#E9E4DC] text-xs font-medium text-[#424743] hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-colors shadow-2xs"
          title="مشاركة عبر لينكد إن"
        >
          <svg className="w-3.5 h-3.5 fill-current text-[#0A66C2]" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
          <span>LinkedIn</span>
        </button>

        {/* Copy Link */}
        <button
          type="button"
          onClick={copyToClipboard}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#E9E4DC] text-xs font-medium text-[#283831] hover:bg-[#F3EEE7] transition-colors shadow-2xs"
          title="نسخ رابط المقال"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-[#AD8665]" />
              <span className="text-[#AD8665] font-bold">تم نسخ الرابط!</span>
            </>
          ) : (
            <>
              <LinkIcon className="w-4 h-4 text-[#777B75]" />
              <span>نسخ الرابط</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
