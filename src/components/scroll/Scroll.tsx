import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Scroll.css?inline";
import { Form, Link } from "@builder.io/qwik-city";
import { useScrollSubmit } from "~/routes/scroll";

export default component$(() => {
  useStylesScoped$(styles);
  const scrollSubmit = useScrollSubmit();
  return (
    <article>
      <section>
        <div>
          <p>
            Prior to clicking the "Anchor tag" link, scroll to the bottom of the
            page and confirm that the details element is closed. Then, scroll
            back to the top and click on the "Anchor tag" link.
          </p>
          <p>
            Upon clicking the "Anchor tag" link, the details element should
            expand, and the browser should automatically scroll to the content
            within the details element (the paragraph element with the ID from
            the link). The text "Content" should be visible.
          </p>
          <p>
            <strong>Ensure the details element is closed once again.</strong>
          </p>
          <p>
            Scroll back to the top, enter text into the input field, and click
            the submit button.
          </p>
          <p>
            Following submission, the entered text should appear below the
            submit button.
          </p>
          <p>
            If you click on the "Anchor tag" link again, the browser will not
            open the details element or scroll to the content with the ID.
          </p>
          <p>
            To see the link function again, manually remove the hash from the
            URL and reload the page. Simply reloading the page will not suffice.
          </p>
          <p>
            Note: This manual removal of the hash is not required if the form is
            not submitted.
          </p>
          <p>**********</p>
          <p>
            Now, let's examine the "Actual Link". This is not an anchor tag but
            a Qwik Link component with the same href as the "Anchor tag" link.
          </p>
          <p>
            If you repeat the same process as with the "Anchor tag" link, you'll
            find that the "Actual Link" does not function - it neither scrolls
            down nor opens the details element, even before form submission.
          </p>
          <p>
            This behavior is markedly different from what can be observed on
            Stackblitz when running the exact same code with the same contents
            of package.json. On Stackblitz, the "Actual Link" not only functions
            (scrolling down and opening the details element), but it also works
            correctly even after form submission.
          </p>
          <a
            href="https://stackblitz.com/edit/qwik-starter-xqpaps"
            target="_blank"
          >
            Stackblitz link
          </a>
        </div>
        <div class="formContainer">
          <a href="#content">Anchor tag</a>
          <Link href="#content">Actual Link</Link>
          <Form action={scrollSubmit} class="form">
            <input type="text" name="content" />
            <button type="submit">Submit</button>
          </Form>
          {scrollSubmit.value?.success && (
            <p>{scrollSubmit.value.scrollInput}</p>
          )}
        </div>
      </section>
      <section>
        <details>
          <summary>Title</summary>
          <p id="content">Content</p>
        </details>
      </section>
    </article>
  );
});
