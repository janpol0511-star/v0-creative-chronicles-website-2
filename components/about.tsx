"use client"

import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-background px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-foreground mb-4">About<br/>Creative Chronicle Solutions</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Creative Chronicle Solutions is a leading book publisher specializing in high-quality sales books and guides. We help authors bring ideas to life, publish impactful works, and market them to the right audience with expert support.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6">Company History</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Creative Chronicle Solutions OPC is a One Person Corporation established in the Philippines on August 8, 2023. It is a dynamic and innovative digital service provider dedicated to helping clients across the globe realize their digital dreams. The company was officially granted its SEC Business Registration on September 6, 2023.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4">Our Vision</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Creative Chronicles endeavors to become the trusted partner of choice for businesses worldwide in their quest for virtual assistant excellence. We envision a future where organizations can access top-tier virtual assistants who enhance productivity and success.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4">Our Mission</h3>
            <p className="text-sm text-muted-foreground mb-6">
              At Creative Chronicles, our mission is to empower businesses across diverse industries by providing them with highly skilled and dedicated virtual assistants. We are committed to streamlining operations, increasing efficiency, and enabling growth for our clients through our tailored virtual assistant solutions.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">FAQs</h3>
              <div className="space-y-3">
                <details className="rounded-lg border border-border p-4">
                  <summary className="cursor-pointer font-medium">What services do you offer?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">We offer publishing, web development, digital marketing, graphic design, mobile app development, content creation, e-commerce solutions, and IT consulting.</p>
                </details>
                <details className="rounded-lg border border-border p-4">
                  <summary className="cursor-pointer font-medium">How can I apply for a sales agent position?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Click the "Apply Now" button in the header or hero to submit your application and view open roles.</p>
                </details>
                <details className="rounded-lg border border-border p-4">
                  <summary className="cursor-pointer font-medium">Where are you located?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">We are registered in the Philippines and serve clients globally.</p>
                </details>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
              <img src="https://framerusercontent.com/images/641vTth7zJIhrEdbNEZ1Evuk38.png" alt="About image" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
