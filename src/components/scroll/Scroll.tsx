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
            Before clicking on the "Anchor tag" link, scroll to the bottom and
            make sure details element is closed. Scroll back up and click on the
            "Anchor tag" link.
          </p>
          <p>
            After clicking on the "Anchor tag" link, the details element should
            open and the browser should automatically scroll down to the content
            in details (p element which holds the id from the link). The text
            "Content" should be visible.
          </p>
          <p>
            <strong>Now, make sure the details element is closed again.</strong>
          </p>
          <p>
            Next, scroll back up, enter some text in the input field and click
            on the submit button.
          </p>
          <p>
            After submitting, the entered text should be displayed below the
            submit button.
          </p>
          <p>
            Now click on the "Anchor tag" link again. Unfortunately, the browser
            will neither open the details element nor scroll to the content with
            the id.
          </p>
          <p>
            If you'd like to try the link working again, you will have to
            manually remove the hash from the url, then reload the page. Just
            reloading the page will not work out.
          </p>
          <p>
            Note that this manual removal of the hash (for the link to work
            correctly) is not necessary if the form is not submitted.
          </p>
          <p>**********</p>
          <p>
            Now, onto checking the "Actual Link" link. As the name suggests,
            this is not an anchor tag but the Qwik Link component which has the
            same href as the "Anchor tag" link.
          </p>
          <p>
            If you follow the same process as with the "Anchor tag" link, you
            will observe that the "Actual Link" does not work at all - it
            doesn't scroll down nor open the details element even before
            submitting the Form.
          </p>
          <p>
            This shows very different behaviour from the one that can be
            observed on Stackblitz when running the exact same code with the
            same contents of package.json. On Stackblitz, not only the "Actual
            Link" will work (scrolling down and opening the details element) but
            it will also work correctly even after submitting the Form.
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
