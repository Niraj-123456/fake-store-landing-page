const WhatWeOffer = () => {
  return (
    <section id="whatWeOffer" className="bg-white">
      <div className="mx-auto w-full">
        <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                We built our business on customer service
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
              <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img
                      className="mx-auto h-16 w-16"
                      src="https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    Free shipping
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    It&#039;s not actually free we just price it into the
                    products. Someone&#039;s paying for it, and it&#039;s not
                    us.
                  </p>
                </div>
              </div>
              <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img
                      className="mx-auto h-16 w-16"
                      src="https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    10-year warranty
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    If it breaks in the first 10 years we&#039;ll replace it.
                    After that you&#039;re on your own though.
                  </p>
                </div>
              </div>
              <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img
                      className="mx-auto h-16 w-16"
                      src="https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    Exchanges
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    If you don&#039;t like it, trade it to one of your friends
                    for something of theirs. Don&#039;t send it here though.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
