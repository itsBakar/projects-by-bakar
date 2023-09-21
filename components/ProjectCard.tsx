import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: string;
  title: string;
  image: string;
  githubLink: string;
  demoLink: string;
}

import React from "react";
import { Url } from "next/dist/shared/lib/router/router";

const ProjectCard = ({ id, title, image, githubLink, demoLink }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={demoLink}>
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              className="h-full rounded-md object-cover"
              src={image}
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-end mt-4 p-0">
        <Link
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
          href={githubLink}
          target="_blank"
        >
          Github Link
          <div className="h-3 w-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
