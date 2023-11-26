import type { MetaFunction } from "@remix-run/node";

import HelloWorld from "~/components/HelloWorld";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <section className="bg-blue-400 p-4 text-white">
      <HelloWorld />
    </section>
  );
}
