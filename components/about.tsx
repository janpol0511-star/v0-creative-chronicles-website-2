"use client"

import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-background px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          <header className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">About Creative Chronicle Solutions</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Creative Chronicle Solutions is a leading book publisher specializing in high-quality sales books and guides. We help authors bring ideas to life, publish impactful works, and market them to the right audience with expert support.
              </p>
              <div className="mt-6">
                <a href="/careers" className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Apply Now</a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img src="https://framerusercontent.com/images/641vTth7zJIhrEdbNEZ1Evuk38.png" alt="Creative Chronicle Solutions" className="w-full max-w-sm rounded-2xl object-cover shadow-lg" />
            </div>
          </header>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Company History</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Creative Chronicle Solutions OPC is a One Person Corporation established in the Philippines on August 8, 2023. It is a dynamic and innovative digital service provider dedicated to helping clients across the globe realize their digital dreams. The company was officially granted its SEC Business Registration on September 6, 2023, with a skilled leader at the helm of its executive team.
              </p>

              <p className="mt-3 text-sm text-muted-foreground">
                Creative Chronicle Solutions OPC offers a wide range of digital services to meet the unique needs of the clients. The services include, but are not limited to: Web Development & Design, Digital Marketing, Graphic Design, Mobile App Development, Content Creation, E-commerce Solutions, IT Consulting and Custom Software Development.
              </p>

              <p className="mt-3 text-sm text-muted-foreground">
                The team of CCS OPC is composed of highly skilled and motivated professionals with diverse expertise in various digital domains. They are passionate about staying up-to-date with the latest trends and technologies in the digital landscape to provide our clients with the best possible solutions.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Creative Chronicles endeavors to become the trusted partner of choice for businesses worldwide in their quest for virtual assistant excellence. We envision a future where organizations, regardless of their size or industry, can access top-tier virtual assistants who enhance their productivity and success.
                  </p>
                </div>
                <div className="w-32 flex-shrink-0">
                  <img src="/images/vision.jpg" alt="Vision" className="w-full h-20 object-cover rounded-lg shadow" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    At Creative Chronicles, our mission is to empower businesses across diverse industries by providing them with highly skilled and dedicated virtual assistants. We are committed to streamlining operations, increasing efficiency, and enabling growth for our clients through our tailored virtual assistant solutions.
                  </p>
                </div>
                <div className="w-32 flex-shrink-0">
                  <img src="/images/mission.jpg" alt="Mission" className="w-full h-20 object-cover rounded-lg shadow" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
            <div className="mt-4 grid gap-3">
              <details className="rounded-lg border border-border p-4">
                <summary className="cursor-pointer font-medium">What is Creative Chronicle Solutions?</summary>
                <p className="mt-2 text-sm text-muted-foreground">Creative Chronicle Solutions is a publisher and digital services provider that helps authors publish, market, and sell their books while offering a range of digital agency services.</p>
              </details>
              <details className="rounded-lg border border-border p-4">
                <summary className="cursor-pointer font-medium">What services do you offer to authors?</summary>
                <p className="mt-2 text-sm text-muted-foreground">Publishing, marketing, design, and distribution services tailored to authors and sales-focused publications.</p>
              </details>
              <details className="rounded-lg border border-border p-4">
                <summary className="cursor-pointer font-medium">Can I self-publish with Creative Chronicle Solutions?</summary>
                <p className="mt-2 text-sm text-muted-foreground">Yes — we provide packages and guidance to help authors self-publish professionally.</p>
              </details>
              <details className="rounded-lg border border-border p-4">
                <summary className="cursor-pointer font-medium">How long does the publishing process take?</summary>
                <p className="mt-2 text-sm text-muted-foreground">Timelines vary by project; contact us for a custom timeline based on your needs.</p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
