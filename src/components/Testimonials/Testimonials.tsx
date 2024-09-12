import { testimonials } from "@/lib/testimonials";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2 className="text-3xl font-semibold leading-8 tracking-tight">
        Testimonials
      </h2>
      <div className="mt-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-2 font-medium text-3xl tracking-tight text-[#ff582e]">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-12 flow-root max-w-2xl sm:mt-16 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.tesimonial}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      alt=""
                      src={testimonial.author.imageUrl}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
