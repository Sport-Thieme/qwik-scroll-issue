import { component$ } from "@builder.io/qwik";
import { routeAction$, zod$, z } from "@builder.io/qwik-city";
import Scroll from "~/components/scroll/Scroll";

export default component$(() => {
  return <Scroll />;
});

export const useScrollSubmit = routeAction$(
  async (data) => {
    return { success: true, scrollInput: data.content };
  },
  zod$({ content: z.string() })
);
