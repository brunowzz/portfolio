"use client";

import { DiscussionEmbed } from "disqus-react";

export default function DisqusComments({ id, name }: any) {
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const disqusConfig = {
    url: pageUrl,
    identifier: id,
    title: name,
  };
  return (
    <DiscussionEmbed shortname="brunobarreirasdev" config={disqusConfig} />
  );
}
