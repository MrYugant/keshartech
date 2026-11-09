import { Fragment, type ElementType } from "react";
import { cn, splitWords, stagger } from "@/lib/utils";

interface AnimatedHeadingProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** Words (case-insensitive, punctuation ignored) rendered in the accent colour. */
  highlight?: string[];
  /** Offset the stagger index, e.g. to start after an eyebrow. */
  startIndex?: number;
  id?: string;
}

const normalise = (w: string) => w.toLowerCase().replace(/[^a-z0-9']/g, "");

/**
 * Headline whose words rise from behind a mask on load. Pure CSS, so it runs
 * before hydration and the full text is always present in the HTML for SEO.
 */
export function AnimatedHeading({ text, as: Tag = "h1", className, highlight = [], startIndex = 0, id }: AnimatedHeadingProps) {
  const marks = new Set(highlight.map(normalise));
  const words = splitWords(text);
  return (
    <Tag id={id} className={className}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="word-mask">
            <span style={stagger(i + startIndex)} className={cn(marks.has(normalise(word)) && "text-accent-text")}>
              {word}
            </span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
  );
}
