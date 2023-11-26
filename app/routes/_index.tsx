import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
      <section className='bg-blue-400 p-4 text-white'>
          <h1>
              Hello World
          </h1>
          <span>
              Everything is working as expected!
          </span>
      </section>
  );
}
