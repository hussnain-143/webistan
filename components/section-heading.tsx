import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Badge className={isCenter ? "justify-center" : ""}>{eyebrow}</Badge>
      <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-ink md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-slateWarm md:text-[1.05rem]">
        {description}
      </p>
    </div>
  );
}
